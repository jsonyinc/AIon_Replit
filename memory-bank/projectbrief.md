# AIon Replit Project Brief

## Overview
"AIon Replit"은 AI 기반 랜딩페이지 구축 솔루션으로, 기존 Replit에서 제작된 코드를 새로운 기술 스택으로 마이그레이션하여 최적화된 사용자 경험과 성능을 제공하는 것을 목표로 합니다.

## Core Objectives
- **기술 스택 전환**: 기존 React, Vite, Express 기반 프로젝트를 Next.js와 Supabase로 전환.
- **UI/UX 유지**: 현재 랜딩페이지의 콘텐츠와 디자인 요소를 그대로 유지.
- **배포 최적화**: Vercel을 통해 배포 자동화 및 성능 최적화.
- **문서화 및 계획**: 치밀한 작업 계획 수립 후 실행, 모든 과정 문서화.

## Key Requirements
1. **기술 스택**:
   - 클라이언트 & 백엔드: Next.js
   - UI/UX: Tailwind CSS (Shadcn UI)
   - 백엔드: Supabase (PostgreSQL)
   - 배포: Vercel
2. **디렉토리 구조**:
   - 루트: AION_Replit/
   - 코딩 루트: AION_Replit/Landingpage/
3. **환경 설정 파일 마이그레이션**:
   - package.json, tailwind.config.ts, tsconfig.json 등을 새로운 기술 스택에 맞게 수정.
4. **불필요 파일 제거**:
   - Vite, Express, Drizzle 관련 파일 및 폴더 제거.
5. **의존성 최적화**:
   - 충돌 가능성 사전 파악 및 최신 패키지 사용.
6. **Git 초기화**:
   - AION_Replit/에서 Git 초기화 및 .gitignore 파일 생성.
7. **Context7 MCP 서버 활용**:
   - 최신 규격 및 모범 사례 반영.

## Scope
- 기존 랜딩페이지의 구조와 콘텐츠를 유지하면서, 새로운 기술 스택으로의 완전한 전환.
- 사용자 인증, 데이터 관리, 배포 자동화 등의 기능 추가 및 최적화.

## Success Criteria
- Next.js와 Supabase로 구성된 프로젝트가 정상적으로 작동하며, 기존 랜딩페이지의 UI/UX가 유지됨.
- Vercel을 통한 배포가 성공적으로 완료됨.
- 모든 작업 과정이 memory-bank 디렉토리에 문서화됨.
