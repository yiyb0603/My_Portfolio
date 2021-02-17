import React, { ReactNode, Fragment, CSSProperties } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { withStyles, Theme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { ITooltipTitleTypes, tooltipTitles } from 'data/TooltipTitles';
import Typography from '@material-ui/core/Typography';

const style = require('./StackItem.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface StackItemProps {
  progressName: string;
  children?: ReactNode;
}

const HtmlTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    minWidth: 100,
    fontSize: theme.typography.pxToRem(14),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

const StackItem = ({ progressName, children }: StackItemProps): JSX.Element => {
  const tooltipTitle: ITooltipTitleTypes | undefined = tooltipTitles.find((tooltip: ITooltipTitleTypes) => {
    return tooltip.progressName === progressName;
  });

  const progressStyle: CSSProperties = {
    width: tooltipTitle?.progress,
    backgroundColor: tooltipTitle?.background,
  };

  return (
    <HtmlTooltip
      title={
        <Fragment>
          <Typography color='inherit'>{tooltipTitle?.progressName}</Typography>
          <div>{tooltipTitle?.title}</div>
        </Fragment>
      }
      placement='bottom-start'
    >
      <div className={cx('StackItem-Wrapper')}>
        <div className={cx('StackItem-Wrapper-Icon')}>
          {children && children}
        </div>

        <div className={cx('StackItem-Wrapper-ProgressWrapper')}>
          <div
            className={cx(`StackItem-Wrapper-ProgressWrapper-${progressName}Bar`)}
            style={progressStyle}
          ></div>
        </div>
      </div>
    </HtmlTooltip>
  );
};

export default StackItem;
