/* eslint-disable */
import { FaMedal, FaMountain, FaWater, FaAward, FaSchool, FaMicrophone, FaLaptopCode, FaElementor, FaReact, FaJava, FaPersonBooth } from 'react-icons/fa';
import { GiElectric, GiForestCamp, GiNothingToSay, GiBlood, GiPineTree, GiConvict, GiTalk } from 'react-icons/gi';
import { RiSlideshow3Line, RiCalendarEventLine, RiPrinterCloudLine, RiSmartphoneLine } from 'react-icons/ri';
import { IoMdBaseball, IoMdSchool } from 'react-icons/io';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsPencil } from 'react-icons/bs';
import { FcNightLandscape, FcConferenceCall, FcDocument } from 'react-icons/fc';
import { IconType } from 'react-icons/lib';
import { GrGraphQl, GrTestDesktop } from 'react-icons/gr';
import { HistoryEnums } from 'lib/enum/HistoryEnum';
import { MdLocalAirport } from 'react-icons/md';

export interface IHistory {
  // 0 = 수상, 1 = 활동, 2 = 대회, 3 = 컨퍼런스
  type: HistoryEnums,
  name: string;
  date: string;
  icon: IconType;
}

const { AWARDS, ACTIVITY, COMPETITION, CONFERENCE } = HistoryEnums;

