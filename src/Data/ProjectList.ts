import bindLogo from 'assets/images/bindLogo.png';
import { IProjectType } from 'interface/ProjectType';

import WebLocation from 'assets/images/mockup/WebStudent/LocationApply.png';
import WebWakeSong from 'assets/images/mockup/WebStudent/WakeSong.png';
import WebSchedule from 'assets/images/mockup/WebStudent/Web_Schedule.png';
import WebMain from 'assets/images/mockup/WebStudent/Web_Cap_Main.png';
import WebMainDark from 'assets/images/mockup/WebStudent/Web_Main_Dark.png';

import WebTeacherMain from 'assets/images/mockup/WebTeacher/Teacher_FirstPage.png';
import WebTeacherSecond from 'assets/images/mockup/WebTeacher/Teacher_SecondPage.png';
import WebTeacherMobile from 'assets/images/mockup/WebTeacher/Teacher_Web_Mobile.png';
import WebTeacher from 'assets/images/mockup/WebTeacher/Web_Teacher.png';

import CoronaDesktop from 'assets/images/mockup/Corona/Desktop.png';
import CoronaMobile from 'assets/images/mockup/Corona/Mobile.png';

import LivroMain from 'assets/images/mockup/Livro/Main.png';
import LivroCheck from 'assets/images/mockup/Livro/Check.png';
import LivroMyInfo from 'assets/images/mockup/Livro/Myinfo.png';
import LivroNotice from 'assets/images/mockup/Livro/Notice.png';
import LivroSearch from 'assets/images/mockup/Livro/Search.png';

