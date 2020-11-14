import bindLogo from 'assets/images/bindLogo.png';
import aboutme from 'assets/images/aboutme.png';
import { IProjectType } from 'interface/ProjectType';

export const projectList: IProjectType[] = [
    {
        id: 1,
        name: "도담도담 V2 유지보수",
        type: ["Front End"],
        stacks: ["JavaScript", "React.js", "MobX", "SASS"],
        period: "2020.07.31 ~ (서비스 및 유지보수 활동 중)",
        description: "교내 스마트 스쿨 플랫폼",
        gallery: [bindLogo, aboutme]
    },

    {
        id: 2,
        name: "도담도담 관리자",
        type: ["Front End"],
        stacks: ["JavaScript", "React.js", "MobX", "SASS"],
        period: "2020.03.15 ~ 05.18 (서비스 중)",
        description: "교내 스마트 스쿨 플랫폼 관리자 페이지",
        gallery: [bindLogo, aboutme]
    },

    {
        id: 3,
        name: "도담도담 선생님",
        type: ["Front End"],
        stacks: ["TypeScript", "React.js", "MobX", "SASS"],
        period: "2020.07.31 ~ 09.24 (서비스 중)",
        description: "교내 스마트 스쿨 플랫폼 선생님 페이지",
        gallery: [bindLogo],
    },

    {
        id: 4,
        name: "바인드팀 팀사이트",
        type: ["Front End"],
        stacks: ["JavaScript", "React.js", "SASS"],
        period: "2020.04.08 ~ 05.10 (서비스 중)",
        description: "교내 바인드팀 팀사이트",
        gallery: [bindLogo],
    },

    {
        id: 5,
        name: "여기 코로나",
        type: ["Front End"],
        stacks: ["JavaScript", "React.js", "SASS"],
        period: "2020.02",
        description: "코로나 정보 웹사이트",
        gallery: [bindLogo],
    },

    // {
    //     id: 6,
    //     name: "NFC Spot Counter",
    //     type: ["Front End"],
    //     stacks: ["HTML", "CSS", "JavaScript"],
    //     period: "2019.10",
    //     description: "제주도 관광 도우미 서비스",
    //     gallery: [bindLogo],
    // },
];