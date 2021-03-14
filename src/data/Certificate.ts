import { Palette } from "styles/Palette/Palette";

export interface ICertificate {
  name: string;
  color: string;
  certifiedAt: string | Date;
  link: string;
}

export const certificates: ICertificate[] = [
  {
    name: 'OCAJP 오라클 국제 자격증',
    color: Palette.red,
    certifiedAt: '2021-01-08',
    link: 'https://velog.io/@yiyb0603/OCAJP-%EC%9E%90%EA%B2%A9%EC%A6%9D-%EC%8B%9C%ED%97%98-%ED%9B%84%EA%B8%B0',
  },
];