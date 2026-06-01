/* =========================================
   CORE.JS — Ядро настроек
   ========================================= */

// Значения по умолчанию
const defaults = {
    theme: 'dark',
    lang: 'ru',
    font: 'inter',
    accent: '#00d1b2',
    animations: 'on',
    fontsize: 'normal',
    background: 'stars',
    parallax: 'on',
    revealAnim: 'on',
    navSticky: 'on',
    glassOpacity: 0.7,
    blurAmount: 10,
    borderRadius: 16,
    navOpacity: 0.8,
    navBlur: 12,
    cardRadius: 16,
    cardShadow: 20,
    cardHoverScale: 1.05,
    lineHeight: 1.6,
    letterSpacing: 0,
    bgColor: '#0b0e14',
    textColor: '#f0f6fc',
    mutedColor: '#8b949e',
    cardBgColor: '#161b22'
};

// Карты значений
const fontMap = {
    inter: "'Inter', system-ui, sans-serif",
    roboto: "'Roboto', system-ui, sans-serif",
    mono: "'Fira Code', monospace"
};

const sizeMap = {
    small: '14px',
    normal: '16px',
    large: '18px'
};

// Получить все настройки из localStorage
function getSettings() {
    try {
        return JSON.parse(localStorage.getItem('site-settings')) || {};
    } catch (e) {
        return {};
    }
}

// Сохранить настройки и применить их
function saveSettings(obj) {
    const current = getSettings();
    const merged = { ...current, ...obj };
    localStorage.setItem('site-settings', JSON.stringify(merged));
    applySettings(merged);
}

// Применить настройки к DOM (CSS-переменные, классы, язык)
function applySettings(settings) {
    const body = document.body;
    const root = document.documentElement;

    // Тема
    body.classList.remove('light-theme', 'auto-theme');
    if (settings.theme === 'light') {
        body.classList.add('light-theme');
    } else if (settings.theme === 'auto') {
        body.classList.add('auto-theme');
        if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            body.classList.add('light-theme');
        }
    }

    // CSS-переменные
    root.style.setProperty('--accent', settings.accent || defaults.accent);
    root.style.setProperty('--font-family', fontMap[settings.font] || fontMap.inter);
    root.style.setProperty('--base-font-size', sizeMap[settings.fontsize] || sizeMap.normal);
    root.style.setProperty('--glass-opacity', settings.glassOpacity || defaults.glassOpacity);
    root.style.setProperty('--blur-amount', (settings.blurAmount || defaults.blurAmount) + 'px');
    root.style.setProperty('--border-radius', (settings.borderRadius || defaults.borderRadius) + 'px');
    root.style.setProperty('--nav-opacity', settings.navOpacity || defaults.navOpacity);
    root.style.setProperty('--nav-blur', (settings.navBlur || defaults.navBlur) + 'px');
    root.style.setProperty('--card-radius', (settings.cardRadius || defaults.cardRadius) + 'px');
    root.style.setProperty('--card-shadow', (settings.cardShadow || defaults.cardShadow) + 'px');
    root.style.setProperty('--card-hover-scale', settings.cardHoverScale || defaults.cardHoverScale);
    root.style.setProperty('--line-height', settings.lineHeight || defaults.lineHeight);
    root.style.setProperty('--letter-spacing', (settings.letterSpacing || defaults.letterSpacing) + 'px');
    root.style.setProperty('--bg', settings.bgColor || defaults.bgColor);
    root.style.setProperty('--text', settings.textColor || defaults.textColor);
    root.style.setProperty('--muted', settings.mutedColor || defaults.mutedColor);
    root.style.setProperty('--card', settings.cardBgColor || defaults.cardBgColor);

    // Классы-состояния
    if (settings.animations === 'off') body.classList.add('no-animations');
    else body.classList.remove('no-animations');

    if (settings.parallax === 'off') body.classList.add('no-parallax');
    else body.classList.remove('no-parallax');

    if (settings.revealAnim === 'off') body.classList.add('no-reveal');
    else body.classList.remove('no-reveal');

    if (settings.navSticky === 'off') body.classList.add('nav-static');
    else body.classList.remove('nav-static');

    // Фон
    body.classList.remove('bg-stars', 'bg-nebula', 'bg-static');
    body.classList.add('bg-' + (settings.background || 'stars'));

    // Язык — вызывается из i18n.js (должен быть глобально доступен)
    if (typeof applyLanguage === 'function' && settings.lang) {
        applyLanguage(settings.lang);
    }
}