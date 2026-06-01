// public/js/responsive.js
(function() {
    const header = document.querySelector('header');
    if (!header) return;

    const nav = header.querySelector('nav');
    if (!nav) return;

    // Создаём кнопку гамбургера, если её ещё нет
    let hamburger = document.querySelector('.hamburger');
    if (!hamburger) {
        hamburger = document.createElement('button');
        hamburger.className = 'hamburger';
        hamburger.setAttribute('aria-label', 'Меню');
        hamburger.innerHTML = '<span></span><span></span><span></span>';
        nav.insertBefore(hamburger, nav.firstChild);
    }

    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;

    // Открытие/закрытие мобильного меню
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        hamburger.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку (для мобильных)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                // Даём ссылке отработать, затем закрываем меню
                setTimeout(() => {
                    navLinks.classList.remove('show');
                    hamburger.classList.remove('active');
                }, 100);
            }
        });
    });

    // Управление кнопкой «Ещё»
    const moreBtn = document.querySelector('.nav-more-btn');
    const dropdown = document.querySelector('.nav-dropdown');

    if (moreBtn && dropdown) {
        moreBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdown.classList.toggle('open');
        });

        // Закрытие при клике вне
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.nav-more')) {
                dropdown.classList.remove('open');
            }
        });
    }

    // Закрытие мобильного меню при клике вне
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav') && navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            hamburger.classList.remove('active');
        }
    });

    // Адаптивная логика при ресайзе
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            hamburger.classList.remove('active');
        }
    });
})();