# 포트폴리오 웹사이트 - HTML/CSS 버전

Park Lee Eun의 UX/UI 디자이너 포트폴리오 웹사이트입니다.

## 📁 파일 구조

```
public-html/
├── index.html              # 홈(랜딩) 페이지
├── profile.html            # 프로필 페이지
├── projects.html           # 프로젝트 리스트 페이지
├── project-stoov.html      # STOOV 프로젝트 상세 페이지
├── styles.css              # 전체 스타일시트
├── scripts.js              # JavaScript 인터랙션
├── README.md               # 이 파일
└── images/                 # 이미지 폴더 (직접 추가 필요)
    ├── profile.jpg
    ├── stoov-thumbnail.jpg
    ├── stoov-image-2.jpg
    ├── stoov-image-3.jpg
    ├── messeisang-thumbnail.jpg
    └── locallink-thumbnail.jpg
```

## 🖼️ 이미지 추가 방법

1. `images/` 폴더를 생성하세요
2. 프로젝트 이미지들을 다음과 같이 저장하세요:
   - `profile.jpg` - 프로필 사진
   - `stoov-thumbnail.jpg` - STOOV 프로젝트 표지 이미지
   - `stoov-image-2.jpg` - STOOV 추가 이미지
   - `stoov-image-3.jpg` - STOOV 추가 이미지
   - `messeisang-thumbnail.jpg` - 메쎄이상 프로젝트 표지 이미지
   - `locallink-thumbnail.jpg` - LocalLink 프로젝트 표지 이미지

## ✏️ 텍스트 수정 방법

### 1. 프로필 정보 수정 (`profile.html`)
```html
<!-- 이름 변경 -->
<p class="contact-value">박이은 <span class="contact-separator">/</span> Park Lee Eun</p>

<!-- 이메일 변경 -->
<a href="mailto:peu11118@naver.com" class="contact-link">peu11118@naver.com</a>

<!-- 전화번호 변경 -->
<p class="contact-value">010-4533-1620</p>
```

### 2. 프로젝트 정보 수정 (`projects.html`)
각 프로젝트 카드의 내용을 수정하세요:
```html
<h3 class="project-title-text">프로젝트 제목</h3>
<p class="project-period">기간</p>
<p class="project-description">프로젝트 설명</p>
```

### 3. 교육/경험 수정 (`profile.html`)
Education, Awards, Experience 섹션의 텍스트를 직접 수정하세요:
```html
<div class="info-content">
    <p>2025 / 학교명<br>학과 및 학위</p>
</div>
```

## 🎨 디자인 커스터마이징 (`styles.css`)

### 색상 변경
```css
/* 주요 색상 변경 예시 */
.hero-title {
    background: linear-gradient(135deg, #fff 0%, #999 100%); /* 그라데이션 색상 */
}

.cta-button {
    background: rgba(255, 255, 255, 0.1); /* 버튼 배경색 */
    border: 2px solid rgba(255, 255, 255, 0.2); /* 버튼 테두리 */
}
```

### 폰트 변경
```css
/* 폰트 패밀리 변경 */
body {
    font-family: 'Pretendard', sans-serif; /* 기본 폰트 */
}

.hero-title {
    font-family: 'EB Garamond', serif; /* 제목 폰트 */
}
```

### 크기 및 간격 조정
```css
/* 제목 크기 조정 */
.hero-title {
    font-size: 6rem; /* 원하는 크기로 변경 */
}

/* 카드 간격 조정 */
.projects-grid {
    gap: 2rem; /* 간격 조정 */
}
```

## 🚀 GitHub Pages로 퍼블리싱하기

1. GitHub 저장소 생성
2. `public-html` 폴더의 모든 파일을 저장소에 업로드
3. Settings > Pages에서 소스를 `main` 브랜치로 설정
4. 생성된 URL로 접속!

### GitHub Desktop 사용 시
1. File > Add Local Repository
2. 폴더 선택 후 Publish Repository
3. GitHub.com에서 Settings > Pages 설정

## 📝 프로젝트 추가 방법

### 1. `projects.html`에 새 카드 추가
```html
<article class="project-card" onclick="location.href='project-새프로젝트.html'">
    <div class="project-image-wrapper">
        <img src="images/새프로젝트-thumbnail.jpg" alt="프로젝트명" class="project-image">
    </div>
    <div class="project-info">
        <h3 class="project-title-text">프로젝트명</h3>
        <p class="project-period">2026.03 ~ 04</p>
        <p class="project-description">프로젝트 설명</p>
        <div class="project-tags">
            <span class="project-tag">태그1</span>
            <span class="project-tag">태그2</span>
        </div>
    </div>
</article>
```

### 2. 새 상세 페이지 생성
`project-stoov.html`을 복사하여 `project-새프로젝트.html` 생성 후 내용 수정

## 💡 팁

- 모든 이미지는 `images/` 폴더에 저장하세요
- 파일명에는 공백 대신 하이픈(-)을 사용하세요
- 이미지는 JPG 또는 PNG 형식을 사용하세요
- CSS 파일에서 `/* 주석 */`으로 표시된 부분을 참고하세요
- 텍스트 수정 시 HTML 태그는 그대로 유지하고 내용만 변경하세요

## 📧 문의

수정 중 문제가 발생하면 HTML/CSS 기본 가이드를 참고하거나 개발자에게 문의하세요.

---

**Last Updated**: 2026.02.06
