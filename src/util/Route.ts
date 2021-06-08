import * as Pages from 'pages';

export interface IRoute {
  name: string;
  pathname: string;
  component: () => JSX.Element;
}

const { Project, AboutMe, History } = Pages;
const routes: IRoute[] = [
  {
    pathname: '/',
    name: 'HOME',
    component: AboutMe,
  },

  {
    pathname: '/projects',
    name: 'MY PROJECTS',
    component: Project,
  },

  {
    pathname: '/history',
    name: 'HISTORY',
    component: History,
  },
];

export default routes;