 const nav = document.getElementById('navbar');
    const menu = document.getElementById('nav-links');

    // Change navbar style on scroll
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Toggle hamburger menu
    function toggleMenu() {
      menu.classList.toggle('active');
    }

    // Close menu on link click (mobile UX)
    document.querySelectorAll('#nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        if (menu.classList.contains('active')) {
          menu.classList.remove('active');
        }
      });
    });