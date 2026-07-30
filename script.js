document.addEventListener('DOMContentLoaded', function () {

    // 🔑 1. 密碼解鎖模組
    const submitPassword = document.getElementById('submitPassword');
    const passwordInput = document.getElementById('passwordInput');
    const passwordModal = document.getElementById('passwordModal');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');

    // 🎵 音樂模組相關元素
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
                console.log("自動播放被瀏覽器阻擋：", err);
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

    // 📑 2. 分頁切換模組
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

    // ✉️ 3. 告白信展開/收合
    const loveLetter = document.getElementById('loveLetter');
    if (loveLetter) {
        loveLetter.addEventListener('click', function (e) {
            this.classList.toggle('expanded');
        });
    }

    // 🎵 4. 音樂開關按鈕控制
    if (musicToggle && bgm) {
        musicToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            if (bgm.paused) {
                bgm.play().then(() => {
                    musicToggle.innerText = '⏸️ 暫停音樂';
                    musicToggle.style.background = '#ff758c';
                    musicToggle.style.color = 'white';
                }).catch(err => {
                    alert('無法播放音樂，請確認目錄下是否有 bgm.mp3 檔案！');
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