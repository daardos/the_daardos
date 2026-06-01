// js/bonus-modal.js
(function() {
    // Показываем только если ещё не видели
    if (localStorage.getItem('bonus-modal-shown') === 'true') return;

    // HTML-разметка модального окна
    const modalHTML = `
        <div class="bonus-overlay" id="bonus-overlay">
            <div class="bonus-modal">
                <button class="bonus-close" id="bonus-close">&times;</button>
                <div class="bonus-icon">🔥</div>
                <h2 data-i18n="bonus-title">Бонус для первых клиентов!</h2>
                <p data-i18n="bonus-text">Так как я нарабатываю рейтинг, для первых 3‑х заказчиков — работа по сниженной стоимости или бесплатный бонус.</p>
                <div class="bonus-buttons">
                    <a href="resume.html" class="btn" data-i18n="bonus-details-btn">Узнать подробнее</a>
                    <button class="btn btn-partner" id="bonus-close-btn" data-i18n="bonus-close-btn">Закрыть</button>
                </div>
            </div>
        </div>
    `;

    // Вставляем в DOM
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const overlay = document.getElementById('bonus-overlay');
    const closeButtons = document.querySelectorAll('#bonus-close, #bonus-close-btn');

    // Показываем через 1.5 секунды после загрузки
    window.addEventListener('load', () => {
        setTimeout(() => {
            overlay.classList.add('active');
        }, 1500);
    });

    // Закрытие
    function closeModal() {
        overlay.classList.remove('active');
        localStorage.setItem('bonus-modal-shown', 'true');
        // Удаляем со страницы после анимации
        setTimeout(() => {
            if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        }, 500);
    }

    closeButtons.forEach(btn => btn.addEventListener('click', closeModal));

    // Закрытие по клику на фон
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });
})();