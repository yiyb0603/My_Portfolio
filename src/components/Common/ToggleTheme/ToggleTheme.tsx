import React, { memo } from 'react';
import { IoMdSunny } from 'react-icons/io';
import { FaMoon } from 'react-icons/fa';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import useTheme from 'hooks/util/useTheme';
import { ThemeEnums } from 'lib/enum/ThemeEnum';

const style = require('./ToggleTheme.scss');
const cx: ClassNamesFn = classNames.bind(style);

const ToggleTheme = (): JSX.Element => {
  const { theme, handleChangeTheme } = useTheme();

  return (
    <div
      className={cx('ToggleTheme')}
      onClick={handleChangeTheme}
    >
      {
        theme === ThemeEnums.LIGHT ? <FaMoon /> : <IoMdSunny />
      }
    </div>
  );
};

export default memo(ToggleTheme);