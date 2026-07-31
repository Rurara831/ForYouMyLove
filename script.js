document.addEventListener('DOMContentLoaded', function () {

    // ⏰ 1. 在一起時間計時器 (起算日：2023 年 5 月 1 日，對應一年 9 個月)
    const startDate = new Date('2023-05-01T00:00:00');

    function updateTimer() {
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        const daysElem = document.getElementById('days');
        const hoursElem = document.getElementById('hours');
        const minutesElem = document.getElementById('minutes');
        const secondsElem = document.getElementById('seconds');

        if (daysElem) daysElem.innerText = days;
        if (hoursElem) hoursElem.innerText = hours;
        if (minutesElem) minutesElem.innerText = minutes;
        if (secondsElem) secondsElem.innerText = seconds;
    }

    setInterval(updateTimer, 1000);
    updateTimer();

    // 🔑 2. 密碼解鎖模組
    const submitPassword = document.getElementById('submitPassword');
    const passwordInput = document.getElementById('passwordInput');
    const passwordModal = document.getElementById('passwordModal');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');

    const bgm = document.getElementById('bgm');
    const musicToggle = document.getElementById('musicToggle');

    function tryPlayBgm() {
        if (bgm && bgm.paused) {
            bgm.play().then(() => {
                if (musicToggle) {
                    musicToggle.innerText = '⏸️ 暫停音樂';
                    musicToggle.style.background = '#ff758c';
                    musicToggle.style.color = 'white';
                }
            }).catch(err => {
                console.log("自動播放被阻擋：", err);
            });
        }
    }

    if (submitPassword && passwordInput) {
        function handleLogin() {
            if (passwordInput.value.toLowerCase() === '1031') {
                tryPlayBgm();

                if (passwordModal) passwordModal.style.opacity = '0';
                
                setTimeout(() => {
                    if (passwordModal) passwordModal.style.display = 'none';
                    if (welcomeScreen) welcomeScreen.style.display = 'flex';

                    setTimeout(() => {
                        if (welcomeScreen) welcomeScreen.style.opacity = '0';
                        setTimeout(() => {
                            if (welcomeScreen) welcomeScreen.style.display = 'none';
                            if (mainContent) mainContent.style.display = 'block';
                        }, 800);
                    }, 2200);
                }, 500);
            } else {
                passwordInput.value = '';
                passwordInput.placeholder = '寶寶重要的日子!';
            }
        }

        submitPassword.addEventListener('click', handleLogin);
        passwordInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') handleLogin();
        });
    }

    // 📑 3. 分頁切換
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            this.classList.add('active');
            const activeContent = document.getElementById(targetTab);
            if (activeContent) activeContent.classList.add('active');
        });
    });

    // 💖 滿屏愛心雨動畫
    function createHeartRain() {
        const hearts = ['❤️', '💖', '💗', '💓', '💕', '🌸', '✨'];
        const totalHearts = 35;

        for (let i = 0; i < totalHearts; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('floating-heart');
                heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.fontSize = (Math.random() * 20 + 18) + 'px';
                heart.style.animationDuration = (Math.random() * 1.5 + 2) + 's';

                document.body.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, 3500);
            }, i * 70);
        }
    }

    // 💌 4. 立體拆信封與關閉事件
    const envelopeWrapper = document.getElementById('envelopeWrapper');

    if (envelopeWrapper) {
        // 點擊信封區域：若未開啟則打開信封
        envelopeWrapper.addEventListener('click', function (e) {
            e.stopPropagation(); // 阻止點擊事件往外傳遞
            if (!this.classList.contains('open')) {
                this.classList.add('open');
                createHeartRain();
            }
        });

        // 點擊頁面任意空白處：若信封已打開，則自動收回信封
        document.addEventListener('click', function () {
            if (envelopeWrapper.classList.contains('open')) {
                envelopeWrapper.classList.remove('open');
            }
        });
    }

    // 🎵 5. 音樂開關
    if (musicToggle && bgm) {
        musicToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            if (bgm.paused) {
                bgm.play().then(() => {
                    musicToggle.innerText = '⏸️ 暫停音樂';
                    musicToggle.style.background = '#ff758c';
                    musicToggle.style.color = 'white';
                });
            } else {
                bgm.pause();
                musicToggle.innerText = '🎵 播放音樂';
                musicToggle.style.background = 'rgba(255, 255, 255, 0.95)';
                musicToggle.style.color = '#ff758c';
            }
        });
    }
});