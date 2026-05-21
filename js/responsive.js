// responsive.js — Мобильная магия (жесты, меню, динамическая высота)

(function() {
    // 1. Динамическая высота экрана (фикс для мобильных браузеров)
    function setVH() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);

    // 2. Scroll Snap (автоматически, если контейнер существует)
    // Никакого JS не нужно, CSS делает всё сам.

    // 3. Свайп-галерея для карточек (уже работает через CSS scroll-snap)

    // 4. Контекстное меню по долгому нажатию
    let longPressTimer;
    let activeCardUrl = '';

    // Создаём меню один раз и добавляем в body
    const menu = document.createElement('div');
    menu.className = 'quick-actions-menu';
    menu.innerHTML = `
        <button class="quick-action-btn" id="qa-open">
            <span class="icon">👁️</span> Открыть
        </button>
        <button class="quick-action-btn" id="qa-share">
            <span class="icon">📤</span> Поделиться
        </button>
        <button class="quick-action-btn" id="qa-github">
            <span class="icon">🐙</span> GitHub
        </button>
        <button class="quick-action-btn" id="qa-close">
            <span class="icon">✖️</span> Закрыть
        </button>
    `;
    document.body.appendChild(menu);

    // Показ меню
    function showMenu(url) {
        activeCardUrl = url;
        menu.classList.add('active');
    }

    // Скрытие меню
    function hideMenu() {
        menu.classList.remove('active');
    }

    // Вешаем обработчики на все карточки с data-url
    document.querySelectorAll('.card[data-url]').forEach(card => {
        card.addEventListener('touchstart', (e) => {
            longPressTimer = setTimeout(() => {
                const url = card.getAttribute('data-url');
                if (url) showMenu(url);
            }, 500);
        });

        card.addEventListener('touchend', () => {
            clearTimeout(longPressTimer);
        });

        card.addEventListener('touchmove', () => {
            clearTimeout(longPressTimer);
        });
    });

    // Обработчики кнопок меню
    document.getElementById('qa-open').addEventListener('click', () => {
        if (activeCardUrl) window.open(activeCardUrl, '_blank');
        hideMenu();
    });

    document.getElementById('qa-share').addEventListener('click', () => {
        if (activeCardUrl && navigator.share) {
            navigator.share({ url: activeCardUrl });
        } else if (activeCardUrl) {
            prompt('Скопируйте ссылку:', activeCardUrl);
        }
        hideMenu();
    });

    document.getElementById('qa-github').addEventListener('click', () => {
        // Предполагаем, что ссылка на GitHub есть в data-атрибуте или можно построить
        // Как fallback — открываем твой профиль
        window.open('https://github.com/daardos', '_blank');
        hideMenu();
    });

    document.getElementById('qa-close').addEventListener('click', hideMenu);

    // Скрываем меню при клике вне его
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target)) {
            hideMenu();
        }
    });

    // 5. Отключаем контекстное меню браузера на долгое нажатие для карточек
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('contextmenu', (e) => e.preventDefault());
    });

    console.log('📱 Мобильная магия активирована: жесты, меню, динамический экран');
})();