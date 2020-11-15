import bindLogo from 'assets/images/bindLogo.png';
import aboutme from 'assets/images/aboutme.png';
import { IProjectType } from 'interface/ProjectType';

export const projectList: IProjectType[] = [
    {
        id: 1,
        name: "도담도담 V2 유지보수",
        type: ["Front End"],
        stacks: ["JavaScript", "React.js", "MobX", "SASS"],
        period: "2020.07.31 ~ (서비스중)",
        introduction: "교내 스마트 스쿨 플랫폼",
        description: "교내 스마트 스쿨 플랫폼",
        gallery: [bindLogo, aboutme]
    },

    {
        id: 2,
        name: "도담도담 관리자",
        type: ["Front End"],
        stacks: ["JavaScript", "React.js", "MobX", "SASS"],
        period: "2020.03.15 ~ 05.18 (서비스 중)",
        introduction: "교내 스마트 스쿨 플랫폼 관리자 페이지",
        description: "교내 스마트 스쿨 플랫폼 관리자 페이지",
        gallery: [bindLogo, aboutme]
    },

    {
        id: 3,
        name: "도담도담 선생님",
        type: ["Front End"],
        stacks: ["TypeScript", "React.js", "MobX", "SASS"],
        period: "2020.07.31 ~ 09.24 (서비스 중)",
        introduction: "교내 스마트 스쿨 플랫폼 선생님 페이지", 
        description: "교내 스마트 스쿨 플랫폼 선생님 페이지",
        gallery: [bindLogo],
    },

    {
        id: 4,
        name: "바인드팀 팀사이트",
        type: ["Front End"],
        stacks: ["JavaScript", "React.js", "SASS"],
        period: "2020.04.08 ~ 05.10 (서비스 중)",
        introduction: "교내 바인드팀 팀사이트", 
        description: "교내 바인드팀 팀사이트",
        gallery: [bindLogo],
    },

    {
        id: 5,
        name: "여기 코로나",
        type: ["Front End"],
        stacks: ["JavaScript", "React.js", "SASS"],
        period: "2020.02",
        introduction: "코로나 정보 웹사이트",
        description: "코로나 정보 웹사이트",
        gallery: [bindLogo],
    },

    {
        id: 6,
        name: "NFC Spot Counter",
        type: ["Front End"],
        stacks: ["HTML", "CSS", "JavaScript"],
        period: "2019.10",
        introduction: "제주도 관광 도우미 서비스",
        description: "제주도 관광 도우미 서비스",
        gallery: [bindLogo],
    },
    
    {
        id: 7,
        name: "YLog 개인 블로그",
        type: ["Front End", "Back End"],
        stacks: ["TypeScript", "Next.js", "SASS", "MobX", "Express.js", "TypeORM", "MySQL"],
        period: "2020 09.16 ~ 2020.11",
        introduction: "개인 블로그 사이트",
        description: "개인 블로그 사이트",
        gallery: [bindLogo],
    },

    {
        id: 8,
        name: "School Meals",
        type: ["Front End", "Back End"],
        stacks: ["TypeScript", "JavaScript", "React.js", "SASS", "MobX", "Express.js"],
        period: "2020 04 ~ 2020.05",
        introduction: "학교를 검색하여 급식, 일정을 볼수 있는 웹",
        description: "학교를 검색하여 급식, 일정을 볼수 있는 웹",
        gallery: [bindLogo],
    },

    {
        id: 9,
        name: "Project INPOT",
        type: ["Front End"],
        stacks: ["JavaScript", "React.js", "SASS", "MobX"],
        period: "2020 09 ~ 진행중",
        introduction: "포트폴리오 구매 사이트",
        description: "포트폴리오 구매 사이트",
        gallery: [bindLogo],
    },

    {
        id: 10,
        name: "CoCode",
        type: ["Front End"],
        stacks: ["TypeScript", "Next.js", "SASS", "MobX"],
        period: "2020 09.08 ~ 09.09 (해커톤)",
        introduction: "교내 커뮤니티 사이트",
        description: "교내 커뮤니티 사이트",
        gallery: [bindLogo],
    },
];