export const myHistory: IHistory[] = [
  {
    type: ACTIVITY,
    name: '대구소프트웨어고등학교 입학',
    date: '2019.03.02',
    icon: IoMdSchool,
  },

  {
    type: ACTIVITY,
    name: '교내 기초전자교육',
    date: '2019.03.22 ~ 07.13',
    icon: GiElectric,
  },
  
  {
    type: AWARDS,
    name: '교내 학급 서기 임명장',
    date: '2019.04.09',
    icon: FaAward,
  },

  {
    type: ACTIVITY,
    name: '대니산 트래킹 봉사활동',
    date: '2019.05.10',
    icon: FaMountain,
  },

  {
    type: ACTIVITY,
    name: '해양 수련활동',
    date: '2019.06.20 ~ 06.22',
    icon: FaWater,
  },

  {
    type: COMPETITION,
    name: '공공데이터 활용 (교육부문) 참가',
    date: '2019.07',
    icon: FaLaptopCode,
  },

  {
    type: COMPETITION,
    name: '인천국제공항 국민 참여 혁신 공모전 참가',
    date: '2019.07',
    icon: MdLocalAirport,
  },

  {
    type: ACTIVITY,
    name: '공연 룸넘버13 관람',
    date: '2019.07.05',
    icon: RiSlideshow3Line,
  },

  {
    type: ACTIVITY,
    name: '여동엽 선배님 - \'니들이 기획을 잘해?\' 학생전문가 특강',
    date: '2019.07.08',
    icon: RiCalendarEventLine,
  },

  {
    type: ACTIVITY,
    name: '선취업 후진학 특강 - 안교원 에듀잡 대표님',
    date: '2019.07.10',
    icon: FaMicrophone,
  },

  {
    type: ACTIVITY,
    name: '2019 대구소프트웨어고등학교 SW 축제',
    date: '2019.07.12',
    icon: FaSchool,
  },

  {
    type: COMPETITION,
    name: '전기전자기초 교육 과학관 해커톤',
    date: '2019.07.13',
    icon: GiElectric,
  },

  {
    type: COMPETITION,
    name: '2019 교내 해커톤 참가',
    date: '2019.07.16 ~ 07.17',
    icon: FaLaptopCode,
  },

  {
    type: AWARDS,
    name: '2019 교내 해커톤 대상 수상',
    date: '2019.07.16 ~ 07.17',
    icon: FaMedal,
  },

  {
    type: ACTIVITY,
    name: '구미 3D프린터 기업 \'나인랩스\' 동아리 체험연수',
    date: '2019.07.29 ~ 08.02',
    icon: RiPrinterCloudLine,
  },

  {
    type: ACTIVITY,
    name: '교내 커리어스피치 교육',
    date: '2019.08.21',
    icon: GiNothingToSay,
  },

  {
    type: ACTIVITY,
    name: '헌혈 활동',
    date: '2019.08.22',
    icon: GiBlood,
  },

  {
    type: ACTIVITY,
    name: '제주도 진로비전 캠프',
    date: '2019.08.27 ~ 08.30',
    icon: GiForestCamp,
  },

  {
    type: COMPETITION,
    name: '교내 \'제주도를 부탁해\' 메이커톤',
    date: '2019.09',
    icon: FcNightLandscape,
  },

  {
    type: AWARDS,
    name: '교내 생활태도 우수 표창장',
    date: '2019.09.09',
    icon: FaAward,
  },

  {
    type: ACTIVITY,
    name: '삼성 라이온즈 야구경기 관람',
    date: '2019.09.10',
    icon: IoMdBaseball,
  },

  {
    type: ACTIVITY,
    name: '대구 SW고 1기 졸업생 진로 특강 및 인터뷰',
    date: '2019.10.08',
    icon: GiNothingToSay,
  },

  {
    type: COMPETITION,
    name: '제 1회 SW융합 학생 해커톤 캠프 참가',
    date: '2019.10.18 ~ 10.19',
    icon: FaLaptopCode,
  },

  {
    type: AWARDS,
    name: '제 1회 SW융합 학생 해커톤 인기상, 최우수상',
    date: '2019.10.18 ~ 10.19',
    icon: FaMedal,
  },

  {
    type: COMPETITION,
    name: '2019 창의체험 동아리 축제 부스운영 및 참가',
    date: '2019.10.21',
    icon: FaLaptopCode,
  },

  {
    type: CONFERENCE,
    name: '2019 대한민국 ICT 융합엑스포 참가 및 부스운영',
    date: '2019.10.30 ~ 11.01',
    icon: GiConvict,
  },

  {
    type: ACTIVITY,
    name: '교내 스마트 스쿨 개발팀 B1ND팀 가입',
    date: '2019.11.19',
    icon: FaLaptopCode,
  },

  {
    type: ACTIVITY,
    name: '교내 전공역량 강화 교육 참여 (HTML, CSS)',
    date: '2019.12.17 ~ 12.20',
    icon: AiFillHtml5,
  },

  {
    type: AWARDS,
    name: `교내 메이커톤 '제주도를 부탁해' 대상`,
    date: '2019.12.18',
    icon: FaMedal,
  },

  {
    type: CONFERENCE,
    name: '교내 제2회 DEXT 컨퍼런스 참관',
    date: '2019.12.23',
    icon: FcConferenceCall,
  },

  {
    type: ACTIVITY,
    name: '대구 SW고 크리스마스 행복 진로비전 콘서트 참여',
    date: '2019.12.24',
    icon: GiPineTree,
  },

  {
    type: ACTIVITY,
    name: '교내 취업역량 강화 특강',
    date: '2020.01.06 ~ 01.09',
    icon: GiNothingToSay,
  },

  {
    type: COMPETITION,
    name: '2020 스마틴 앱 챌린지 참가',
    date: '2020.04',
    icon: RiSmartphoneLine,
  },

  {
    type: ACTIVITY,
    name: '포트폴리오 온라인 특강',
    date: '2020.04.13 ~ 2020.04.14 (40분씩)',
    icon: FcDocument,
  },

  {
    type: ACTIVITY,
    name: '여동엽 선배님의 온라인 기획 특강',
    date: '2020.04.24',
    icon: RiCalendarEventLine,
  },

  {
    type: ACTIVITY,
    name: '교내 1학년 대상 튜티튜터 멘토링 활동',
    date: '2020.06 ~ 09',
    icon: FaElementor,
  },

  {
    type: AWARDS,
    name: '학급 부반장 임명장',
    date: '2020.06.09',
    icon: FaAward,
  },

  {
    type: CONFERENCE,
    name: '온라인 GraphQL korea meetup 관람',
    date: '2020.06.13',
    icon: GrGraphQl,
  },

  {
    type: ACTIVITY,
    name: '교내 OCJP 자격증 특강수업 참여',
    date: '2020.07.10',
    icon: FaJava,
  },

  {
    type: ACTIVITY,
    name: '2020 교내 전공 역량 강화 교육참가 (React Native)',
    date: '2020.07.23 ~ 07.27',
    icon: FaReact,
  },

  {
    type: ACTIVITY,
    name: 'TTA 아카데미 소프트웨어 테스트 전문가 (CSTS) 교육 이수',
    date: '2020.08.10 ~ 08.12',
    icon: GrTestDesktop,
  },

  {
    type: AWARDS,
    name: '교내 양성평등 삼행시짓기 최우수상',
    date: '2020.08.28',
    icon: FaMedal,
  },

  {
    type: COMPETITION,
    name: '2020 대구 SW고 교내 해커톤 참가',
    date: '2020.09.08 ~ 09.09',
    icon: FaLaptopCode,
  },

  {
    type: ACTIVITY,
    name: '3개 SW마이스터고 온라인 웨비나 톡톡톡 행사 참가',
    date: '2020.09.23',
    icon: GiTalk,
  },

  {
    type: ACTIVITY,
    name: '교내 3학년 취업생 토크 콘서트',
    date: '2020.10.12',
    icon: FaMicrophone,
  },

  {
    type: CONFERENCE,
    name: '2020 온라인 KCD 컨퍼런스 관람',
    date: '2020.11.07',
    icon: FcConferenceCall,
  },

  {
    type: CONFERENCE,
    name: '2020 대한민국 ICT 융합엑스포 참가 및 부스 운영',
    date: '2020.11.19 ~ 11.20',
    icon: FaPersonBooth,
  },

  {
    type: COMPETITION,
    name: '3개 마이스터고 연합 해커톤 참가',
    date: '2020.11.23 ~ 11.25',
    icon: FaLaptopCode,
  },
  
  {
    type: ACTIVITY,
    name: '대구 SW고 전공역량강화 프로그램 - 알고리즘 교육 참여',
    date: '2020.12.18 ~ 12.23',
    icon: FaLaptopCode,
  },

  {
    type: ACTIVITY,
    name: '온라인 자기소개서 작성 특강',
    date: '2021.01.06 ~ 01.08',
    icon: BsPencil,
  },

  {
    type: ACTIVITY,
    name: 'OCAJP 국제 자격증 취득',
    date: '2021.01.08',
    icon: FaJava,
  },

  {
    type: AWARDS,
    name: '프로젝트 실습 교과우수상',
    date: '2021.02.05',
    icon: FaAward,
  },
];
