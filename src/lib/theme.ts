import { ThemeEnums } from 'lib/enum/ThemeEnum';
import Storage from 'lib/storage';

const { LIGHT, DARK } = ThemeEnums;

export const getTheme = (): ThemeEnums => {
  const theme: string | null = Storage.getStorage('theme');
  const prefersDark: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: Dark)').matches;

  if (theme === DARK) {         // 웹에 방문해서 다크모드로 설정했을때
    return DARK;
  } else if (theme === LIGHT) { // 웹에 방문해서 라이트모드로 설정했을때
    return LIGHT;
  } else if (prefersDark) {     // 웹에 방문안했고, 운영체제 테마가 다크모드일때
    return DARK;
  } else {                      // 이외에 모든 조건은 라이트모드로 설정
    return LIGHT;
  }
}