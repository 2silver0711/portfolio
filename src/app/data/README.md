# 프로젝트 추가하기

이 파일은 포트폴리오에 새로운 프로젝트를 추가하는 방법을 설명합니다.

## 프로젝트 추가 방법

`/src/app/data/projects.ts` 파일을 열어 `projects` 배열에 새로운 프로젝트 객체를 추가하세요.

### 프로젝트 객체 구조

```typescript
{
  id: string;              // 고유 ID (URL에 사용됨, 영문 소문자와 하이픈만 사용)
  category: 'service' | 'uxui' | 'renewal';  // 프로젝트 카테고리
  title: string;           // 프로젝트 제목
  period: string;          // 작업 기간 (예: '2025.10 ~ 2026.01')
  description: string;     // 프로젝트 간단 설명
  thumbnail: string;       // 썸네일 이미지 URL
  tags: string[];          // 태그 배열
  role: string;            // 담당 역할
  tools: string[];         // 사용한 툴들
  overview: string;        // 프로젝트 개요 (상세 설명)
  problem: string;         // 해결하고자 한 문제
  solution: string;        // 솔루션 설명
  result: string;          // 결과 및 성과
  images: string[];        // 프로젝트 이미지들 (첫 번째는 썸네일과 동일)
  pdfUrl?: string;         // PDF 파일 링크 (선택사항)
  prototypeUrl?: string;   // 프로토타입 링크 (선택사항)
}
```

### 예시

```typescript
{
  id: 'new-project',
  category: 'uxui',
  title: '새로운 프로젝트',
  period: '2026.03 ~ 06',
  description: '프로젝트에 대한 간단한 설명',
  thumbnail: 'https://example.com/image.jpg',
  tags: ['UX Design', 'Mobile App'],
  role: 'Lead UX/UI Designer',
  tools: ['Figma', 'Photoshop'],
  overview: '프로젝트의 전체적인 개요를 상세히 설명합니다.',
  problem: '어떤 문제를 해결하려고 했는지 설명합니다.',
  solution: '어떤 방식으로 문제를 해결했는지 설명합니다.',
  result: '프로젝트의 결과와 성과를 설명합니다.',
  images: [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ],
  pdfUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID/view',  // 선택사항
  prototypeUrl: 'https://www.figma.com/proto/YOUR_PROTOTYPE_ID',  // 선택사항
}
```

## 카테고리 설명

- **service**: Service Project - 서비스 디자인 프로젝트
- **uxui**: UX/UI Project - UX/UI 디자인 프로젝트
- **renewal**: UX/UI Renewal - 리뉴얼/개선 프로젝트

## 이미지 추가하기

### 방법 1: 온라인 이미지 URL 사용

가장 간단한 방법은 이미 온라인에 호스팅된 이미지 URL을 사용하는 것입니다:

```typescript
images: [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
]
```

### 방법 2: Google Drive 사용 (추천)

1. Google Drive에 이미지 업로드
2. 이미지 우클릭 → "공유" → "링크가 있는 모든 사용자"로 설정
3. 공유 링크 복사 (예: `https://drive.google.com/file/d/FILE_ID/view`)
4. 다음 형식으로 변환: `https://drive.google.com/uc?export=view&id=FILE_ID`

### 방법 3: Imgur 사용

1. https://imgur.com 에 이미지 업로드
2. "Direct Link" 복사하여 사용

### 예시: 여러 이미지 추가하기

```typescript
images: [
  'https://drive.google.com/uc?export=view&id=ABC123',  // 썸네일
  'https://drive.google.com/uc?export=view&id=DEF456',  // 프로젝트 이미지 1
  'https://drive.google.com/uc?export=view&id=GHI789',  // 프로젝트 이미지 2
  'https://drive.google.com/uc?export=view&id=JKL012',  // 프로젝트 이미지 3
]
```

## PDF 및 프로토타입 링크 추가하기

### PDF 링크 (pdfUrl)

PDF 파일을 공유하는 방법:

1. **Google Drive 사용**:
   - PDF를 Google Drive에 업로드
   - 공유 설정: "링크가 있는 모든 사용자"
   - 공유 링크 복사하여 `pdfUrl`에 입력

2. **Dropbox 사용**:
   - PDF를 Dropbox에 업로드
   - 공유 링크 생성
   - 링크를 `pdfUrl`에 입력

```typescript
pdfUrl: 'https://drive.google.com/file/d/YOUR_PDF_FILE_ID/view'
```

### 프로토타입 링크 (prototypeUrl)

1. **Figma 프로토타입**:
   - Figma에서 프로토타입 모드 진입
   - 우측 상단 "Share Prototype" 클릭
   - "Copy Link" 클릭하여 링크 복사

```typescript
prototypeUrl: 'https://www.figma.com/proto/YOUR_PROTOTYPE_ID'
```

2. **다른 프로토타이핑 툴**:
   - Adobe XD, Framer, ProtoPie 등의 공유 링크도 사용 가능

## 프로필 정보 수정하기

프로필 정보를 수정하려면 `/src/app/pages/Profile.tsx` 파일을 열어 다음 부분들을 수정하세요:

- 이름 (Name)
- 이메일 (Email)
- 전화번호 (Phone)
- 학력 (Education)
- 수상 경력 (Awards)
- 사용 툴 (Tools)

## 자주 묻는 질문

### Q: 이미지가 표시되지 않아요
A: 이미지 URL이 공개 접근 가능한지 확인하세요. Google Drive의 경우 "링크가 있는 모든 사용자" 권한이 필요합니다.

### Q: PDF 링크를 클릭했는데 다운로드가 시작돼요
A: Google Drive 링크는 기본적으로 뷰어로 열립니다. 다운로드를 원하지 않는다면 설정을 확인하세요.

### Q: 프로토타입 링크가 작동하지 않아요
A: Figma 프로토타입의 경우 "Anyone with the link can view" 권한이 설정되어 있는지 확인하세요.