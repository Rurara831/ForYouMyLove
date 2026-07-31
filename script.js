document.addEventListener('DOMContentLoaded', function () {

    // ⏰ 1. 在一起時間計時器 (紀念日：2024 年 11 月 1 日)
    const startDate = new Date('2024-11-01T00:00:00');

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
        envelopeWrapper.addEventListener('click', function (e) {
            e.stopPropagation();
            if (!this.classList.contains('open')) {
                this.classList.add('open');
                createHeartRain();
            }
        });

        document.addEventListener('click', function () {
            if (envelopeWrapper.classList.contains('open')) {
                envelopeWrapper.classList.remove('open');
            }
        });
    }

    // 🥠 5. 每日愛心籤餅
    const fortunes = [
        "今天的胖寶寶也是世界上最棒的！❤️",
        "今天適合跟璐菈菈索取一個甜甜的抱抱！抱抱！",
        "累的時候隨時記得有我在！避風港預備中 ✨",
        "今天幸運指數 100%！因為有璐菈菈愛你 💖",
        "記得多喝水、多休息，照顧好自己喔 🌸",
        "寶寶盡力做好自己能做的事就超酷的了！加油 🧸"
    ];

    const drawFortuneBtn = document.getElementById('drawFortuneBtn');
    const fortuneText = document.getElementById('fortuneText');

    if (drawFortuneBtn && fortuneText) {
        drawFortuneBtn.addEventListener('click', function () {
            const randomMsg = fortunes[Math.floor(Math.random() * fortunes.length)];
            fortuneText.innerText = randomMsg;
            fortuneText.style.color = '#ff477e';
            fortuneText.style.fontWeight = 'bold';
        });
    }

    // 🌸 6. 背景櫻花/愛心飄落
    function createFallingPetal() {
        const petals = ['🌸', '✨', '💖', '💕'];
        const petal = document.createElement('div');
        petal.classList.add('falling-sakura');
        petal.innerText = petals[Math.floor(Math.random() * petals.length)];
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.fontSize = (Math.random() * 10 + 12) + 'px';
        petal.style.animationDuration = (Math.random() * 3 + 5) + 's';

        document.body.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 8000);
    }
    setInterval(createFallingPetal, 1200);

    // 🐭 7. 超流暢滑鼠/觸控軌跡愛心跟隨
    let lastX = 0;
    let lastY = 0;
    const distanceThreshold = 12; // 移動超過 12px 即觸發，保證連貫緊密

    function createCursorHeart(x, y) {
        const hearts = ['💗', '💖', '✨', '💕', '🌸'];
        const cursorHeart = document.createElement('div');
        cursorHeart.classList.add('cursor-heart');
        cursorHeart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
        
        cursorHeart.style.left = x + 'px';
        cursorHeart.style.top = y + 'px';
        
        const randomXOffset = (Math.random() - 0.5) * 40;
        const randomRotate = (Math.random() - 0.5) * 60;
        const randomSize = Math.random() * 6 + 12;
        
        cursorHeart.style.setProperty('--x-offset', `${randomXOffset}px`);
        cursorHeart.style.setProperty('--rot', `${randomRotate}deg`);
        cursorHeart.style.fontSize = `${randomSize}px`;

        document.body.appendChild(cursorHeart);

        setTimeout(() => {
            cursorHeart.remove();
        }, 800);
    }

    function handleMove(e) {
        const x = e.clientX || (e.touches && e.touches[0].clientX);
        const y = e.clientY || (e.touches && e.touches[0].clientY);

        if (!x || !y) return;

        const dist = Math.hypot(x - lastX, y - lastY);

        if (dist > distanceThreshold) {
            lastX = x;
            lastY = y;
            createCursorHeart(x, y);
        }
    }

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', handleMove);

    // 🖼️ 8. 照片 Lightbox 放大預覽
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.querySelector('.lightbox-close');
    const polaroids = document.querySelectorAll('.polaroid');

    polaroids.forEach(item => {
        item.addEventListener('click', function (e) {
            e.stopPropagation();
            const img = this.querySelector('img');
            const caption = this.querySelector('p');
            if (img && lightbox && lightboxImg) {
                lightbox.style.display = 'flex';
                lightboxImg.src = img.src;
                if (lightboxCaption && caption) lightboxCaption.innerText = caption.innerText;
            }
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', function () {
            lightbox.style.display = 'none';
        });
    }

    if (lightbox) {
        lightbox.addEventListener('click', function () {
            lightbox.style.display = 'none';
        });
    }

    // 🎵 9. 音樂開關
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