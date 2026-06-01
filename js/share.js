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