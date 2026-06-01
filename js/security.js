/* =========================================
   SECURITY.JS — Безопасность (санитайзер, защита от кликджекинга)
   ========================================= */

// Очистка строки от HTML-тегов (XSS-защита)
function sanitizeInput(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

// Защита от кликджекинга (если сайт в iframe — выйти из него)
if (window.top !== window.self) {
    window.top.location = window.self.location;
}