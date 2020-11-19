import React, { ReactNode, Fragment } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import { withStyles, Theme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { ITooltipTitleTypes, tooltipTitles } from "Data/TooltipTitles";
import Typography from '@material-ui/core/Typography';

const style = require("./StackItem.scss");
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

const StackItem = ({ progressName, children }: StackItemProps) => {
  const tooltipTitle: ITooltipTitleTypes | undefined = tooltipTitles.find((tooltip: ITooltipTitleTypes) => tooltip.progressName === progressName);

  return (
    <HtmlTooltip
      title={
        <Fragment>
          <Typography color="inherit">{tooltipTitle?.progressName}</Typography>
          <div>{tooltipTitle?.title}</div>
        </Fragment>
      }
      placement="bottom-start"
    >
      <div className={cx('StackItem-Wrapper')}>
        <div className={cx('StackItem-Wrapper-Icon')}>
          {children && children}
        </div>

        <div className={cx('StackItem-Wrapper-ProgressWrapper')}>
          <div className={cx(`StackItem-Wrapper-ProgressWrapper-${progressName}Bar`)}></div>
        </div>
      </div>
    </HtmlTooltip>
  );
};

export default StackItem;
