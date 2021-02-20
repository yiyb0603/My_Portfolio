import React, { useCallback } from 'react';
import { IoMdSunny } from 'react-icons/io';
import { FaMoon } from 'react-icons/fa';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { useRecoilState } from 'recoil';
import { themeMode } from 'recoil/Theme';
import { ThemeEnums } from 'enum/ThemeEnum';
import { setStorage } from 'lib/Storage';

const style = require('./ToggleTheme.scss');
const cx: ClassNamesFn = classNames.bind(style);

const ToggleTheme = (): JSX.Element => {
  const [theme, setTheme] = useRecoilState<ThemeEnums>(themeMode);
  const { LIGHT, DARK } = ThemeEnums;

  const handleChangeTheme = useCallback((): void => {
    if (theme === DARK) {
      setStorage('theme', LIGHT);
      setTheme(LIGHT);
      return;
    }

    setStorage('theme', DARK);
    setTheme(DARK);
  }, [DARK, LIGHT, setTheme, theme]);

  return (
    <div
      className={cx('ToggleTheme')}
      onClick={handleChangeTheme}
    >
      {
        theme === LIGHT ? <FaMoon /> : <IoMdSunny />
      }
    </div>
  );
};

export default ToggleTheme;
