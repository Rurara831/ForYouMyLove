document.addEventListener('DOMContentLoaded', function() {
    const passwordModal = document.getElementById('passwordModal');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');
    const passwordInput = document.getElementById('passwordInput');
    const submitPassword = document.getElementById('submitPassword');

    submitPassword.addEventListener('click', function() {
        if (passwordInput.value.toLowerCase() === '1031') {
            passwordModal.style.opacity = '0';
            setTimeout(() => {
                passwordModal.style.display = 'none';
                welcomeScreen.style.display = 'flex';
                
                setTimeout(() => {
                    welcomeScreen.style.opacity = '0';
                    setTimeout(() => {
                        welcomeScreen.style.display = 'none';
                        mainContent.style.display = 'block';
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

    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitPassword.click();
        }
    });

    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetTab) content.classList.add('active');
            });
        });
    });

    const loveLetter = document.getElementById('loveLetter');
    loveLetter.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });

    function addFloatingElements() {
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '💕';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 5 + 's';
            document.body.appendChild(heart);
        }
        
        for (let i = 0; i < 5; i++) {
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
// 🎵 背景音樂優化版控制
const bgm = document.getElementById('bgm');
const musicToggle = document.getElementById('musicToggle');

if (musicToggle && bgm) {
    // 預先載入音樂
    bgm.load();

    musicToggle.addEventListener('click', function () {
        if (bgm.paused) {
            bgm.play().then(() => {
                musicToggle.innerHTML = '⏸️ 暫停音樂';
                musicToggle.style.background = '#ff758c';
                musicToggle.style.color = 'white';
            }).catch(error => {
                console.log("播放失敗：", error);
                alert("播放失敗，請再點擊一次試試看！");
            });
        } else {
            bgm.pause();
            musicToggle.innerHTML = '🎵 播放音樂';
            musicToggle.style.background = 'rgba(255, 255, 255, 0.9)';
            musicToggle.style.color = '#ff758c';
        }
    });
}