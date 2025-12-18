# 🐶 댕댕이톡 (DaengDaeng Talk)

강아지 말투로 대답해주는 귀여운 AI 채팅봇이에요!  
"멍멍! 오늘 기분 어때?" 같은 댕댕이 스타일로 GPT가 답변해준답니다

## 📸 데모 스크린샷 

<img width="1333" height="1303" alt="스크린샷 2025-12-18 135346" src="https://github.com/user-attachments/assets/623fb2a0-0f8e-42fc-a1da-c5b7806a0464" />

## ✨ 특징

- React로 만든 깔끔하고 반응형 채팅 UI
- Node.js 백엔드로 OpenAI GPT API 연동
- 모든 답변을 **강아지 말투**로 변환! (멍, 왈, ~다멍, ~야옹... 아니 옹옹!🐕)
- 실시간 채팅처럼 부드러운 경험

## 🛠️ 기술 스택

- **Frontend**: React (Vite 또는 Create React App 추천)
- **Backend**: Node.js + Express
- **AI**: OpenAI GPT API (gpt-4o-mini 추천)
- **배포**: Vercel (프론트) + Render/Heroku (백엔드) 가능

## 🚀 시작하기

### 사전 준비

1. OpenAI API 키 발급받기: https://platform.openai.com/account/api-keys
2. Node.js 설치 (v18 이상 추천)

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/jayicebear/maru_talk.git
cd daengdaeng-talk

# 백엔드 설정
cd backend
npm install
cp .env.example .env
# .env 파일에 OPENAI_API_KEY=sk-... 넣기
node server.js

# 프론트엔드 설정 (새 터미널에서)
cd ../frontend
npm install
npm start
