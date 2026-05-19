/* =========================================
   SETTINGS.JS — Инициализация и события
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    // Получаем сохранённые настройки и объединяем с defaults
    const saved = getSettings();
    const merged = { ...defaults, ...saved };
    applySettings(merged);

    // Если добавились новые ключи — сохраняем
    if (JSON.stringify(saved) !== JSON.stringify(merged)) {
        localStorage.setItem('site-settings', JSON.stringify(merged));
    }

    // Если мы на странице настроек — восстанавливаем UI и вешаем обработчики
    if (document.querySelector('.settings-container')) {
        // Первый вызов
        updateSettingsUI(merged);
        // Второй вызов с задержкой для надёжности
        setTimeout(() => {
            const current = getSettings();
            updateSettingsUI({ ...defaults, ...current });
        }, 20);

        // Инициализация вкладок
        if (typeof initTabs === 'function') {
            initTabs();
        }

        // Обработчики для всех data-setting групп
        document.querySelectorAll('[data-setting]').forEach(group => {
            const settingName = group.getAttribute('data-setting');

            // Клик по кнопке
            group.addEventListener('click', (e) => {
                const btn = e.target.closest('button');
                if (!btn) return;
                const value = btn.value;
                group.querySelectorAll('button').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                saveSettings({ [settingName]: value });
            });

            // Изменение ползунка или цвета
            group.addEventListener('input', (e) => {
                if ((e.target.tagName === 'INPUT' && e.target.type === 'range') || e.target.type === 'color') {
                    saveSettings({ [settingName]: e.target.value });
                }
            });
        });
    }

    // Автоматическая тема
    if (merged.theme === 'auto') {
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
            if (getSettings().theme === 'auto') {
                const newSettings = { ...getSettings(), theme: 'auto' };
                applySettings(newSettings);
            }
        });
    }

    // Синхронизация между вкладками
    window.addEventListener('storage', (e) => {
        if (e.key === 'site-settings' && e.newValue) {
            const newSettings = JSON.parse(e.newValue);
            applySettings({ ...defaults, ...newSettings });
        }
    });
});