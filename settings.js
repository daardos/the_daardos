(function() {
    'use strict';

    const defaults = {
        theme: 'dark',
        lang: 'ru',
        font: 'inter',
        accent: '#00d1b2',
        animations: 'on',
        fontsize: 'normal',
        background: 'stars',
        parallax: 'on',
        glassOpacity: 0.7,
        borderRadius: 16
    };

    const fontMap = {
        inter: "'Inter', system-ui, sans-serif",
        roboto: "'Roboto', system-ui, sans-serif",
        mono: "'Fira Code', monospace"
    };
    const sizeMap = { small: '14px', normal: '16px', large: '18px' };

    const translations = {
    ru: {
        // Главная
        'hero-title': 'Daardos',
        'hero-subtitle': 'Frontend Developer • UI/UX Designer',
        'hero-btn': 'Смотреть работы',
        'about-heading': 'Обо мне',
        'about-text': 'Я специализируюсь на создании высокопроизводительных интерфейсов. Мой код чист, как слеза, а дизайн продуман до последнего пикселя.',
        'skills-html': 'HTML5',
        'skills-js': 'JavaScript ES6+',
        'skills-react': 'React & Next.js',
        'skills-ts': 'TypeScript',
        'skills-css': 'CSS Grid/Flexbox/Canvas',
        'skills-figma': 'Figma',
        'skills-node': 'Node.js',
        'learn-more': 'Узнать больше',
        'projects-heading': 'Мои проекты',
        'filter-all': 'Все',
        'filter-game': 'Игры',
        'filter-design': 'Дизайн',
        'filter-app': 'Приложения',
        'project1-title': 'Neon bird',
        'project1-desc': 'Хардкорная игра на чистом JS с уникальной физикой.',
        'project2-title': 'DevOS Hub',
        'project2-desc': 'Среда разработки в браузере для продуктивной работы.',
        'project3-title': 'CyberType Neon',
        'project3-desc': 'Тренажер слепой печати с киберпанк-эстетикой.',
        'project4-title': 'Prompt Library',
        'project4-desc': 'База промптов для AI с удобным копированием.',
        'project5-title': 'Matrix Clock',
        'project5-desc': 'Время в потоке цифрового дождя на Canvas.',
        'project6-title': 'Neon Morphing',
        'project6-desc': 'Интерактивная физика и морфинг частиц.',
        'project7-title': 'Cyber Snake',
        'project7-desc': 'Классика змейки в новом неоновом оформлении.',
        'project8-title': 'Cyber Pandemic',
        'project8-desc': 'Симулятор вирусного заражения на JS.',
        'project9-title': 'PHYSICS',
        'project9-desc': 'Визуализация законов физики в реальном времени.',
        'project10-title': '3D Cart',
        'project10-desc': 'Интерактивные 3D карты для визуализации данных.',
        'project11-title': 'JS Mastery',
        'project11-desc': 'Коллекция сложных кейсов и эффектов на чистом JavaScript.',
        'reviews-heading': 'Отзывы клиентов',
        'review1-text': '"Daardos сделал невероятно быстрый лендинг! Конверсия выросла на 40% по сравнению со старым сайтом. Очень рад сотрудничеству."',
        'review1-author': 'Алексей С.',
        'review1-role': 'CEO TechStartup',
        'review2-text': '"Очень круто верстает. Все пиксель в пиксель, как в Figma. Проект сдал даже раньше дедлайна, буду советовать коллегам."',
        'review2-author': 'Мария К.',
        'review2-role': 'Дизайнер интерфейсов',
        'review3-text': '"Никогда не видел такой чистой анимации на Canvas. Настоящий профи, который любит сложные задачи. Сделал для нас браузерную игру за 2 недели."',
        'review3-author': 'Дмитрий В.',
        'review3-role': 'Основатель GameDev студии',
        'cta-heading': 'Готовы обсудить ваш проект?',
        'cta-text': 'Напишите мне сейчас и получите бесплатный аудит задачи + персональные рекомендации в течение 24 часов',
        'form-name-placeholder': 'Ваше имя',
        'form-email-placeholder': 'Email для связи',
        'form-message-placeholder': 'Опишите задачу или задайте вопрос',
        'form-submit': 'Отправить заявку',
        // Услуги
        'services-hero-heading': 'Мои услуги',
        'services-hero-text': 'Высококонверсионные сайты и интерфейсы, созданные с нуля. Без шаблонов и тяжёлых CMS.',
        'kwork-heading': 'Мои услуги на Kwork',
        'kwork-text': 'Полный список услуг, тарифов и примеров работ — на моей странице Kwork. Там же можно сразу оформить заказ.',
        'kwork-btn': 'Смотреть услуги',
        'workflow-heading': 'Процесс работы',
        'step1-heading': 'Брифинг',
        'step1-text': 'Обсуждаем задачу, цели, референсы. Вы получаете точную оценку сроков и стоимости.',
        'step2-heading': 'Прототип',
        'step2-text': 'Готовлю структуру и логику будущего сайта. Показываю наброски и согласую с вами.',
        'step3-heading': 'Разработка',
        'step3-text': 'Пишу код, добавляю анимации, тестирую на всех устройствах. Вы видите промежуточные результаты.',
        'step4-heading': 'Запуск',
        'step4-text': 'Финальные правки, выгрузка на хостинг, инструкция по поддержке. Проект готов к работе.',
        'cta-services-heading': 'Обсудим ваш проект?',
        'cta-services-text': 'Напишите мне сейчас и получите бесплатный аудит задачи + персональные рекомендации в течение 24 часов',
        // Обо мне
        'about-hero-heading': 'Привет, я Daardos',
        'about-hero-subtitle': 'Frontend-разработчик, который делает интерфейсы живыми. Люблю сложные задачи и чистый код.',
        'about-who-heading': 'Кто я и чем занимаюсь',
        'about-who-text1': 'Я создаю современные веб-интерфейсы с нуля: от идеи до готового продукта. Уже более 5 лет я специализируюсь на разработке сайтов и веб-приложений без использования тяжелых CMS. Мой главный принцип – скорость и надежность.',
        'about-who-text2': 'Работаю с HTML5, CSS3, JavaScript (ES6+), иногда React и Next.js. Знаю, как заставить дизайн работать на конверсию, а код – летать. Постоянно изучаю новые технологии и внедряю их в проекты.',
        'about-tech-heading': 'Мои технологии',
        'about-stats-heading': 'Немного цифр',
        'stat-projects': 'проектов на GitHub',
        'stat-years': 'Опыта в разработке',
        'stat-response': 'Время ответа на заявку',
        'about-philosophy-heading': 'Мой подход',
        'about-philosophy-text1': 'Каждый проект для меня – это не просто работа, а возможность решить задачу клиента наилучшим образом. Я всегда начинаю с анализа аудитории и целей бизнеса, а потом подбираю оптимальные технологии и дизайн. Вы получаете не просто код, а готовый инструмент для роста.',
        'about-philosophy-text2': 'Я не использую конструкторы и шаблоны – только ручная работа, которая гарантирует уникальность, скорость и безопасность.',
        'about-cta-heading': 'Хотите также?',
        'about-cta-text': 'Обсудим ваш проект и я покажу, как он может выглядеть уже через неделю.',
        'about-cta-btn': 'Связаться со мной',
        // 404
        '404-subtitle': 'Кажется, вы улетели слишком далеко 🚀',
        '404-desc': 'Страница, которую вы ищете, не существует или была перемещена в другую галактику. Возможно, стоит вернуться на орбиту и начать сначала.',
        '404-btn': '🏠 На главную',
        // Политика конфиденциальности
        'privacy-heading': 'Политика конфиденциальности',
        'privacy-date': 'Дата последнего обновления: 26 мая 2026 г.',
        'privacy-intro': 'Настоящая Политика конфиденциальности объясняет, как я (далее – «владелец сайта», «я») собираю, использую и защищаю персональные данные, которые вы предоставляете при использовании данного сайта-портфолио.',
        'privacy-section1-heading': '1. Какие данные собираются',
        'privacy-section1-text': 'При заполнении контактной формы (имя, email, сообщение) эти данные передаются через сервис Formspree для отправки мне на email. Я не храню их в базе данных сайта, так как её нет. Также могут автоматически собираться технические данные, такие как IP-адрес и тип браузера, через GitHub Pages (хостинг) – это стандартная практика для обеспечения работоспособности.',
        'privacy-section2-heading': '2. Как используются данные',
        'privacy-section2-text': 'Предоставленная информация используется исключительно для связи с вами по вашему запросу (обсуждение проекта, ответы на вопросы). Данные не передаются третьим лицам, не используются для рекламы или спама.',
        'privacy-section3-heading': '3. Файлы cookie',
        'privacy-section3-text': 'Сайт может использовать минимальные технические куки (например, для сохранения состояния форм), но не применяет трекинговые или рекламные куки. Вы можете отключить куки в настройках браузера, это не повлияет на работоспособность сайта.',
        'privacy-section4-heading': '4. Безопасность',
        'privacy-section4-text': 'Я принимаю разумные меры для защиты передаваемых данных. Форма отправляется по защищённому протоколу HTTPS. Сервис Formspree также обеспечивает безопасность передачи. Однако помните, что передача данных через интернет не может быть гарантированно защищена на 100%.',
        'privacy-section5-heading': '5. Сторонние сервисы',
        'privacy-section5-text': 'Для работы контактной формы используется Formspree (formspree.io). Пожалуйста, ознакомьтесь с их политикой конфиденциальности. Сайт размещён на GitHub Pages, который может собирать анонимную статистику посещений.',
        'privacy-section6-heading': '6. Ваши права',
        'privacy-section6-text': 'Вы имеете право запросить удаление предоставленных данных из моей почты. Для этого свяжитесь со мной через контактную форму или email. Я отвечу в течение 7 рабочих дней.',
        'privacy-section7-heading': '7. Изменения в политике',
        'privacy-section7-text': 'Я могу обновлять этот документ. Новая версия вступает в силу с момента публикации. Рекомендую периодически проверять эту страницу.',
        'privacy-contact-text': 'По всем вопросам пишите на',
        // Страница благодарности
        'thanks-title': 'Спасибо за ваше сообщение!',
        'thanks-message': 'Я получил вашу заявку и свяжусь с вами в течение 24 часов. А пока можете посмотреть мои проекты или написать мне в Telegram.',
        'thanks-back-home': '← На главную',
        'thanks-telegram': '✈️ Написать в Telegram',
        // Общие
        'nav-home': 'Главная',
        'nav-services': 'Услуги',
        'nav-about': 'Обо мне',
        'nav-projects': 'Проекты',
        'nav-reviews': 'Отзывы',
        'nav-contact': 'Контакты',
        'nav-settings': '⚙️',
        'nav-special': 'Нету GitHub',
        'github-link': 'GitHub',
        'live-link': 'Live View →',
        'social-github': 'GitHub',
        'social-telegram': 'Telegram',
        'social-email': 'your@email.com',
        'footer-text': 'Создаю дизайн и код, который приносит продажи.',
        'footer-nav-heading': 'Навигация',
        'footer-contacts-heading': 'Контакты',
        'footer-legal': 'Политика конфиденциальности',
        'footer-copyright': '© 2026 Daardos. Built with Speed & Style.',
        'back-to-top': '↑ Наверх',
        'about-experience-heading': 'Мой путь',
        'exp-2019-title': 'Первые проекты',
        'exp-2019-desc': 'Начал верстать лендинги и изучать JavaScript. Понял, что веб — это моё.',
        'exp-2021-title': 'Фриланс и студии',
        'exp-2021-desc': 'Работал с агентствами, делал интернет-магазины и сложные админки.',
        'exp-2023-title': 'Senior уровень',
        'exp-2023-desc': 'Перешёл к архитектуре больших проектов, React, TypeScript, Canvas-анимации.',
        'exp-2025-title': 'Собственное портфолио',
        'exp-2025-desc': 'Запустил этот сайт и помогаю клиентам получать современный веб-продукт.',
        'settings-heading': 'Настройки',
        'settings-theme': 'Тема',
        'settings-language': 'Язык',
        'settings-font': 'Шрифт',
        'settings-accent': 'Акцентный цвет',
        'settings-animations': 'Анимации',
        'settings-fontsize': 'Размер шрифта',
        'settings-heading': 'Настройки',
        'settings-tab-appearance': 'Внешний вид',
        'settings-tab-typography': 'Типографика',
        'settings-tab-language': 'Язык',
        'settings-tab-animations': 'Анимации',
        'settings-tab-advanced': 'Продвинутые',
        'settings-background': 'Фон',
        'settings-parallax': 'Параллакс фона',
        'settings-glass-opacity': 'Прозрачность стекла',
        'settings-border-radius': 'Скругление углов',
    },
    en: {
        // Главная
        'hero-title': 'Daardos',
        'hero-subtitle': 'Frontend Developer • UI/UX Designer',
        'hero-btn': 'View works',
        'about-heading': 'About me',
        'about-text': 'I specialize in creating high-performance interfaces. My code is clean as a tear, and design is thought out to the last pixel.',
        'skills-html': 'HTML5',
        'skills-js': 'JavaScript ES6+',
        'skills-react': 'React & Next.js',
        'skills-ts': 'TypeScript',
        'skills-css': 'CSS Grid/Flexbox/Canvas',
        'skills-figma': 'Figma',
        'skills-node': 'Node.js',
        'learn-more': 'Learn more',
        'projects-heading': 'My projects',
        'filter-all': 'All',
        'filter-game': 'Games',
        'filter-design': 'Design',
        'filter-app': 'Apps',
        'project1-title': 'Neon bird',
        'project1-desc': 'Hardcore game on pure JS with unique physics.',
        'project2-title': 'DevOS Hub',
        'project2-desc': 'Browser-based development environment for productive work.',
        'project3-title': 'CyberType Neon',
        'project3-desc': 'Touch typing trainer with cyberpunk aesthetics.',
        'project4-title': 'Prompt Library',
        'project4-desc': 'AI prompt database with convenient copying.',
        'project5-title': 'Matrix Clock',
        'project5-desc': 'Time in the stream of digital rain on Canvas.',
        'project6-title': 'Neon Morphing',
        'project6-desc': 'Interactive physics and particle morphing.',
        'project7-title': 'Cyber Snake',
        'project7-desc': 'Classic snake game in a new neon design.',
        'project8-title': 'Cyber Pandemic',
        'project8-desc': 'Virus spread simulator in JS.',
        'project9-title': 'PHYSICS',
        'project9-desc': 'Real-time physics laws visualization.',
        'project10-title': '3D Cart',
        'project10-desc': 'Interactive 3D maps for data visualization.',
        'project11-title': 'JS Mastery',
        'project11-desc': 'Collection of complex cases and effects on vanilla JavaScript.',
        'reviews-heading': 'Client reviews',
        'review1-text': '"Daardos made an incredibly fast landing page! Conversion increased by 40% compared to the old site. Very happy with the collaboration."',
        'review1-author': 'Alexey S.',
        'review1-role': 'CEO TechStartup',
        'review2-text': '"Very cool layout. Every pixel matches Figma. He delivered the project even before the deadline, I will recommend to colleagues."',
        'review2-author': 'Maria K.',
        'review2-role': 'Interface Designer',
        'review3-text': '"I have never seen such clean Canvas animation. A true professional who loves complex tasks. He made a browser game for us in 2 weeks."',
        'review3-author': 'Dmitry V.',
        'review3-role': 'Founder of GameDev Studio',
        'cta-heading': 'Ready to discuss your project?',
        'cta-text': 'Write to me now and get a free task audit + personal recommendations within 24 hours',
        'form-name-placeholder': 'Your name',
        'form-email-placeholder': 'Email for contact',
        'form-message-placeholder': 'Describe your task or ask a question',
        'form-submit': 'Send request',
        // Услуги
        'services-hero-heading': 'My services',
        'services-hero-text': 'High-conversion websites and interfaces built from scratch. No templates or heavy CMS.',
        'kwork-heading': 'My services on Kwork',
        'kwork-text': 'Full list of services, pricing and examples — on my Kwork page. You can also place an order directly there.',
        'kwork-btn': 'View services',
        'workflow-heading': 'Workflow',
        'step1-heading': 'Briefing',
        'step1-text': 'We discuss the task, goals, references. You get an accurate estimate of terms and cost.',
        'step2-heading': 'Prototype',
        'step2-text': 'I prepare the structure and logic of the future site. I show drafts and coordinate with you.',
        'step3-heading': 'Development',
        'step3-text': 'I write code, add animations, test on all devices. You see intermediate results.',
        'step4-heading': 'Launch',
        'step4-text': 'Final adjustments, uploading to hosting, maintenance instructions. The project is ready to work.',
        'cta-services-heading': 'Discuss your project?',
        'cta-services-text': 'Write to me now and get a free task audit + personal recommendations within 24 hours',
        // Обо мне
        'about-hero-heading': 'Hi, I\'m Daardos',
        'about-hero-subtitle': 'Frontend developer who makes interfaces alive. I love complex tasks and clean code.',
        'about-who-heading': 'Who I am and what I do',
        'about-who-text1': 'I create modern web interfaces from scratch: from idea to finished product. For over 5 years I have been specializing in website and web application development without using heavy CMS. My main principle is speed and reliability.',
        'about-who-text2': 'I work with HTML5, CSS3, JavaScript (ES6+), sometimes React and Next.js. I know how to make design work for conversion and code fly. I constantly study new technologies and implement them in projects.',
        'about-tech-heading': 'My technologies',
        'about-stats-heading': 'Some numbers',
        'stat-projects': 'projects on',
        'stat-years': 'Years of experience',
        'stat-response': 'Response time to request',
        'about-philosophy-heading': 'My approach',
        'about-philosophy-text1': 'Each project for me is not just a job, but an opportunity to solve the client\'s problem in the best way. I always start with an analysis of the audience and business goals, and then select the optimal technologies and design. You get not just code, but a ready-made growth tool.',
        'about-philosophy-text2': 'I don\'t use builders and templates — only manual work that guarantees uniqueness, speed and security.',
        'about-cta-heading': 'Want the same?',
        'about-cta-text': 'Let\'s discuss your project and I\'ll show you how it can look in a week.',
        'about-cta-btn': 'Contact me',
        // 404
        '404-subtitle': 'Looks like you flew too far 🚀',
        '404-desc': 'The page you are looking for does not exist or has been moved to another galaxy. Perhaps it\'s worth returning to orbit and starting over.',
        '404-btn': '🏠 Home',
        // Политика конфиденциальности
        'privacy-heading': 'Privacy Policy',
        'privacy-date': 'Last updated: May 26, 2026',
        'privacy-intro': 'This Privacy Policy explains how I (hereinafter – "site owner", "I") collect, use and protect personal data that you provide when using this portfolio site.',
        'privacy-section1-heading': '1. What data is collected',
        'privacy-section1-text': 'When filling out the contact form (name, email, message), this data is transmitted via the Formspree service to be sent to my email. I do not store them in a site database, as there is none. Technical data such as IP address and browser type may also be automatically collected via GitHub Pages (hosting) – this is standard practice to ensure functionality.',
        'privacy-section2-heading': '2. How data is used',
        'privacy-section2-text': 'The provided information is used solely to contact you regarding your request (project discussion, answering questions). Data is not shared with third parties, nor used for advertising or spam.',
        'privacy-section3-heading': '3. Cookies',
        'privacy-section3-text': 'The site may use minimal technical cookies (e.g., to save form state), but does not use tracking or advertising cookies. You can disable cookies in your browser settings; this will not affect site functionality.',
        'privacy-section4-heading': '4. Security',
        'privacy-section4-text': 'I take reasonable measures to protect transmitted data. The form is sent over a secure HTTPS protocol. Formspree also ensures transmission security. However, remember that data transmission over the internet cannot be guaranteed 100% secure.',
        'privacy-section5-heading': '5. Third-party services',
        'privacy-section5-text': 'The contact form uses Formspree (formspree.io). Please review their privacy policy. The site is hosted on GitHub Pages, which may collect anonymous visit statistics.',
        'privacy-section6-heading': '6. Your rights',
        'privacy-section6-text': 'You have the right to request deletion of the provided data from my email. To do this, contact me via the contact form or email. I will respond within 7 business days.',
        'privacy-section7-heading': '7. Policy changes',
        'privacy-section7-text': 'I may update this document. The new version takes effect upon publication. I recommend checking this page periodically.',
        'privacy-contact-text': 'For any questions, write to',
        // Страница благодарности
        'thanks-title': 'Thank you for your message!',
        'thanks-message': 'I have received your request and will contact you within 24 hours. In the meantime, you can check out my projects or message me on Telegram.',
        'thanks-back-home': '← Back to home',
        'thanks-telegram': '✈️ Message on Telegram',
        // Общие
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-about': 'About',
        'nav-projects': 'Projects',
        'nav-reviews': 'Reviews',
        'nav-contact': 'Contact',
        'nav-settings': '⚙️',
        'nav-special': 'No GitHub',
        'github-link': 'GitHub',
        'live-link': 'Live View →',
        'social-github': 'GitHub',
        'social-telegram': 'Telegram',
        'social-email': 'your@email.com',
        'footer-text': 'I create design and code that brings sales.',
        'footer-nav-heading': 'Navigation',
        'footer-contacts-heading': 'Contacts',
        'footer-legal': 'Privacy Policy',
        'footer-copyright': '© 2026 Daardos. Built with Speed & Style.',
        'back-to-top': '↑ Top',
        'about-experience-heading': 'My journey',
        'exp-2019-title': 'First projects',
        'exp-2019-desc': 'Started coding landing pages and learning JavaScript. Realized the web is my thing.',
        'exp-2021-title': 'Freelance & agencies',
        'exp-2021-desc': 'Worked with studios, built e-commerce sites and complex admin panels.',
        'exp-2023-title': 'Senior level',
        'exp-2023-desc': 'Moved to large project architecture, React, TypeScript, Canvas animations.',
        'exp-2025-title': 'Own portfolio',
        'exp-2025-desc': 'Launched this site and help clients get a modern web product.',
        'settings-heading': 'Settings',
        'settings-theme': 'Theme',
        'settings-language': 'Language',
        'settings-font': 'Font',
        'settings-accent': 'Accent color',
        'settings-animations': 'Animations',
        'settings-fontsize': 'Font size',
        'settings-heading': 'Settings',
        'settings-tab-appearance': 'Appearance',
        'settings-tab-typography': 'Typography',
        'settings-tab-language': 'Language',
        'settings-tab-animations': 'Animations',
        'settings-tab-advanced': 'Advanced',
        'settings-background': 'Background',
        'settings-parallax': 'Parallax',
        'settings-glass-opacity': 'Glass opacity',
        'settings-border-radius': 'Border radius',
    }
};

    function getSettings() {
        try { return JSON.parse(localStorage.getItem('site-settings')) || {}; }
        catch (e) { return {}; }
    }

    function saveSettings(obj) {
        const current = getSettings();
        const merged = { ...current, ...obj };
        localStorage.setItem('site-settings', JSON.stringify(merged));
        applySettings(merged);
    }

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

        root.style.setProperty('--accent', settings.accent || defaults.accent);
        root.style.setProperty('--font-family', fontMap[settings.font] || fontMap.inter);
        root.style.setProperty('--base-font-size', sizeMap[settings.fontsize] || sizeMap.normal);

        // Анимации
        if (settings.animations === 'off') body.classList.add('no-animations');
        else body.classList.remove('no-animations');

        // Фон и параллакс (применяем через классы к body)
        body.classList.remove('bg-stars', 'bg-nebula', 'bg-static');
        body.classList.add('bg-' + (settings.background || 'stars'));
        if (settings.parallax === 'off') body.classList.add('no-parallax');
        else body.classList.remove('no-parallax');

        // Стекло и скругление
        root.style.setProperty('--glass-opacity', settings.glassOpacity || 0.7);
        root.style.setProperty('--border-radius', (settings.borderRadius || 16) + 'px');

        if (settings.lang) applyLanguage(settings.lang);

        // Обновляем интерфейс настроек, если мы на странице настроек
        if (document.querySelector('.settings-container')) {
            updateSettingsUI(settings);
        }
    }

    function applyLanguage(lang) {
        const dict = translations[lang] || translations.ru;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) el.textContent = dict[key];
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key]) el.placeholder = dict[key];
        });
    }

    function updateSettingsUI(settings) {
        document.querySelectorAll('[data-setting]').forEach(group => {
            const settingName = group.getAttribute('data-setting');
            const currentValue = settings[settingName] || defaults[settingName];

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
                // Обновляем фон слайдера (опционально)
                const min = range.min || 0, max = range.max || 100;
                range.style.background = `linear-gradient(to right, var(--accent) 0%, var(--accent) ${(currentValue-min)/(max-min)*100}%, rgba(255,255,255,0.2) ${(currentValue-min)/(max-min)*100}%)`;
            }
        });
    }

    // Инициализация после загрузки DOM
    document.addEventListener('DOMContentLoaded', () => {
        const saved = getSettings();
        const merged = { ...defaults, ...saved };
        applySettings(merged);
        if (JSON.stringify(saved) !== JSON.stringify(merged)) {
            localStorage.setItem('site-settings', JSON.stringify(merged));
        }

        // Управление вкладками
        if (document.querySelector('.tabs')) {
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

        // Обработчики для страницы настроек
        if (document.querySelector('.settings-container')) {
            // Восстановление UI
            updateSettingsUI(merged);
            setTimeout(() => {
                const current = getSettings();
                updateSettingsUI({ ...defaults, ...current });
            }, 20);

            // Клики по кнопкам
            document.querySelectorAll('[data-setting]').forEach(group => {
                const settingName = group.getAttribute('data-setting');

                group.addEventListener('click', (e) => {
                    const btn = e.target.closest('button');
                    if (!btn) return;
                    const value = btn.value;
                    group.querySelectorAll('button').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    saveSettings({ [settingName]: value });
                });

                // Изменение ползунков
                group.addEventListener('input', (e) => {
                    if (e.target.tagName === 'INPUT' && e.target.type === 'range') {
                        const val = e.target.value;
                        saveSettings({ [settingName]: val });
                    }
                });
            });
        }

        // Авто-тема
        if (merged.theme === 'auto') {
            window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
                if (getSettings().theme === 'auto') {
                    const newSettings = { ...getSettings(), theme: 'auto' };
                    applySettings(newSettings);
                }
            });
        }
    });

    // Синхронизация между вкладками
    window.addEventListener('storage', (e) => {
        if (e.key === 'site-settings' && e.newValue) {
            const newSettings = JSON.parse(e.newValue);
            applySettings({ ...defaults, ...newSettings });
        }
    });
})();