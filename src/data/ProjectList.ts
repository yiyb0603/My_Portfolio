import { Palette } from 'styles/Palette/Palette';
import { IProjectType } from 'interface/ProjectType';

import WebWakeSong from 'assets/images/mockup/WebStudent/WakeSong.png';
import WebSchedule from 'assets/images/mockup/WebStudent/Web_Schedule.png';
import WebMain from 'assets/images/mockup/WebStudent/Web_Cap_Main.png';
import WebMainDark from 'assets/images/mockup/WebStudent/Web_Main_Dark.png';

import AdminAllow from 'assets/images/mockup/WebAdmin/AdminAllow.png';
import AdminAuthority from 'assets/images/mockup/WebAdmin/AdminAuthority.png';
import AdminClass from 'assets/images/mockup/WebAdmin/AdminClass.png';
import AdminPhone from 'assets/images/mockup/WebAdmin/AdminPhone.png';
import AdminSign from 'assets/images/mockup/WebAdmin/AdminSign.png';

import TeamMain from 'assets/images/mockup/TeamSite/TeamMain.png';
import TeamIntroduce from 'assets/images/mockup/TeamSite/TeamIntroduce.png';
import TeamService1 from 'assets/images/mockup/TeamSite/TeamService1.png';
import TeamService2 from 'assets/images/mockup/TeamSite/TeamService2.png';
import TeacherSign from 'assets/images/mockup/WebTeacher/TeacherSign.png';

import WebTeacherMain from 'assets/images/mockup/WebTeacher/Teacher_FirstPage.png';
import WebTeacherSecond from 'assets/images/mockup/WebTeacher/Teacher_SecondPage.png';
import WebTeacherMobile from 'assets/images/mockup/WebTeacher/Teacher_Web_Mobile.png';
import WebTeacher from 'assets/images/mockup/WebTeacher/Web_Teacher.png';
import WebTeacherReason from 'assets/images/mockup/WebTeacher/Teacher_Reason.png';

import CoronaDesktop from 'assets/images/mockup/Corona/Desktop.png';
import CoronaMobile from 'assets/images/mockup/Corona/Mobile.png';

import NFC from 'assets/images/mockup/NFC/NFC.png';

import YLogMain from 'assets/images/mockup/YLog/YLog_Home.png';
import YLogPost from 'assets/images/mockup/YLog/YLog_Post.png';
import YLogWrite from 'assets/images/mockup/YLog/YLog_Write.png';
import YLogSign from 'assets/images/mockup/YLog/YLog_Sign.png';
import YLogProfile from 'assets/images/mockup/YLog/YLog_Profile.png';
import YLogAdmin from 'assets/images/mockup/YLog/YLog_Admin.png';

import SchoolMain from 'assets/images/mockup/SchoolMeals/Main.png';
import SchoolMeal from 'assets/images/mockup/SchoolMeals/Meal.png';
import SchoolSchedule from 'assets/images/mockup/SchoolMeals/Schedule.png';

import LivroMain from 'assets/images/mockup/Livro/Main.png';
import LivroCheck from 'assets/images/mockup/Livro/Check.png';
import LivroMyInfo from 'assets/images/mockup/Livro/Myinfo.png';
import LivroSearch from 'assets/images/mockup/Livro/Search.png';

import CoCodeCommunity from 'assets/images/mockup/CoCode/CoCode_Community.png';
import CoCodeMealCom from 'assets/images/mockup/CoCode/CoCode_MealCom.png';
import CoCodeMeals from 'assets/images/mockup/CoCode/CoCode_Meals.png';
import CoCodeSign from 'assets/images/mockup/CoCode/CoCode_Sign.png';

import PortfolioHistory from 'assets/images/mockup/Portfolio/Portfolio_History.png';
import PortfolioHome from 'assets/images/mockup/Portfolio/Portfolio_Home.png';
import PortfolioModal from 'assets/images/mockup/Portfolio/Portfolio_Modal.png';
import PortfolioProject from 'assets/images/mockup/Portfolio/Portfolio_Project.png';
import PortfolioStack from 'assets/images/mockup/Portfolio/Portfolio_Stack.png';

