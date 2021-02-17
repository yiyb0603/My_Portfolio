import FacebookLogo from 'assets/icons/facebook.png';
import VelogLogo from 'assets/icons/velog.jpg';
import GithubLogo from 'assets/icons/github.png';
import Constants from 'util/Constants';

const { FACEBOOK_ADDRESS, GITHUB_ADDRESS, BLOG_ADDRESS, ROCKET_ADDRESS } = Constants;

export interface IContactListType {
  name: string;
  logo: string;
  link: string;
}

export default [
  {
    name: 'facebook',
    logo: FacebookLogo,
    link: FACEBOOK_ADDRESS,
  },

  {
    name: 'github',
    logo: GithubLogo,
    link: GITHUB_ADDRESS,
  },

  {
    name: 'velog',
    logo: VelogLogo,
    link: BLOG_ADDRESS,
  },

  {
    name: 'rocket punch',
    logo: 'https://static.rocketpunch.com/images/rocketpunch_logo.svg',
    link: ROCKET_ADDRESS,
  },
];