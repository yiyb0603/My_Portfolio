import * as Pages from 'pages';

export interface IRoutesTypes {
  name: string;
  pathname: string;
  component: () => JSX.Element;
}

const { Project, AboutMe, History } = Pages;
export const routes: IRoutesTypes[] = [
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