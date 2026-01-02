/* ============================================
   링크 설정 파일

   새 링크 추가 방법:
   1. links 배열에 새 객체 추가
   2. 필수: title, icon
   3. 선택: url, subtitle, badge, disabled

   아이콘 참고: https://emojipedia.org/
   또는 SVG 아이콘 사용 가능
   ============================================ */

const links = [
    {
        title: "GitHub",
        subtitle: "코드 저장소",
        icon: "🐙",
        url: "https://github.com/himdol",
        // badge: "NEW",  // 뱃지 표시하려면 주석 해제
    },
    {
        title: "YouTube",
        subtitle: "영상 콘텐츠",
        icon: "🎬",
        url: "https://youtube.com/@takenoday",  // 실제 URL로 변경하세요
    },
    {
        title: "웹/앱 개발",
        subtitle: "열심히 준비 중입니다",
        icon: "💻",
        disabled: true,
        badge: "준비 중",
    },
    {
        title: "이메일",
        subtitle: "문의 및 연락",
        icon: "📧",
        disabled: true,
        badge: "미정",
    },

    /* ============================================
       링크 추가 예시 (복사해서 사용하세요)
       ============================================

    // 일반 링크
    {
        title: "링크 제목",
        subtitle: "설명 (선택)",
        icon: "🔗",
        url: "https://example.com",
    },

    // 뱃지가 있는 링크
    {
        title: "새로운 프로젝트",
        subtitle: "최근 작업물",
        icon: "🚀",
        url: "https://example.com",
        badge: "NEW",
    },

    // 비활성 링크 (준비 중)
    {
        title: "곧 오픈 예정",
        subtitle: "조금만 기다려주세요",
        icon: "⏳",
        disabled: true,
        badge: "Coming Soon",
    },

    // SNS 예시
    {
        title: "Instagram",
        icon: "📸",
        url: "https://instagram.com/username",
    },
    {
        title: "Twitter / X",
        icon: "🐦",
        url: "https://x.com/username",
    },
    {
        title: "LinkedIn",
        icon: "💼",
        url: "https://linkedin.com/in/username",
    },
    {
        title: "Blog",
        icon: "📝",
        url: "https://blog.example.com",
    },

    ============================================ */
];

/* ============================================
   아래 코드는 수정하지 않아도 됩니다
   ============================================ */

function renderLinks() {
    const container = document.getElementById('links-container');

    links.forEach(link => {
        const element = document.createElement(link.disabled ? 'div' : 'a');
        element.className = `link-item${link.disabled ? ' disabled' : ''}`;

        if (!link.disabled && link.url) {
            element.href = link.url;
            element.target = "_blank";
            element.rel = "noopener noreferrer";
        }

        element.innerHTML = `
            <span class="link-icon">${link.icon}</span>
            <div class="link-content">
                <div class="link-title">${link.title}</div>
                ${link.subtitle ? `<div class="link-subtitle">${link.subtitle}</div>` : ''}
            </div>
            ${link.badge ? `<span class="link-badge">${link.badge}</span>` : ''}
        `;

        container.appendChild(element);
    });
}

// 페이지 로드 시 링크 렌더링
document.addEventListener('DOMContentLoaded', renderLinks);
