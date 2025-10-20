// Shared navbar behavior: hamburger toggle, active link highlighting
(function () {
  function onReady(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  onReady(function () {
    var hamburgerMenu = document.getElementById('hamburger-menu');
    var mobileNav = document.getElementById('mobile-nav');

    if (hamburgerMenu && mobileNav) {
      hamburgerMenu.addEventListener('click', function () {
        hamburgerMenu.classList.toggle('active');
        mobileNav.classList.toggle('active');
        if (mobileNav.classList.contains('active')) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      });

      // Close when clicking on a link
      var mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
      mobileNavLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          hamburgerMenu.classList.remove('active');
          mobileNav.classList.remove('active');
          document.body.style.overflow = '';
        });
      });

      // Close when clicking outside (overlay click)
      mobileNav.addEventListener('click', function (e) {
        if (e.target === mobileNav) {
          hamburgerMenu.classList.remove('active');
          mobileNav.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }

    // Active link highlighting for both desktop and mobile navs
    try {
      var path = window.location.pathname || '';
      var current = path.split('/').pop();
      if (!current || current === '/') current = 'index.html';

      var allLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
      allLinks.forEach(function (a) {
        a.classList.remove('active');
        var href = (a.getAttribute('href') || '').trim();
        if (!href || href === '#') return;

        // Normalize comparison for index
        var normalizedHref = href === '/' ? 'index.html' : href;
        if (normalizedHref === current) {
          a.classList.add('active');
        } else if (current === 'index.html' && (normalizedHref === '' || normalizedHref === '/')) {
          a.classList.add('active');
        }
      });
    } catch (e) {
      // no-op
    }
  });
})();


