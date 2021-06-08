import { ThemeEnums } from 'lib/enum/ThemeEnum';
import Storage from 'lib/storage';

const { LIGHT, DARK } = ThemeEnums;

export const getTheme = (): ThemeEnums => {
  const theme = Number(Storage.getStorage('theme'));

  if (theme === DARK) {
    return DARK;
  }

  return LIGHT;
}