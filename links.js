/* ============================================
   링크 설정 파일

   새 링크 추가 방법:
   1. links 배열에 새 객체 추가
   2. 필수: title, icon
   3. 선택: url, subtitle, badge, disabled

   아이콘 참고: https://emojipedia.org/
   또는 SVG 아이콘 사용 가능
   ============================================ */

// SVG 아이콘 정의
const icons = {
    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
};

const links = [
    {
        title: "GitHub",
        subtitle: "코드 저장소",
        icon: icons.github,
        url: "https://github.com/himdol",
        // badge: "NEW",  // 뱃지 표시하려면 주석 해제
    },
    {
        title: "YouTube",
        subtitle: "영상 콘텐츠",
        icon: icons.youtube,
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
