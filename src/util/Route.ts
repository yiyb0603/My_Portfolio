export interface IRoutesTypes {
  name: string;
  pathname: string;
}

export const routes: IRoutesTypes[] = [
  {
    pathname: '/',
    name: 'HOME',
  },

  {
    pathname: '/aboutme',
    name: 'ABOUT ME',
  },

  {
    pathname: '/projects',
    name: 'MY PROJECTS'
  },

  {
    pathname: '/history',
    name: 'HISTORY',
  },
];