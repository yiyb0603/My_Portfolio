import { ThemeEnums } from "enum/ThemeEnum";
import { atom } from "recoil";

const { LIGHT, DARK } = ThemeEnums;

export const getTheme = (): ThemeEnums => {
  const theme = Number(localStorage.getItem('theme'));

  if (theme === DARK) {
    return DARK;
  }

  return LIGHT;
}

export const themeMode = atom<ThemeEnums>({
  key: 'themeMode',
  default: getTheme(),
});