import bindLogo from 'assets/images/bindLogo.png';
import aboutme from 'assets/images/aboutme.png';

export const projectList: Array<{ id: number, name: string, type: Array<string>; description: string, gallery: string[] }> = [
    {
        id: 1,
        name: "도담도담",
        type: ["Front End"],
        description: "교내 스마트 스쿨 플랫폼",
        gallery: [bindLogo, aboutme]
    },

    {
        id: 2,
        name: "도담도담 어드민",
        type: ["Front End"],
        description: "교내 스마트 스쿨 플랫폼 관리자 페이지",
        gallery: [bindLogo, aboutme]
    },

    {
        id: 3,
        name: "여기 코로나",
        type: ["Front End"],
        description: "코로나 관련 사이트",
        gallery: [bindLogo, aboutme]
    },

    {
        id: 4,
        name: "바인드 팀사이트",
        type: ["Front End"],
        description: "바인드팀 공식 사이트",
        gallery: [bindLogo, aboutme]
    },

    {
        id: 5,
        name: "NFC Spot Counter",
        type: ["Front End"],
        description: "제주도를 부탁해 교내 대회 프로젝트",
        gallery: [bindLogo, aboutme]
    },

    {
        id: 6,
        name: "Moment Plan",
        type: ["Front End"],
        description: "모멘트 플랜",
        gallery: [bindLogo, aboutme]
    },

    {
        id: 7,
        name: "Moment Plan",
        type: ["Front End"],
        description: "모멘트 플랜",
        gallery: [bindLogo, aboutme]
    }
];