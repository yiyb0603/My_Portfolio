import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from 'atom/theme';
import Storage from 'lib/storage';
import { ThemeEnums } from 'lib/enum/ThemeEnum';

const useTheme = () => {
  const [theme, setTheme] = useRecoilState<ThemeEnums>(themeState);
  const { LIGHT, DARK } = ThemeEnums;

  const handleChangeTheme = useCallback((): void => {
    if (theme === DARK) {
      Storage.setStorage('theme', LIGHT);
      setTheme(LIGHT);
      return;
    }

    Storage.setStorage('theme', DARK);
    setTheme(DARK);
  }, [DARK, LIGHT, setTheme, theme]);

  return {
    theme,
    handleChangeTheme,
  };
};

export default useTheme;