import { Palette } from "styles/Palette/Palette";

export interface ICertificate {
  name: string;
  color: string;
  certifiedAt: string | Date;
}

export const certificates: ICertificate[] = [
  {
    name: 'OCAJP 오라클 국제 자격증',
    color: Palette.red,
    certifiedAt: '2021-01-08',
  },
];