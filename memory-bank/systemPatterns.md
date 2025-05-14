# AIon Replit System Patterns

## System Architecture
- **Frontend**: Next.js를 사용하여 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG)을 활용한 빠른 로딩과 SEO 최적화.
- **Backend**: Supabase를 통해 PostgreSQL 데이터베이스 관리, 사용자 인증, 파일 스토리지 기능 통합.
- **API**: Next.js의 API Routes를 사용하여 서버리스 함수 구현, Supabase와의 통합.
- **Deployment**: Vercel을 통해 자동화된 CI/CD 파이프라인 구축 및 배포.

## Key Technical Decisions
- **Next.js 선택**: 클라이언트 및 서버 통합 관리, 파일 시스템 기반 라우팅, 자동 코드 분할 등의 이점 활용.
- **Supabase 도입**: 오픈소스 Firebase 대안으로, 쉬운 데이터베이스 설정, 실시간 데이터 처리, 인증 기능 제공.
- **Shadcn UI 사용**: Tailwind CSS 기반의 컴포넌트 라이브러리로, 기존 UI 스타일 유지 및 확장성 강화.

## Design Patterns in Use
- **Component-Based Architecture**: UI를 재사용 가능한 컴포넌트로 분리하여 유지보수성과 확장성 향상.
- **Serverless Functions**: Next.js API Routes를 통해 서버리스 함수를 구현하여 백엔드 로직 처리.
- **State Management**: React Query를 사용하여 데이터 fetching 및 상태 관리 최적화.

## Component Relationships
- **Pages**: Next.js의 페이지 구조를 사용하여 랜딩페이지의 각 섹션(Hero, About 등)을 개별 페이지 또는 컴포넌트로 구성.
- **Components**: 재사용 가능한 UI 요소(Button, Card 등)를 Shadcn UI와 Tailwind CSS로 스타일링.
- **Data Flow**: Supabase 클라이언트를 통해 데이터베이스와 통신, React Query로 데이터 캐싱 및 상태 관리.

## Critical Implementation Paths
- **마이그레이션 프로세스**: 기존 React 컴포넌트를 Next.js 페이지로 변환, Supabase로 데이터베이스 전환.
- **UI 유지**: 기존 스타일과 콘텐츠를 유지하면서 Shadcn UI 컴포넌트로 리팩토링.
- **배포 설정**: Vercel CLI를 사용하여 배포 설정 및 환경 변수 관리.
