// visit-stats.js — автономный счётчик посещений
(function() {
    const now = new Date();
    const nowTime = now.getTime();
    const todayStr = now.toLocaleDateString();

    let data = {};
    try {
        data = JSON.parse(localStorage.getItem('user-visit-stats')) || {};
    } catch (e) {
        data = {};
    }

    // Первый визит
    if (!data.firstVisit) {
        data.firstVisit = todayStr;
        data.visitCount = 1;
        data.totalTimeMs = 0;
    } else {
        data.visitCount = (data.visitCount || 1) + 1;
    }

    data.lastVisit = todayStr;
    data.lastVisitTime = nowTime;
    data.sessionStart = nowTime;

    localStorage.setItem('user-visit-stats', JSON.stringify(data));

    function updateDisplay() {
        try {
            const currentData = JSON.parse(localStorage.getItem('user-visit-stats')) || {};
            const totalMs = currentData.totalTimeMs || 0;
            const sessionMs = Date.now() - (currentData.sessionStart || Date.now());
            const allMs = totalMs + sessionMs;
            const minutes = Math.floor(allMs / 60000);

            const visitEl = document.getElementById('visit-count');
            const lastEl = document.getElementById('last-visit');
            const timeEl = document.getElementById('time-spent');

            if (visitEl) visitEl.textContent = currentData.visitCount || 1;
            if (lastEl) lastEl.textContent = currentData.lastVisit || '';
            if (timeEl) timeEl.textContent = minutes + ' мин';
        } catch (e) {}
    }

    updateDisplay();
    setInterval(updateDisplay, 10000);

    window.addEventListener('beforeunload', () => {
        try {
            const currentData = JSON.parse(localStorage.getItem('user-visit-stats')) || {};
            const sessionMs = Date.now() - (currentData.sessionStart || Date.now());
            currentData.totalTimeMs = (currentData.totalTimeMs || 0) + sessionMs;
            currentData.sessionStart = null;
            localStorage.setItem('user-visit-stats', JSON.stringify(currentData));
        } catch (e) {}
    });
})();