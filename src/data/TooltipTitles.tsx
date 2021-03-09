import React, { CSSProperties } from "react";
import { StackEnums } from "enum/StackEnum";
import { Palette } from "styles/Palette/Palette";
import CLogo from 'assets/images/CLogo.svg';
import { FaHtml5, FaJava, FaReact, FaSass, FaVuejs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GiTeslaCoil } from "react-icons/gi";
import NextLogo from 'assets/images/Next.png';
import ReduxLogo from 'assets/images/redux.svg';
import NestLogo from 'assets/images/nest.jpg';
import CSharpLogo from 'assets/images/c-sharp.png';
import { GrNode } from "react-icons/gr";

export interface ITooltipTitleTypes {
  progressName: string;
  title: string;
  progress: string;
  background: string;
  level: StackEnums;
  icon: JSX.Element;
}

const imageStyle: CSSProperties = {
  width: 55,
  height: 55,
  borderRadius: 5,
  objectFit: 'cover',
};

const TS_LOGO: string = 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg';
const MOBX_LOGO: string = 'https://miro.medium.com/max/400/1*nvHO6KuxX5B6FVXZ_hqTZw.png';
const TYPE_ORM_LOGO: string = 'https://avatars2.githubusercontent.com/u/20165699?s=400&v=4';


const { HIGH, MEDIUM, LOW } = StackEnums;
export const tooltipTitles: ITooltipTitleTypes[] = [
  {
    progressName: 'C언어',
    title: '제가 가장 처음 접했던 프로그래밍 언어로, 기초 프로그래밍 능력을 쌓을 수 있었습니다.',
    progress: '50%',
    background: Palette.primary,
    level: LOW,
    icon: <img src={CLogo} style={imageStyle} alt='C language' />,
  },

  {
    progressName: 'C# WPF',
    title: '수업시간에 C# WPF를 이용하여 키오스크 프로그램을 만들어보았습니다.',
    progress: '55%',
    background: Palette.primary,
    level: LOW,
    icon: <img src={CSharpLogo} style={imageStyle} alt='C#' />
  },

  {
    progressName: 'Java',
    title: '제가 가장 처음 접했던 객체지향 프로그래밍 언어이고, 기초적인 객체지향 능력을 키웠으며, 알고리즘 문제를 해결할때 많이 사용합니다.',
    progress: '70%',
    background: Palette.red,
    level: MEDIUM,
    icon: <FaJava />,
  },

  {
    progressName: 'HTML & CSS',
    title: '웹을 처음 시작할때 많이 공부하였고, 기본이 되는 퍼블리싱을 할 수 있습니다.',
    progress: '95%',
    background: Palette.orange,
    level: HIGH,
    icon: <FaHtml5 />,
  },

  {
    progressName: 'JavaScript',
    title: 'ES6 위주의 모던 자바스크립트를 사용하고, 라이브러리와 프레임워크로 많이 사용합니다.',
    progress: '95%',
    background: Palette.yellow,
    level: HIGH,
    icon: <IoLogoJavascript />,
  },

  {
    progressName: 'TypeScript',
    title: '최근에 가장 좋아하는 언어이고, 프론트엔드와 백엔드에서 가장 많이 사용합니다.',
    progress: '95%',
    background: Palette.primary,
    level: HIGH,
    icon: <img src={TS_LOGO} alt ='typescript' style={imageStyle} />,
  },

  {
    progressName: 'React.js',
    title: '가장 처음 접해본 자바스크립트 라이브러리겸 프레임워크이고, 많은 프로젝트를 통해서 능숙하게 사용 가능합니다.',
    progress: '90%',
    background: Palette.primary,
    level: HIGH,
    icon: <FaReact />,
  },

  {
    progressName: 'MobX',
    title: '제가 가장 많이 사용하고있는 상태관리 라이브러리이며, 리액트를 사용할때 가장 많이 사용합니다.',
    progress: '85%',
    background: Palette.orange,
    level: HIGH,
    icon: <img src ={MOBX_LOGO} alt ='mobx' style={imageStyle} />,
  },

  {
    progressName: 'Recoil',
    title: '최근에 관심을 가지고있는 React의 상태관리 라이브러리이며, 적극 도입할 예정입니다.',
    progress: '68%',
    background: Palette.blue,
    level: MEDIUM,
    icon: <GiTeslaCoil />,
  },

  {
    progressName: 'Redux',
    title: 'dispatch, action의 원리와 action type을 이용하여 axios와 활용을 할 수 있습니다. (React Native에서 많이 사용합니다.)',
    progress: '65%',
    background: Palette.purple,
    level: MEDIUM,
    icon: <img src={ReduxLogo} alt ='redux' style={imageStyle} />,
  },

  {
    progressName: 'Scss',
    title: '변수 및 클래스 치환을 사용하는 등 Scss의 이점을 이용해서 스타일링을 합니다.',
    progress: '90%',
    background: Palette.pink,
    level: HIGH,
    icon: <FaSass />,
  },

  {
    progressName: 'Vue.js',
    title: '최근에 공부중이고, 사용해보고 싶은 자바스크립트 프레임워크 입니다.',
    progress: '30%',
    background: Palette.green,
    level: LOW,
    icon: <FaVuejs />,
  },

  {
    progressName: 'Next.js',
    title: 'Next.js를 이용하여 서버 사이드 렌더링 경험 및 프로젝트를 해봤고, 앞으로도 많은 도입 예정입니다.',
    progress: '75%',
    background: Palette.blue,
    level: HIGH,
    icon: <img src={NextLogo} alt='nextjs' style ={imageStyle} />,
  },

  {
    progressName: 'Express.js',
    title: '기존에 많이 쓰던 Node.js 프레임워크이며, REST API 서버를 제작할 수 있습니다.',
    progress: '70%',
    background: Palette.green,
    level: MEDIUM,
    icon: <GrNode />,
  },

  {
    progressName: 'TypeORM',
    title: '백엔드 프로그래밍을 할때 DB와 통신을 주고받는것이 편리해서 자주쓰는 ORM 도구입니다.',
    progress: '75%',
    background: Palette.blue,
    level: MEDIUM,
    icon: <img src ={TYPE_ORM_LOGO} alt ='typeorm' style ={imageStyle} />,
  },

  {
    progressName: 'Nest.js',
    title: 'TypeScript를 기반으로 한 구조가 마음에 들어서 사용하고 있고, REST API 서버를 제작할 수 있습니다.',
    progress: '65%',
    background: Palette.pink,
    level: MEDIUM,
    icon: <img src={NestLogo} alt ='nest' style={imageStyle} />,
  }
];