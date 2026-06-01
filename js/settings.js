(function() {
    const DEFAULTS = {
        theme: 'dark',
        font: 'inter',
        fontsize: 'normal',
        accent: '#00d1b2',
        animations: 'on',
        language: 'ru'
    };

    function getSettings() {
        try {
            const saved = JSON.parse(localStorage.getItem('site-settings')) || {};
            return Object.assign({}, DEFAULTS, saved);
        } catch (e) {
            return Object.assign({}, DEFAULTS);
        }
    }

    function applySettings(settings) {
        const root = document.documentElement;
        document.body.classList.remove('light-theme');

        // Тема
        if (settings.theme === 'light') {
            document.body.classList.add('light-theme');
        } else if (settings.theme === 'auto') {
            if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                document.body.classList.add('light-theme');
            }
        }

        // Шрифт и размер
        const fonts = {
            inter: "'Inter', system-ui, sans-serif",
            roboto: "'Roboto', system-ui, sans-serif",
            mono: "'Fira Code', monospace"
        };
        const fontFamily = fonts[settings.font] || fonts.inter;
        const sizes = { small: '14px', normal: '16px', large: '18px' };
        const baseSize = sizes[settings.fontsize] || sizes.normal;
        document.body.style.fontFamily = fontFamily;
        document.body.style.fontSize = baseSize;

        // Акцент
        root.style.setProperty('--accent', settings.accent);

        // Анимации
        if (settings.animations === 'off') {
            document.body.classList.add('no-animations');
        } else {
            document.body.classList.remove('no-animations');
        }

        // Инжектируем глобальные стили
        updateGlobalStyles(settings);
    }

    function updateGlobalStyles(settings) {
        let styleEl = document.getElementById('settings-global-styles');
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = 'settings-global-styles';
            document.head.appendChild(styleEl);
        }

        let lightCSS = '';
        const isLight = settings.theme === 'light' ||
            (settings.theme === 'auto' && window.matchMedia('(prefers-color-scheme: light)').matches);

        if (isLight) {
            lightCSS = `
                /* Hero-секции (главная, услуги, обо мне) */
                .light-theme .hero,
                .light-theme .hero-enhanced,
                .light-theme .page-hero {
                    background: linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('../avatar/8-2.webp') !important;
                    background-size: cover !important;
                }

                /* Шапка и навигация */
                .light-theme header,
                .light-theme nav {
                    background: #ffffff !important;
                    border-bottom: 1px solid #ddd !important;
                }

                /* Все заголовки */
                .light-theme h1,
                .light-theme h2,
                .light-theme h3,
                .light-theme h4,
                .light-theme h5,
                .light-theme h6,
                .light-theme .hero-title,
                .light-theme .hero-greeting,
                .light-theme .hero-sub,
                .light-theme .page-hero h1,
                .light-theme .page-hero p,
                .light-theme .about-hero h1,
                .light-theme .about-hero .subtitle,
                .light-theme .services-hero h1,
                .light-theme .services-hero p {
                    color: #1a1a1a !important;
                }

                /* Навигационные ссылки */
                .light-theme .nav-links a,
                .light-theme .nav-special,
                .light-theme .nav-more-btn,
                .light-theme .nav-dropdown a {
                    color: #1a1a1a !important;
                }

                /* Логотип */
                .light-theme .logo {
                    color: #1a1a1a !important;
                }
                .light-theme .logo span {
                    color: ${settings.accent} !important;
                }

                /* Текст и элементы */
                .light-theme body,
                .light-theme p,
                .light-theme .card-body p,
                .light-theme .quote,
                .light-theme .author,
                .light-theme .role,
                .light-theme .partner-desc,
                .light-theme .partner-name,
                .light-theme .cta-text p,
                .light-theme .cta-text h2,
                .light-theme .faq-question,
                .light-theme .faq-answer,
                .light-theme .timeline-item,
                .light-theme .timeline-title,
                .light-theme .timeline-desc,
                .light-theme .tech-card p,
                .light-theme .workflow-step p,
                .light-theme .skill-bar-header span,
                .light-theme .stat-label,
                .light-theme .resume-hero-sub,
                .light-theme .blog-note,
                .light-theme .blog-coming-soon p,
                .light-theme .setting-section h3,
                .light-theme .option-btn,
                .light-theme .tab-btn,
                .light-theme .template-item,
                .light-theme .modal,
                .light-theme .modal h2,
                .light-theme .hero-left li,
                .light-theme .hero-left p,
                .light-theme .hero-left span,
                .light-theme .about-text {
                    color: #1a1a1a !important;
                }

                /* Фоны */
                .light-theme .settings-wrapper,
                .light-theme .settings-tabs,
                .light-theme .modal,
                .light-theme .card,
                .light-theme .testimonial-card,
                .light-theme .cta-form-container,
                .light-theme .partner-block,
                .light-theme .about-site-card,
                .light-theme .resume-card,
                .light-theme .tech-card,
                .light-theme .roadmap-card,
                .light-theme .faq-item {
                    background-color: #ffffff !important;
                    border-color: #ddd !important;
                }

                /* Кнопки */
                .light-theme .option-btn {
                    background: rgba(0,0,0,0.05);
                    border-color: #ccc;
                }
                .light-theme .option-btn.active {
                    background: ${settings.accent};
                    color: #000;
                }
                .light-theme .tab-btn {
                    color: #555;
                }
                .light-theme .tab-btn.active {
                    color: ${settings.accent};
                }
            `;
        }

        styleEl.textContent = `
            :root {
                --accent: ${settings.accent};
            }
            body {
                font-family: '${document.body.style.fontFamily}';
                font-size: ${document.body.style.fontSize};
            }
            .no-animations * {
                animation: none !important;
                transition: none !important;
            }
            ${lightCSS}
        `;
    }

    const settings = getSettings();
    applySettings(settings);

    window.addEventListener('storage', function(e) {
        if (e.key === 'site-settings') {
            applySettings(getSettings());
        }
    });
})();