import { createRouter, createWebHistory } from 'vue-router' // Vue Router 및 기타 관련 모듈 가져오기
import HomeView from '../views/HomeView.vue' // 홈 페이지 컴포넌트 가져오기

// createRouter를 사용하여 새로운 라우터 인스턴스를 생성합니다.

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),  // 웹 브라우저의 기록을 사용하여 라우팅을 활성화합니다.
    routes: [   // 라우팅 경로와 컴포넌트를 정의하는 배열
        {
            path: '/',  // 루트 경로 (예: 웹사이트의 기본 주소)
            name: 'home', // 이 경로에 대한 이름 (라우팅을 나중에 참조할 때 사용)
            component: HomeView // 홈 페이지 컴포넌트를 표시
        }
    ]
})

export default router  // 생성한 라우터 인스턴스를 내보냅니다.