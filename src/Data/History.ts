import { FaMedal, FaMountain, FaWater, FaAward, FaSchool, FaMicrophone, FaLaptopCode } from 'react-icons/fa';
import { GiElectric, GiForestCamp, GiNothingToSay, GiBlood, GiPineTree, GiConvict } from 'react-icons/gi';
import { RiSlideshow3Line, RiCalendarEventLine, RiPrinterCloudLine } from 'react-icons/ri';
import { IoMdBaseball } from 'react-icons/io';
import { AiFillHtml5 } from 'react-icons/ai';
import { FcNightLandscape, FcConferenceCall } from 'react-icons/fc';
import { IconType } from 'react-icons/lib';
import { HistoryEnums } from "enum/HistoryEnum";

export interface IHistoryType {
  // 0 = 수상, 1 = 활동, 2 = 전공관련,
  type: HistoryEnums,
  name: string;
  date: string;
  icon: IconType;
}

export const myHistory: IHistoryType[] = [
  {
    type: 2,
    name: '교내 기초전자교육',
    date: '2019.03.22 ~ 07.13',
    icon: GiElectric,
  },
  
  {
    type: 0,
    name: '교내 학급 서기 임명장',
    date: '2019.04.09',
    icon: FaAward,
  },

  {
    type: 1,
    name: '대니산 트래킹 봉사활동',
    date: '2019.05.10',
    icon: FaMountain,
  },

  {
    type: 1,
    name: '해양 수련활동',
    date: '2019.06.20 ~ 06.22',
    icon: FaWater,
  },

  {
    type: 1,
    name: '공연 룸넘버13 관람',
    date: '2019.07.05',
    icon: RiSlideshow3Line,
  },

  {
    type: 1,
    name: '여동엽 선배님 - \"니들이 기획을 잘해?\" 학생전문가 특강',
    date: '2019.07.08',
    icon: RiCalendarEventLine,
  },

  {
    type: 1,
    name: '선취업 후진학 특강 - 안교원 에듀잡 대표님',
    date: '2019.07.10',
    icon: FaMicrophone,
  },

  {
    type: 1,
    name: '2019 대구소프트웨어고등학교 SW 축제',
    date: '2019.07.12',
    icon: FaSchool,
  },

  {
    type: 2,
    name: '전기전자기초 교육 과학관 해커톤',
    date: '2019.07.13',
    icon: GiElectric,
  },

  {
    type: 2,
    name: '2019 교내 해커톤 참가',
    date: '2019.07.16 ~ 07.17',
    icon: FaLaptopCode,
  },

  {
    type: 0,
    name: '2019 교내 해커톤 대상 수상',
    date: '2019.07.16 ~ 07.17',
    icon: FaMedal,
  },

  {
    type: 2,
    name: '구미 3D프린터 기업 \"나인랩스\" 동아리 체험연수',
    date: '2019.07.29 ~ 08.02',
    icon: RiPrinterCloudLine,
  },

  {
    type: 1,
    name: '교내 커리어스피치 교육',
    date: '2019.08.21',
    icon: GiNothingToSay,
  },

  {
    type: 1,
    name: '헌혈 활동',
    date: '2019.08.22',
    icon: GiBlood,
  },

  {
    type: 1,
    name: '제주도 진로비전 캠프',
    date: '2019.08.27 ~ 08.30',
    icon: GiForestCamp,
  },

  {
    type: 2,
    name: '교내 \"제주도를 부탁해\" 메이커톤',
    date: '2019.09',
    icon: FcNightLandscape,
  },

  {
    type: 0,
    name: "교내 생활태도 우수 표창장",
    date: '2019.09.09',
    icon: FaAward,
  },

  {
    type: 1,
    name: '삼성 라이온즈 야구경기 관람',
    date: '2019.09.10',
    icon: IoMdBaseball,
  },

  {
    type: 2,
    name: '대구 SW고 1기 졸업생 진로 특강 및 인터뷰',
    date: '2019.10.08',
    icon: GiNothingToSay,
  },

  {
    type: 2,
    name: '제 1회 SW융합 학생 해커톤 캠프 참가',
    date: '2019.10.18 ~ 10.19',
    icon: FaLaptopCode,
  },

  {
    type: 0,
    name: '제 1회 SW융합 학생 해커톤 인기상, 최우수상',
    date: '2019.10.18 ~ 10.19',
    icon: FaMedal,
  },

  {
    type: 2,
    name: '2019 창의체험 동아리 축제 부스운영 및 참가',
    date: '2019.10.21',
    icon: FaLaptopCode,
  },

  {
    type: 2,
    name: '2019 대한민국 ICT 융합엑스포 참가 및 부스운영',
    date: '2019.10.30 ~ 11.01',
    icon: GiConvict,
  },

  {
    type: 2,
    name: '교내 전공역량 강화 교육 참여 (HTML, CSS)',
    date: '2019.12.17 ~ 12.20',
    icon: AiFillHtml5,
  },

  {
    type: 2,
    name: '교내 제2회 DEXT 컨퍼런스 참관',
    date: '2019.12.23',
    icon: FcConferenceCall,
  },

  {
    type: 1,
    name: '대구 SW고 크리스마스 행복 진로비전 콘서트 참여',
    date: '2019.12.24',
    icon: GiPineTree,
  },

  {
    type: 1,
    name: '교내 취업역량 강화 특강',
    date: '2020.01.06 ~ 01.09',
    icon: GiNothingToSay,
  },
];