import PolypoidMockup from 'assets/images/mockup/Polypoid/Polypoid.png';
import { ProjectTypes } from 'enum/ProjectEnum';

const { blue } = Palette;
const { TEAM, ALONE } = ProjectTypes;

export const projectList: IProjectType[] = [
  {
    id: 1,
    name: '도담도담 V2 유지보수',
    type: ['Front End'],
    stacks: ['JavaScript', 'React.js', 'MobX', 'Scss'],
    period: '2020.06.19 ~ (서비스중)',
    introduction: '교내 스마트 스쿨 플랫폼',
    description: `기숙학교를 지내는 학생들은 교과시간이 끝난 이후에는 학교 안에서 자유롭게 자습을 할 수 있습니다.
    하지만 학교에서는 학생 관리를 위해 종이로 된 장부에 필수로 자신의 위치를 적어야 합니다. 그리고 선생님들 또한 직접 
    종이 장부를 들고 다니면서 일일이 체크 하여야 합니다.
    
    또한 학생들이 외출 / 외박을 가기 위해서는 부모님의 허락을 받고나서 선생님께 신청하고 승인을 받아야 합니다.
    
    이러한 불편하고 힘들게 기숙사학교에서 학생들이 생활하고 선생님들이 관리하고 계십니다.
    이러한 불편함과 문제점들을 개선해 나가고 편하게 학교생활을 하자는 의미에서 도담도담 시스템이 나오게 되었습니다.`,
    thumbnail: WebMain,
    member: TEAM,
    gallery: [WebMain, WebMainDark, WebSchedule, WebWakeSong],
    feel: `
    바인드 팀의 대표적인 프로젝트 도담도담 입니다.<br/>
    도담도담 페이지의 기본이 되는 요소들은 3기 선배님들께서 만들어주시고, 2020년 6월 중반부터 유지보수를 맡았습니다.
    처음에 도담도담 코드를 봤었을 때는 무슨 코드인지 잘 읽히지 않았지만, 많은 프로젝트 경험 덕분에 천천히 코드를 읽을 수 있었습니다.<br/>
    현재는 도담도담에 버그가 생기거나 기능 상향이 되어야 할때는 유지보수를 맡은 4기를 중심으로 개발하고 있으며, 유지보수의 중요성을 알게 된 경험이었습니다.
    `,
    role: '회원 알림탭, 분실물, 상담 쪽의 프론트엔드 유지보수를 맡았습니다.',
    link: `<a style ='color: ${blue}' href='http://dodam.b1nd.com' target='_blank' rel ='noopener noreferrer'>
    http://dodam.b1nd.com (학교 내부망 네트워크만 접속이 됩니다.)</a>`,
  },

  {
    id: 2,
    name: '도담도담 관리자',
    type: ['Front End'],
    stacks: ['JavaScript', 'React.js', 'MobX', 'Scss'],
    period: '2020.03.15 ~ 05.18 (서비스 중)',
    introduction: '교내 스마트 스쿨 플랫폼 관리자 페이지',
    description: `1번 프로젝트인 '도담도담'의 관리자용 페이지이며, 도담도담을 이루는 요소들을 전반적으로 관리합니다.<br />
    학생들이 위치신청을 하는 위치 장소 관리, 장소 및 회원가입 관리를 위한 교실 관리 등의 전반적인 베이스 데이터들을 관리합니다.`,
    thumbnail: AdminAllow,
    member: TEAM,
    gallery: [AdminAllow, AdminAuthority, AdminClass, AdminPhone, AdminSign],
    feel: `
    먼저, 이번 프로젝트를 통해서 제가 엄청나게 달라졌던것 같습니다. <br/>
    처음에 팀원들과 코드와 디자인을 통일하지 않아서 프로젝트를 진행하는데 많은 힘겨움 때문에 엄청 힘들었던 것 같습니다.
    하지만 프로젝트를 진행하면서 PM 선생님의 조언과 선배님들의 도움으로 코드와 디자인의 통일이 맞춰지기 시작하였습니다.
    저번 프로젝트에서는 CRUD를 익혔다면, 이번 프로젝트에서는 React.js 컴포넌트 재활용성 및 코드의 질을 훨씬 끌어올릴 수 있었고,
    제가 팀장을 맡았던 프로젝트 였기에, 팀장의 높은 책임감과 팀을 이끄는 리더쉽이 정말 중요하다는 것을 깨닫게 되었습니다.<br/>
    그리고 우여곡절 끝에 프로젝트를 완성하였고 이후 학사일정 기능을 업그레이드 하는 과정이 있었는데,
    Toast UI 캘린더를 이용하여 일정 시각화 및 드래그 수정 및 추가 기능 과정에서 많은 삽질을 통한 노력이 중요하다는 것을 알았습니다.
    `,
    role: '시간표 관리, 교실관리, 장소 관리 페이지를 담당하여 개발 및 유지보수를 하였습니다.',
    link: `<a style ='color: ${blue}' href='http://admin.dodam.b1nd.com' target='_blank' rel ='noopener noreferrer'>
    http://admin.dodam.b1nd.com (학교 내부망 네트워크만 접속이 됩니다.)</a>`,
  },

  {
    id: 3,
    name: '도담도담 선생님',
    type: ['Front End'],
    stacks: ['TypeScript', 'React.js', 'MobX', 'Scss'],
    period: '2020.07.31 ~ 09.24 (서비스 중)',
    introduction: '교내 스마트 스쿨 플랫폼 선생님 페이지', 
    description: `1번 프로젝트인 '도담도담'의 선생님용 페이지이며, 학생이 선생님의 승인 등이 필요한 요소 또는
    학생들이 보는 학사일정, 상벌점 내역, 그리고 SMS발송 등의 기능들을 선생님들이 쓰기 쉽도록 선생님용 페이지에서 사용 가능합니다.`,
    thumbnail: WebTeacherMain,
    member: TEAM,
    gallery: [WebTeacherMain, WebTeacherReason, WebTeacherSecond, WebTeacherMobile, WebTeacher, TeacherSign],
    feel: `
    바인드 팀 웹에서 처음으로 타입스크립트를 이용한 프로젝트 였습니다.<br/>
    기존에 자바스크립트를 이용하여 웹을 제작했던 저는, TS 파일럿 프로젝트를 통해서
    기존에 타입스크립트를 적응하였고, 그 덕분에 타입스크립트도 막힘없이 빠르게 저의 작업을 끝낼 수 있었습니다.
    `,
    role: '선생님 로그인/회원가입, 퇴사주 버스 관리, 학사일정 및 시정표 관리, 휴일 복귀 기능을 맡아서 제작하였습니다.',
    link: `<a style ='color: ${blue}' href='http://teacher.dodam.b1nd.com' target='_blank' rel ='noopener noreferrer'>
    http://teacher.dodam.b1nd.com (학교 내부망 네트워크만 접속이 됩니다.)</a>`,
  },

  {
    id: 4,
    name: '바인드팀 팀사이트',
    type: ['Front End'],
    stacks: ['JavaScript', 'React.js', 'Scss'],
    period: '2020.04.08 ~ 05.10 (서비스 중)',
    introduction: '교내 바인드팀 팀사이트', 
    description: `제가 소속되어 있는 교내 스마트 스쿨 플랫폼 개발팀 바인드 팀의 웹페이지 입니다.
    현재까지 바인드팀이 걸어왔던 길 및 팀원 소개 등의 바인드팀 소개 위주로 이루어져 있습니다.
    바인드팀에 대한 궁금한 점이 있다면 둘러보세요.`,
    thumbnail: TeamService1,
    member: TEAM,
    gallery: [TeamService1, TeamService2, TeamMain, TeamIntroduce],
    feel: `처음으로 바인드팀과 관한 웹페이지를 만들어보는 일이었고, 그만큼 중요했던 프로젝트 였기에
    내용 및 디자인 하나하나 섬세하게 생각하면서 제작을 하였습니다. 사실 제작 당시에는 UI 디자인 초안이
      없었지만, PM 선생님 및 팀원들의 도움 덕분에 무사히 제작할 수 있었습니다.
      네이버 및 카카오 공식 홈페이지를 많이 참고했습니다.`,
    role: '프론트엔드 에서 여러 페이지들을 번번히 만져가면서 제작하였고, 서비스 및 유지보수 하였습니다.',
    link: `<a style ='color: ${blue}' href='http://b1nd.com' target='_blank' rel ='noopener noreferrer'>http://b1nd.com</a>`,
  },

  {
    id: 5,
    name: '여기 코로나',
    type: ['Front End'],
    stacks: ['JavaScript', 'React.js', 'MobX', 'Axios', 'Scss'],
    period: '2020.02',
    introduction: '코로나 정보 웹사이트',
    member: TEAM,
    description: `
    2020년 2월, 전세계를 강타한 코로나 바이러스의 영향으로
    코로나 감염 현황을 알리기 위해서 제작한 웹 사이트입니다.<br />
    전 세계별, 국내 감염자의 수의 데이터를 시각화 하여 현재 감염자 수를 한눈에 알아볼수 있고,
    지역 공유 게시판, 동네 가게 홍보 등 커뮤니티 기능을 이용한 사람들과의 협력을 통하여 대화할 수 있도록 하였습니다.
    추가적으로 모바일 및 데스크톱 반응형을 넣었습니다.
    `,
    thumbnail: CoronaDesktop,
    gallery: [CoronaDesktop, CoronaMobile],
    feel: `
    팀원들끼리 모여서 프로젝트 기획을 시작으로 서로 맡은 부분을 차례차례 해나갔습니다.<br/>
    그러다보니 길지 않았던 기간에 빠르게 작업을 끝낼 수 있었고, 처음으로 팀원들과 배포를 했던 프로젝트 였습니다.<br/>
    이번 프로젝트를 통해서 프론트엔드에서의 기초 CRUD 작업을 완벽히 적응하였고, 팀원들과 화합하는 법을 배웠습니다.        
    `,
    role: '지역 공유 게시판 및 자영업자 장터 제작을 맡았습니다.',
    link: `
    서비스가 종료되었습니다.<br />
    깃허브: <a style ='color: ${blue}' href='https://github.com/yiyb0603/Here-Corona' target='_blank' rel ='noopener noreferrer'>
    https://github.com/yiyb0603/Here-Corona</a>
    `,
  },

  {
    id: 6,
    name: 'NFC Spot Counter',
    type: ['Front End'],
    stacks: ['Arduino (Embeded)', 'Java', 'PHP', 'HTML', 'CSS'],
    period: '2019.08.27 ~ 09.09',
    introduction: '제주도 관광 도움 애플리케이션',
    thumbnail: NFC,
    member: TEAM,
    gallery: [NFC],
    description: `
    2019년 9월, 교내에서 진행했던 '제주도를 부탁해' 에서 대상을 받은 작품입니다.<br/>
    제주도에서 관광 여행을 할때 관광객들의 불편했던 의견들을 모아서 프로젝트를 기획하였으며,<br/>
    누구나 스마트폰에 탑재되어 있고, 사용하기 쉬운 NFC를 이용하여 제주도 관광앱을 만들기로 하였습니다.
    NFC 리더기를 처리하는 임베디드, 인식 받은 값을 띄워주고 그에 따른 화면을 보여주는 안드로이드,<br/>
    그리고 앱에서 추천 관광지를 눌렀을때 관광지 정보를 보여주는 웹 총 3가지의 플랫폼을 친구들과 작업하였습니다.
    `,
    feel: `
    저의 웹 첫 프로젝트였으며, 퍼블리싱 위주의 작업을 하면서 기초적인 퍼블리싱을 많이 쌓을 수 있었던 것 같습니다.<br/>
    또한 2019년 11월 ICT 융합대전 부스를 운영하게 되면서 팀원 모두가 열심히 하여 완성했고,
    그 노력들 덕분에 12월, '제주도를 부탁해' 메이커톤 대상을 받게 되었던 것 같습니다.
    `,
    role: '프론트엔드, 관광지 추천 웹사이트를 제작했습니다.',
    link: `
    깃허브: <a style ='color: ${blue}' href='https://github.com/yiyb0603/2019_ICT' target='_blank' rel ='noopener noreferrer'>
    https://github.com/yiyb0603/2019_ICT</a>
    `
  },

  {
    id: 7,
    name: 'YLog 개인 블로그',
    type: ['Front End', 'Back End'],
    stacks: ['TypeScript', 'Next.js', 'Scss', 'MobX', 'Express', 'TypeORM', 'MySQL', 'FCM'],
    period: '2020.09.16 ~ 11',
    introduction: '개인 블로그 사이트',
    description: `
    2학년 2학기 프로젝트 실습 과목에서 진행했던 프로젝트 입니다.<br/>
    기존에 프론트엔드만 작업해왔던 저는 이번 기회를 통해서 백엔드도 접해봄으로써 풀스택 프로젝트를 하고싶었습니다.
    또한 기존의 Naver, Tistory 등의 흔한 블로그보다 직접 저만의 블로그를 만들고, 관리해보고 싶었기에 블로그를 주제로 선택했습니다.<br/>
    그리고 처음으로 FCM을 도입해봄으로써 알림기능의 신기함을 느꼈습니다.<br/>
    `,
    thumbnail: YLogMain,
    member: ALONE,
    gallery: [YLogMain, YLogPost, YLogProfile, YLogWrite, YLogSign, YLogAdmin],
    feel: `
    예전 해커톤의 경험으로 Next.js를 사용하는데 설정 등을 어렵지 않게 해놓을 수 있었고, 서버 사이드 렌더링의 원리를 알게된 프로젝트 였습니다.<br/>
    백엔드를 프로그래밍 할때 ORM 도구를 이용하여 데이터베이스와 소통하는 것이 쉬워서 어렵지 않게 제작할 수 있었습니다.
    `,
    role: `
    프론트엔드, 백엔드를 혼자서 제작하였습니다.<br/>
    `,
    link: `
    프론트엔드 깃허브: <a style ='color: ${blue}' href='https://github.com/yiyb0603/YLog_Web' target='_blank' rel ='noopener noreferrer'>
    https://github.com/yiyb0603/YLog_Web</a><br/>
    백엔드 깃허브: <a style ='color: ${blue}' href='https://github.com/yiyb0603/YLog_Server' target='_blank' rel ='noopener noreferrer'>
    https://github.com/yiyb0603/YLog_Server</a>
    `,
  },

  {
    id: 8,
    name: 'School Meals',
    type: ['Front End', 'Back End'],
    stacks: ['TypeScript', 'JavaScript', 'React.js', 'Scss', 'MobX', 'Express.js'],
    period: '2020.04 ~ 2020.05',
    introduction: '학교를 검색하여 급식, 일정을 볼 수 있는 웹',
    description: `
    전국에 있는 학교를 검색하여 급식 및 일정을 볼 수 있는 웹페이지를 제작했습니다.<br/>
    기존에 나이스 API를 이용해보고 싶었던 저는, 이번 기회를 통해 나이스 API를 사용해볼 수 있었습니다.
    `,
    thumbnail: SchoolMain,
    member: ALONE,
    gallery: [SchoolMain, SchoolMeal, SchoolSchedule],
    feel: `
    저의 첫 타입스크립트 프로젝트이자 파일럿 프로젝트 입니다.<br/>
    원래는 웹에서 바로 나이스 API를 받아오려고 하였으나, CORS 보안 정책으로 인하여 직접 Express를 이용하여 서버를 제작했습니다.<br/>
    이번 프로젝트를 통해서 얻었던 타입스크립트 경험덕분에 추후에 진행했던 '도담도담 선생님용' 프로젝트를 막힘없이 진행했던 것 같습니다.
    `,
    role: '프론트엔드, 백엔드를 혼자서 제작하였습니다.',
    link: `
    서비스가 종료되었습니다.<br />
    깃허브: <a style ='color: ${blue}' href='https://github.com/yiyb0603/SchoolMeals_TS' target='_blank' rel ='noopener noreferrer'>
    https://github.com/yiyb0603/SchoolMeals_TS</a>
    `,
  },

  {
    id: 9,
    name: 'LIVRO-S',
    type: ['Front End'],
    stacks: ['JavaScript', 'React.js', 'Scss', 'MobX', 'Styled-Components'],
    period: '2020.11.23 ~ 11.24',
    introduction: '3개 마이스터고 학생들의 도서관 웹사이트',
    description: `
    2020년 3개 마이스터고 연합 해커톤때 진행했던 프로젝트 입니다.<br/>
    Livro는 '책' 이라는 뜻의 포르투갈 언어의 뜻을 가지고, 3개 마이스터고 학생들의 도서관을 쉽게 관리하기 위해서 <br/>
    만들어진 웹사이트 입니다.
    `,
    thumbnail: LivroMain,
    member: TEAM,
    gallery: [LivroMain, LivroSearch, LivroCheck, LivroMyInfo],
    feel: `
    이번에 처음으로 3개 마이스터고 연합 해커톤에 참가하게 되었는데, 서로서로 작업 했던 환경과 스택이 달라서<br/>
    스택을 맞추는데 살짝 고민했지만 서로서로 배려하고, 의견을 통해 개발스택을 맞출 수 있었습니다.<br/>
    디자이너 친구의 좋은 솜씨덕분에 저는 퍼블리싱을 금방 끝낼 수 있었고, 서버를 담당했던 친구들도 API를 잘 만들어줘서
    저는 빠르게 작업을 끝낼 수 있었던 것 같습니다.<br/>
    그리고 MobX가 처음이었던 광주 SW고 팀원 친구에게 차근차근 가르쳐주면서 도움을 주었습니다.<br/>
    비록 수상은 못했지만 좋은 팀호흡과 퀄리티의 코드를 통해서 만족했던 해커톤 이였습니다.
    `,
    role: '프론트엔드에서 메인화면, 도서 검색, 대출 기능을 맡아서 작업하였습니다.',
    link: `
    깃허브: <a style ='color: ${blue}' href='https://github.com/yiyb0603/Livro-Front-end' target='_blank' rel ='noopener noreferrer'>
    https://github.com/yiyb0603/Livro-Front-end</a>
    `,
  },

  {
    id: 10,
    name: 'CoCode',
    type: ['Front End'],
    stacks: ['TypeScript', 'Next.js', 'Scss', 'MobX'],
    period: '2020.09.08 ~ 09.09',
    introduction: '교내 커뮤니티 사이트',
    description: `
    2020년 대구SW고 해커톤때 만들었던 교내 커뮤니티 사이트 프로젝트 입니다.<br/>
    학생들끼리 소통할 수 있는 커뮤니티 게시판, 학생과 선생님이 소통할 수 있는 급식건의 게시판을 만들어 소통 공간을 만들었습니다.<br/>
    플랫폼은 3개로 서버, 웹, 안드로이드로 제작하였습니다.
    `,
    thumbnail: CoCodeCommunity,
    member: TEAM,
    gallery: [CoCodeCommunity, CoCodeMealCom, CoCodeMeals, CoCodeSign],
    feel: `
    기존에 React.js만 쓰던 저는 처음으로 Next.js를 도입해본 프로젝트 였습니다.<br/>
    Next.js를 처음 써봤던 저는 환경설정 부분에서 많은 시간이 걸려서 아쉬움이 있었지만<br/>
    그래도 기능은 모두 구현되어서 좋은 경험이었고, 앞으로의 Next.js 사용에 어려움이 없었습니다.<br/>
    `,
    role: '프론트엔드 웹 전체를 맡아서 제작하였습니다.',
    link: `
    깃허브: <a style ='color: ${blue}' href='https://github.com/yiyb0603/CoCode_Web' target='_blank' rel ='noopener noreferrer'>
    https://github.com/yiyb0603/CoCode_Web</a>
    `,
  },

  {
    id: 11,
    name: 'Polypoid',
    type: ['Cross Platform', 'Back End'],
    stacks: ['TypeScript', 'React Native', 'Redux', 'Nest.js', 'TypeORM', 'MySQL', 'Google OAuth2'],
    period: '2021.01',
    introduction: '간단한 메모 어플리케이션',
    thumbnail: PolypoidMockup,
    member: ALONE,
    gallery: [PolypoidMockup],
    description: `
    2021년 겨울방학 기간에 프로젝트 실습 과제 프로젝트 입니다. 다른 일정들로 인해서 짧아진 방학 기간동안 무엇을 할지 생각을 하다가,
    간단하게 만들 수 있는 메모장으로 주제를 정하였습니다.<br/>
    `,
    role: `크로스플랫폼과 백엔드를 혼자 작업하였습니다.`,
    feel: `
    이전에 깊이 다루지 못했던 React Native 및 Redux를 이용하여 프로젝트를 진행하기, Nest.js를 이용하여 백엔드 설계하기
    이 두가지를 예전부터 하고 싶었는데, 이번 프로젝트를 통해서 React Native, Redux, Nest.js를 실습해보는 경험이 된 것 같아서 좋았습니다.<br/>
    로그인 / 회원가입시 Google OAuth2를 적용하였습니다.<br/>
    React Native를 진행하면서 겪은 여러가지 문제점들 및 부족한 국내 자료들을 찾을때마다 어려움을 느끼기도 하였습니다.
    `,
    link: `
    프론트엔드 깃허브: <a style ='color: ${blue}' href='https://github.com/yiyb0603/Polypoid_Client' target='_blank' rel ='noopener noreferrer'>
    https://github.com/yiyb0603/Polypoid_Client</a><br/>
    백엔드 깃허브: <a style ='color: ${blue}' href='https://github.com/yiyb0603/Polypoid_Server' target='_blank' rel ='noopener noreferrer'>
    https://github.com/yiyb0603/Polypoid_Server</a>
    `,
  },

  {
    id: 12,
    name: '개인 포트폴리오 페이지',
    type: ['Front End'],
    stacks: ['TypeScript', 'React.js', 'Sass', 'Github Pages'],
    period: '2020.11 ~ 12',
    introduction: '개인 포트폴리오 웹 페이지',
    thumbnail: PortfolioStack,
    member: ALONE,
    gallery: [PortfolioStack, PortfolioHome, PortfolioProject, PortfolioModal, PortfolioHistory],
    description: `
    최근에 포트폴리오 관리에 중요성이 생겨서 포트폴리오를 관리할 방법을 생각하다가 제가 프론트엔드 개발자라는 특성을 살려서
    개인 포트폴리오 웹 페이지를 만들기로 결심했고, 지금까지의 제가 활동 기록등을 바탕으로 내용을 모두 작성하여 완성했습니다.
    `,
    role: `전체적인 모든 부분을 작업 하였습니다.`,
    feel: `
    프로젝트를 구상할때, 수많은 저의 각종 데이터들을 어떻게 하면 효율적으로 관리할 수 있을지 생각을 하다가,
    기존 TypeScript 배열 객체 형식을 이용하여 모든 데이터들을 각각 관리하고 사용하여 좀 더 편리하게 데이터를 관리할 수 있었습니다.<br/>
    또한 이번기회에 제대로 저의 활동들 및 수상 기록 등의 정보를 기록해놓을 수 있어서 포트폴리오 관리에 많은 도움이 되었습니다.
    `,
    link: `
    깃허브: <a style='color: ${blue}' href='https://github.com/yiyb0603/my_portfolio' target='_blank' rel ='noopener noreferrer'>
        https://github.com/yiyb0603/my_portfolio</a>
    `,
  },
];