export const projectList: IProjectType[] = [
    {
        id: 1,
        name: "도담도담 V2 유지보수",
        type: ["Front End"],
        stacks: ["JavaScript", "React.js", "MobX", "SASS"],
        period: "2020.07.31 ~ (서비스중)",
        introduction: "교내 스마트 스쿨 플랫폼",
        description: `기숙학교를 지내는 학생들은 교과시간이 끝난 이후에는 학교 안에서 자유롭게 자습을 할 수 있습니다.
        하지만 학교에서는 학생 관리를 위해 종이로 된 장부에 필수로 자신의 위치를 적어야 합니다. 그리고 선생님들 또한 직접 
        종이 장부를 들고 다니면서 일일이 체크 하여야 합니다.
        
        또한 학생들이 외출 / 외박을 가기 위해서는 부모님의 허락을 받고나서 선생님께 신청하고 승인을 받아야 합니다.
        
        이러한 불편하고 힘들게 기숙사학교에서 학생들이 생활하고 선생님들이 관리하고 계십니다.
        이러한 불편함과 문제점들을 개선해 나가고 편하게 학교생활을 하자는 의미에서 도담도담 시스템이 나오게 되었습니다.`,
        thumbnail: WebMain,
        gallery: [WebMain, WebMainDark, WebLocation, WebSchedule, WebWakeSong],
        feel: `ㅁㄴㅇㄻㄴㄹㅇㄴㅁㄻㄴㅇㄹ`,
        role: '회원 알림탭, 분실물, 상담 쪽의 프론트엔드 유지보수를 맡았습니다.',
        link: `<a style ="color: #1b60ff" href="http://dodam.b1nd.com" target="_blank" rel ="noopener noreferrer">
        http://dodam.b1nd.com (학교 내부망 네트워크만 접속이 됩니다.)</a>`,
    },

    {
        id: 2,
        name: "도담도담 관리자",
        type: ["Front End"],
        stacks: ["JavaScript", "React.js", "MobX", "SASS"],
        period: "2020.03.15 ~ 05.18 (서비스 중)",
        introduction: "교내 스마트 스쿨 플랫폼 관리자 페이지",
        description: `1번 프로젝트인 "도담도담"의 관리자용 페이지이며, 도담도담을 이루는 요소들을 전반적으로 관리합니다.<br />
        학생들이 위치신청을 하는 위치 장소 관리, 장소 및 회원가입 관리를 위한 교실 관리 등의 전반적인 베이스 데이터들을 관리합니다.`,
        thumbnail: bindLogo,
        gallery: [],
        feel: 'feelfeell',
        role: '시간표 관리, 교실관리, 장소 관리 페이지를 담당하여 개발 및 유지보수를 하였습니다.',
        link: `<a style ="color: #1b60ff" href="http://admin.dodam.b1nd.com" target="_blank" rel ="noopener noreferrer">
        http://admin.dodam.b1nd.com (학교 내부망 네트워크만 접속이 됩니다.)</a>`,
    },

    {
        id: 3,
        name: "도담도담 선생님",
        type: ["Front End"],
        stacks: ["TypeScript", "React.js", "MobX", "SASS"],
        period: "2020.07.31 ~ 09.24 (서비스 중)",
        introduction: "교내 스마트 스쿨 플랫폼 선생님 페이지", 
        description: "교내 스마트 스쿨 플랫폼 선생님 페이지",
        thumbnail: WebTeacher,
        gallery: [WebTeacherMain, WebTeacherSecond, WebTeacherMobile, WebTeacher],
        feel: 'feelfeell',
        role: '프론트엔드',
        link: `<a style ="color: #1b60ff" href="http://teacher.dodam.b1nd.com" target="_blank" rel ="noopener noreferrer">
        http://teacher.dodam.b1nd.com (학교 내부망 네트워크만 접속이 됩니다.)</a>`,
    },

    {
        id: 4,
        name: "바인드팀 팀사이트",
        type: ["Front End"],
        stacks: ["JavaScript", "React.js", "SASS"],
        period: "2020.04.08 ~ 05.10 (서비스 중)",
        introduction: "교내 바인드팀 팀사이트", 
        description: "교내 바인드팀 팀사이트",
        thumbnail: bindLogo,
        gallery: [CoronaDesktop, CoronaMobile],
        feel: 'feelfeell',
        role: '프론트엔드',
        link: `<a style ="color: #1b60ff" href="http://b1nd.com" target="_blank" rel ="noopener noreferrer">http://b1nd.com</a>`,
    },

    {
        id: 5,
        name: "여기 코로나",
        type: ["Front End"],
        stacks: ["JavaScript", "React.js", "SASS"],
        period: "2020.02",
        introduction: "코로나 정보 웹사이트",
        description: "코로나 정보 웹사이트",
        thumbnail: CoronaDesktop,
        gallery: [CoronaDesktop, CoronaMobile],
        feel: 'feelfeell',
        role: '프론트엔드',
        link: '서비스가 종료되었습니다.',
    },

    {
        id: 6,
        name: "NFC Spot Counter",
        type: ["Front End"],
        stacks: ["HTML", "CSS", "JavaScript"],
        period: "2019.10",
        introduction: "제주도 관광 도우미 서비스",
        description: "제주도 관광 도우미 서비스",
        thumbnail: bindLogo,
        gallery: [],
        feel: 'feelfeell',
        role: '프론트엔드',
        link: '서비스가 종료되었습니다.',
    },
    
    {
        id: 7,
        name: "YLog 개인 블로그",
        type: ["Front End", "Back End"],
        stacks: ["TypeScript", "Next.js", "SASS", "MobX", "Express.js", "TypeORM", "MySQL"],
        period: "2020 09.16 ~ 2020.11",
        introduction: "개인 블로그 사이트",
        description: "개인 블로그 사이트",
        thumbnail: bindLogo,
        gallery: [],
        feel: 'feelfeell',
        role: '프론트엔드',
        link: 'httpsfasdfdsafsdf://',
    },

    {
        id: 8,
        name: "School Meals",
        type: ["Front End", "Back End"],
        stacks: ["TypeScript", "JavaScript", "React.js", "SASS", "MobX", "Express.js"],
        period: "2020 04 ~ 2020.05",
        introduction: "학교를 검색하여 급식, 일정을 볼수 있는 웹",
        description: "학교를 검색하여 급식, 일정을 볼수 있는 웹",
        thumbnail: bindLogo,
        gallery: [],
        feel: 'feelfeell',
        role: '프론트엔드',
        link: 'httpsfasdfdsafsdf://',
    },

    {
        id: 9,
        name: "Project INPOT",
        type: ["Front End"],
        stacks: ["JavaScript", "React.js", "SASS", "MobX"],
        period: "2020 09 ~ 진행중",
        introduction: "포트폴리오 구매 사이트",
        description: "포트폴리오 구매 사이트 \n줄바꿈 테스트",
        thumbnail: bindLogo,
        gallery: [],
        feel: 'feelfeell',
        role: '프론트엔드',
        link: 'httpsfasdfdsafsdf://',
    },

    {
        id: 10,
        name: "CoCode",
        type: ["Front End"],
        stacks: ["TypeScript", "Next.js", "SASS", "MobX"],
        period: "2020 09.08 ~ 09.09 (해커톤)",
        introduction: "교내 커뮤니티 사이트",
        description: "교내 커뮤니티 사이트",
        thumbnail: bindLogo,
        gallery: [],
        feel: 'feelfeell',
        role: '프론트엔드',
        link: 'httpsfasdfdsafsdf://',
    },

    {
        id: 11,
        name: "LIVRO-S",
        type: ["Front End"],
        stacks: ["JavaScript", "React.js", "SASS", "MobX", "Styled-Components"],
        period: "2020 11.23 ~ 11.24 (3개 마이스터고 연합 해커톤)",
        introduction: "3개 마이스터고 학생들의 도서관 웹사이트",
        description: "3개 마이스터고 학생들의 도서관 웹사이트",
        thumbnail: LivroSearch,
        gallery: [LivroMain, LivroCheck, LivroNotice, LivroSearch, LivroMyInfo],
        feel: 'feelfeell',
        role: '프론트엔드',
        link: 'httpsfasdfdsafsdf://',
    },
];