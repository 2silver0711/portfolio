/* ============================================
   포트폴리오 웹사이트 JavaScript
   이 파일을 수정하여 인터랙션을 커스터마이징하세요
   ============================================ */

// 글래스 커서 효과
document.addEventListener('DOMContentLoaded', function() {
    const realUsersText = document.getElementById('realUsersText');
    const glassCursor = document.getElementById('glassCursor');
    const heroHeadline = document.getElementById('heroHeadline');
    
    if (realUsersText && glassCursor && heroHeadline) {
        let isHovering = false;
        
        // 마우스가 Real Users 텍스트 위에 있을 때
        realUsersText.addEventListener('mouseenter', function() {
            isHovering = true;
            glassCursor.classList.add('active');
        });
        
        realUsersText.addEventListener('mouseleave', function() {
            isHovering = false;
            glassCursor.classList.remove('active');
        });
        
        // 마우스 움직임 추적
        heroHeadline.addEventListener('mousemove', function(e) {
            if (isHovering) {
                const rect = heroHeadline.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                glassCursor.style.left = (x - 80) + 'px';
                glassCursor.style.top = (y - 80) + 'px';
                glassCursor.style.transition = 'left 0.15s ease-out, top 0.15s ease-out';
            }
        });
    }
});

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 스크롤 시 네비게이션 배경 변경
let lastScrollTop = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.8)';
    }
    
    lastScrollTop = scrollTop;
});
