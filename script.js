document.addEventListener('DOMContentLoaded', function () {
    // 取得所有需要的元素
    const passwordModal = document.getElementById('passwordModal');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');
    const passwordInput = document.getElementById('passwordInput');
    const submitPassword = document.getElementById('submitPassword');

    const bgm = document.getElementById('bgm');
    const musicToggle = document.getElementById('musicToggle');

    // 🎵 播放音樂功能
    function playBgm() {
        if (bgm && bgm.paused) {
            bgm.play().then(() => {
                if (musicToggle) {
                    musicToggle.innerHTML = '⏸️ 暫停音樂';
                    musicToggle.style.background = '#ff758c';
                    musicToggle.style.color = 'white';
                }
            }).catch(error => {
                console.log("自動播放被瀏覽器攔截：", error);
            });
        }
    }

    // 🎵 暫停音樂功能
    function pauseBgm() {
        if (bgm && !bgm.paused) {
            bgm.pause();
            if (musicToggle) {
                musicToggle.innerHTML = '🎵 播放音樂';
                musicToggle.style.background = 'rgba(255, 255, 255, 0.9)';
                musicToggle.style.color = '#ff758c';
            }
        }
    }

    // 預載音樂
    if (bgm) {
        try { bgm.load(); } catch (e) { console.log(e); }
    }

    // 🔑 密碼解鎖邏輯
    if (submitPassword && passwordInput) {
        submitPassword.addEventListener('click', function () {
            if (passwordInput.value.toLowerCase() === '1031') {
                
                // 密碼正確嘗試播音樂
                playBgm();

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
                    }, 2500);
                }, 500);
            } else {
                passwordInput.value = '';
                passwordInput.placeholder = '寶寶重要的日子!';
                passwordInput.style.borderColor = '#ff4d4d';
                setTimeout(() => {
                    passwordInput.style.borderColor = '#ffb7c5';
                    passwordInput.placeholder = '四位數!';
                }, 1500);
            }
        });

        passwordInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                submitPassword.click();
            }
        });
    }

    // 🎵 按鈕切換音樂
    if (musicToggle) {
        musicToggle.addEventListener('click', function () {
            if (bgm) {
                if (bgm.paused) {
                    playBgm();
                } else {
                    pauseBgm();
                }
            }
        });
    }

    // 📑 分頁切換
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetTab) content.classList.add('active');
            });
        });
    });

    // ✉️ 點擊展開/收合告白信（加上相容性點擊保護）
    const loveLetter = document.getElementById('loveLetter');
    if (loveLetter) {
        loveLetter.addEventListener('click', function () {
            this.classList.toggle('expanded');
        });
    }

    // 💖 飄浮圖案效果
    function addFloatingElements() {
        for (let i = 0; i < 12; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '💕';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 5 + 's';
            document.body.appendChild(heart);
        }

        for (let i = 0; i < 4; i++) {
            const teddy = document.createElement('div');
            teddy.classList.add('teddy-bear');
            teddy.innerHTML = '🧸';
            teddy.style.left = Math.random() * 100 + '%';
            teddy.style.top = Math.random() * 100 + '%';
            teddy.style.animationDelay = Math.random() * 5 + 's';
            document.body.appendChild(teddy);
        }
    }

    addFloatingElements();
});