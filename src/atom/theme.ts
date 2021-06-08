import { atom } from 'recoil';
import { ThemeEnums } from 'lib/enum/ThemeEnum';
import { getTheme } from 'lib/theme';

export const themeState = atom<ThemeEnums>({
  key: 'themeState',
  default: getTheme(),
});