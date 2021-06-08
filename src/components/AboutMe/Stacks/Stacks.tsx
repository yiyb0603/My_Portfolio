import React, { useMemo, useState } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { GiStack } from 'react-icons/gi';
import StackItem from '../StackItem';
import { ITooltipTitleTypes, tooltipTitles } from 'data/TooltipTitles';
import { StackEnums } from 'lib/enum/StackEnum';

const style = require('./Stacks.scss');
const cx: ClassNamesFn = classNames.bind(style);

const Stacks = (): JSX.Element => {
  const { HIGH, MEDIUM, LOW } = StackEnums;
  const [stackType, setStackType] = useState<StackEnums>(HIGH);

  const filterSkills: ITooltipTitleTypes[] = useMemo(() => {
    return tooltipTitles.filter((tooltip) => {
      return tooltip.level === stackType;
    });
  }, [stackType]);

  return (
    <div className={cx('Stacks')}>
      <div className={cx('Stacks-Top')}>
        <GiStack className={cx('Stacks-Top-Icon')} />
        <h2 className={cx('Stacks-Top-Title')}>기술 스택</h2>
      </div>

      <div className={cx('Stacks-Stack')}>
        <div className={cx('Stacks-Stack-Titles')}>
          <div className={cx({
            'Stacks-Stack-Titles-Current': stackType === HIGH,
          })} onClick={() => setStackType(HIGH)}>많이 사용해보았어요.</div>

          <div className={cx({
            'Stacks-Stack-Titles-Current': stackType === MEDIUM,
          })} onClick={() => setStackType(MEDIUM)}>어느정도 사용해보았어요.</div>

          <div className={cx({
            'Stacks-Stack-Titles-Current': stackType === LOW,
          })} onClick={() => setStackType(LOW)}>조금만 사용해보았어요.</div>
        </div>

        {
          filterSkills.map((tooltip: ITooltipTitleTypes, idx: number) => {
            const { progressName, title, progress, background, level, icon } = tooltip;
            
            return (
              <StackItem
                progressName={progressName}
                title={title}
                progress={progress}
                background={background}
                level={level}
                icon={icon}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default Stacks;