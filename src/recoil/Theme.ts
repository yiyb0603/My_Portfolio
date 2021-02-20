import { ThemeEnums } from "enum/ThemeEnum";
import { getStorage } from "lib/Storage";
import { atom } from "recoil";

const { LIGHT, DARK } = ThemeEnums;

export const getTheme = (): ThemeEnums => {
  const theme = Number(getStorage('theme'));

  if (theme === DARK) {
    return DARK;
  }

  return LIGHT;
}

export const themeMode = atom<ThemeEnums>({
  key: 'themeMode',
  default: getTheme(),
});