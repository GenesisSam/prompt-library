# prompt-library
LLM 프롬프트 커뮤니티 웹

# NOTE
25.03.11 시작

# Spec
- NextJS 15.2.1
- Typescript
- styled-components
- Node 22.11.0
- yarn 1.22.22
- Google firebase
  - Authentication
  - Firestore database
  - Functions
  - Storage
  - hosting
  - Analytics

# Site map
- /
  - login
  - sign-up
  - papers
    - /:post-id
    - /:post-id/edit
    - /new
  - users
    - /:user-id
      - /posts
    - /me
      - /edit
      - /posts

# Project Structure
```
src/
├── app/                 # Next.js 13+ App Router
├── components/          # 재사용 가능한 컴포넌트
├── lib/                 # 유틸리티 함수 및 설정
│   ├── firebase.ts     # Firebase 설정
│   └── auth.ts         # 인증 관련 유틸리티
├── types/              # TypeScript 타입 정의
├── hooks/              # 커스텀 훅
└── services/           # API 및 서비스 로직
```

# Database Schema

## Collections
- users
  - id: string
  - name: string
  - email: string
  - profileImage: string
  - notificationSettings: {
      promptUpdates: boolean,
      newPrompts: boolean,
      mentions: boolean
    }
  - createdAt: timestamp

- prompts
  - id: string
  - title: string
  - content: string
  - tags: string[]
  - authorId: string (ref: users)
  - likes: number
  - avgRating: number
  - totalRatings: number
  - createdAt: timestamp
  - updatedAt: timestamp

- comments
  - id: string
  - promptId: string (ref: prompts)
  - authorId: string (ref: users)
  - content: string
  - createdAt: timestamp

- ratings
  - id: string
  - promptId: string (ref: prompts)
  - userId: string (ref: users)
  - score: number (1-5)
  - createdAt: timestamp
  - updatedAt: timestamp

- follows
  - id: string
  - followerId: string (ref: users)
  - followingId: string (ref: users)
  - createdAt: timestamp

- notifications
  - id: string
  - userId: string (ref: users)
  - type: string (enum: 'new_prompt', 'prompt_update', 'mention')
  - sourceId: string (ref: prompts/comments)
  - sourceUserId: string (ref: users)
  - read: boolean
  - createdAt: timestamp

# API Routes

## Authentication
- POST /api/auth/signup
- POST /api/auth/login
- POST /api/auth/logout

## Prompts
- GET /api/prompts
- GET /api/prompts/:id
- POST /api/prompts
- PUT /api/prompts/:id
- DELETE /api/prompts/:id
- POST /api/prompts/:id/rate
- GET /api/prompts/:id/ratings

## Users
- GET /api/users/:id
- GET /api/users/:id/prompts
- PUT /api/users/:id
- GET /api/me
- PUT /api/me
- POST /api/users/:id/follow
- DELETE /api/users/:id/follow
- GET /api/users/:id/followers
- GET /api/users/:id/following

## Notifications
- GET /api/notifications
- PUT /api/notifications/:id/read
- PUT /api/notifications/settings
- DELETE /api/notifications/:id
- DELETE /api/notifications/all

# Development Environment
- Node.js: 22.11.0
- Package Manager: yarn 1.22.22
- IDE 추천: VSCode
  - 추천 확장프로그램:
    - ESLint
    - Prettier
    - Firebase
    - Tailwind CSS IntelliSense

# Firebase Functions
- onPromptCreate: 팔로워들에게 새 프롬프트 알림 전송
- onPromptUpdate: 팔로워들에게 프롬프트 업데이트 알림 전송
- cleanupOldNotifications: 30일 이상 된 알림 자동 삭제 (Scheduled function)
