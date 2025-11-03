// Email Collection Handler
document.addEventListener('DOMContentLoaded', function() {
  // Check if user has already signed up
  const hasSignedUp = localStorage.getItem('lsc_email_signed_up');
  
  // Function to check if email is already signed up
  function isEmailSignedUp(email) {
    const signedUpEmails = JSON.parse(localStorage.getItem('lsc_signed_up_emails') || '[]');
    return signedUpEmails.includes(email.toLowerCase());
  }
  
  // Function to mark email as signed up
  function markEmailAsSignedUp(email) {
    const signedUpEmails = JSON.parse(localStorage.getItem('lsc_signed_up_emails') || '[]');
    signedUpEmails.push(email.toLowerCase());
    localStorage.setItem('lsc_signed_up_emails', JSON.stringify(signedUpEmails));
    localStorage.setItem('lsc_email_signed_up', 'true');
  }
  
  // Function to handle form submission
  function handleEmailSubmission(form, emailInput) {
    const email = emailInput.value.trim();
    
    // Validate email
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Check if already signed up
    if (isEmailSignedUp(email)) {
      alert('You have already signed up with this email!');
      emailInput.value = '';
      return;
    }
    
    // Create FormData
    const formData = new FormData();
    formData.append('email', email);
    formData.append('platform', 'LSC');
    
    // Disable form during submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Signing up...';
    
    // Send to API
    fetch('https://lsc-email-collector.vercel.app/api/collect-email', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Mark email as signed up in localStorage
      markEmailAsSignedUp(email);
      
      // Show success message
      alert('Thank you for signing up!');
      
      // Reset form
      emailInput.value = '';
      
      // Disable the form to prevent resubmission
      emailInput.disabled = true;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Signed up!';
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error signing up. Please try again later.');
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    });
  }
  
  // Find all newsletter forms and attach event listeners
  const newsletterForms = document.querySelectorAll('.home-newsletter-form, .about-newsletter-form, .sustainability-newsletter-form');
  
  newsletterForms.forEach(form => {
    const emailInput = form.querySelector('input[type="email"]');
    
    // Disable form if already signed up
    if (hasSignedUp) {
      emailInput.disabled = true;
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Already signed up';
      }
    }
    
    // Add form submit event listener
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      handleEmailSubmission(form, emailInput);
    });
  });
});

