import React, { CSSProperties, useMemo } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

const ProgressLoading = (): JSX.Element => {
  const customProgressStyle: CSSProperties = useMemo(() => {
    return {
      position: 'fixed',
      top: '70px',
      left: 0,
      right: 0,
    };
  }, []);

  return (
    <LinearProgress
      style={customProgressStyle}
    />
  );
}

export default ProgressLoading;