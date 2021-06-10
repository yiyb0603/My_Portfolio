import React, { ReactElement } from 'react';
import { Tooltip as ReactTooltip, withStyles } from '@material-ui/core';
import palette from 'styles/palette';

const LightTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: palette.navbar,
    color: palette.white,
    fontSize: 12,
    marginTop: 4,
  },
}))(ReactTooltip);

interface TooltipProps {
  title: string;
  placement: 'top' | 'left' | 'right' | 'bottom';
  children: ReactElement;
}

const Tooltip = ({
  title,
  placement,
  children,
}: TooltipProps): JSX.Element => {
  return (
    <LightTooltip
      title={title}
      placement={placement}
    >
      {children}
    </LightTooltip>
  );
};

export default Tooltip;