/* =========================================
   SETTINGS-UI.JS — Интерфейс страницы настроек
   ========================================= */

// Обновляет переключатели и ползунки под текущие настройки
function updateSettingsUI(settings) {
    document.querySelectorAll('[data-setting]').forEach(group => {
        const settingName = group.getAttribute('data-setting');
        const currentValue = settings[settingName] !== undefined ? settings[settingName] : defaults[settingName];

        // Кнопки
        const buttons = group.querySelectorAll('button');
        buttons.forEach(btn => {
            btn.classList.remove('active');
            if (String(btn.value).trim() === String(currentValue).trim()) {
                btn.classList.add('active');
            }
        });

        // Ползунки range
        const range = group.querySelector('input[type="range"]');
        if (range) {
            range.value = currentValue;
        }

        // Инпут цвета
        const colorInput = group.querySelector('input[type="color"]');
        if (colorInput) {
            colorInput.value = currentValue;
        }
    });
}

// Инициализация вкладок (если используются)
function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            contents.forEach(c => c.classList.remove('active'));
            document.getElementById(target).classList.add('active');
        });
    });
}

// Кнопка сброса (если есть на странице)
const resetBtn = document.getElementById('reset-settings-btn');
if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        if (confirm('Вы уверены? Все настройки будут сброшены.')) {
            localStorage.removeItem('site-settings');
            const cleanSettings = { ...defaults };
            applySettings(cleanSettings);
            updateSettingsUI(cleanSettings);
            localStorage.setItem('site-settings', JSON.stringify(cleanSettings));
        }
    });
}