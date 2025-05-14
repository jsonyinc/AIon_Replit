# AIon Replit Tech Context

## Technologies Used
- **Next.js**: React 기반의 프레임워크로, 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG) 지원.
- **Supabase**: PostgreSQL 기반의 오픈소스 백엔드 솔루션으로, 데이터베이스, 인증, 파일 스토리지 기능 제공.
- **Tailwind CSS**: 유틸리티 기반 CSS 프레임워크로, 빠르고 커스터마이징 가능한 스타일링.
- **Shadcn UI**: Tailwind CSS 기반의 컴포넌트 라이브러리로, 재사용 가능한 UI 요소 제공.
- **React Query**: 데이터 fetching 및 상태 관리 라이브러리.
- **Vercel**: 배포 플랫폼으로, 자동화된 CI/CD 및 도메인 관리 기능 제공.
- **NextAuth.js** (예정): 사용자 인증 솔루션으로, Supabase와 통합 가능.

## Development Setup
- **Node.js**: 최신 LTS 버전 사용 권장.
- **npm**: 패키지 관리 및 스크립트 실행.
- **Vercel CLI**: 배포 및 환경 변수 설정을 위한 도구.
- **Git**: 버전 관리 및 협업 도구.

## Technical Constraints
- **호환성**: Next.js와 Supabase의 최신 버전 사용으로 인해 일부 기존 패키지와의 호환성 문제 가능성.
- **성능**: 초기 로딩 속도와 데이터 fetching 최적화 필요.
- **보안**: 사용자 인증 및 데이터 보호를 위한 추가 설정 필요.

## Dependencies
- **Next.js 관련**: react, react-dom, next.
- **Supabase 관련**: @supabase/supabase-js.
- **UI 관련**: tailwindcss, @shadcn/ui, clsx, lucide-react 등.
- **상태 관리**: @tanstack/react-query.
- **인증**: next-auth (예정).

## Tool Usage Patterns
- **Next.js CLI**: 프로젝트 생성 및 개발 서버 실행.
- **Vercel CLI**: 배포 및 환경 변수 관리.
- **Supabase Dashboard**: 데이터베이스 스키마 관리 및 사용자 인증 설정.
- **Git**: 코드 변경 사항 추적 및 협업.
