/* =========================================
   RESPONSIVE.JS — Оптимизация для телефонов
   ========================================= */

(function() {

    // 1. Автоматическое закрытие меню при клике вне его
    function closeMobileMenu(e) {
        const navMore = document.querySelector('.nav-more');
        if (!navMore) return;
        // Если клик был вне выпадающего меню, убираем фокус
        if (!navMore.contains(e.target)) {
            navMore.querySelector('.nav-more-btn')?.blur();
        }
    }
    document.addEventListener('click', closeMobileMenu);

    // 2. Плавный скролл для якорных ссылок (если не сработал CSS)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === "#" || targetId === "") return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerHeight = document.querySelector('header')?.offsetHeight || 70;
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
                // Закрываем мобильное меню после перехода
                closeMobileMenu({ target: document.body });
            }
        });
    });

    // 3. Улучшенные тач-события для карточек (двойной тап для перехода)
    let lastTapTime = 0;
    document.querySelectorAll('.card[data-url]').forEach(card => {
        card.addEventListener('click', function(e) {
            // Если тап по ссылке внутри карточки — не перехватываем
            if (e.target.closest('a')) return;

            const currentTime = new Date().getTime();
            const tapGap = currentTime - lastTapTime;

            if (tapGap < 300 && tapGap > 0) {
                // Двойной тап — открываем проект
                const url = this.getAttribute('data-url');
                if (url) window.open(url, '_blank');
            }
            lastTapTime = currentTime;
        });
    });

    // 4. Отключение ховер-эффектов на тачскринах (добавляем класс)
    if (window.matchMedia('(hover: none)').matches) {
        document.body.classList.add('touch-device');
        // Убираем все transition для мгновенной реакции
        const style = document.createElement('style');
        style.textContent = `
            .touch-device .card,
            .touch-device .btn,
            .touch-device .workflow-step,
            .touch-device .testimonial-card {
                transition: none !important;
            }
        `;
        document.head.appendChild(style);
    }

    // 5. Лёгкий прелоадер (опционально, можно убрать)
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // 6. Динамический vh для мобильных браузеров (чтобы hero был на весь экран)
    function setVH() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);

    // 7. Убираем активное состояние при скролле (iOS)
    document.addEventListener('touchmove', function() {}, { passive: true });

})();

// js/share.js — логика виджета «Поделиться»
(function() {
    const toggle = document.getElementById('share-toggle');
    const menu = document.getElementById('share-menu');
    if (!toggle || !menu) return;

    // Открытие / закрытие меню
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('active');
    });

    // Закрытие при клике вне меню
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && e.target !== toggle) {
            menu.classList.remove('active');
        }
    });

    // Обработчики кнопок «поделиться»
    const url = window.location.href;
    const title = document.title;

    menu.querySelectorAll('[data-share]').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.getAttribute('data-share');
            let shareUrl = '';

            switch (type) {
                case 'copy':
                    navigator.clipboard.writeText(url).then(() => {
                        alert('✅ Ссылка скопирована!');
                    }).catch(() => {
                        prompt('Скопируйте ссылку:', url);
                    });
                    break;
                case 'telegram':
                    shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
                    window.open(shareUrl, '_blank');
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
                    window.open(shareUrl, '_blank');
                    break;
                case 'whatsapp':
                    shareUrl = `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`;
                    window.open(shareUrl, '_blank');
                    break;
            }
            menu.classList.remove('active');
        });
    });

    // Нативная кнопка «Поделиться» (Web Share API)
    const nativeBtn = document.getElementById('share-native');
    if (nativeBtn && navigator.share) {
        nativeBtn.addEventListener('click', async () => {
            try {
                await navigator.share({ title, url });
            } catch (err) {}
            menu.classList.remove('active');
        });
    } else if (nativeBtn) {
        nativeBtn.style.display = 'none';
    }
})();