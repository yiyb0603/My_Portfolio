import React, { CSSProperties, useMemo } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { FaFilePdf } from 'react-icons/fa';
import Tooltip from 'components/Common/Tooltip';

const style = require('./FileDownload.scss');
const cx: ClassNamesFn = classNames.bind(style);

interface FileDownloadProps {
  tooltipTitle: string;
  downloadTitle: string;
  fileLink: string;
  backgroundColor: string;
}

const FileDownload = ({
  tooltipTitle,
  downloadTitle,
  fileLink,
  backgroundColor,
}: FileDownloadProps): JSX.Element => {
  const downloadButtonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor,
    };
  }, [backgroundColor]);
  
  return (
    <Tooltip
      title={tooltipTitle}
      placement='bottom'
    >
      <a
        href={fileLink}
        className={cx('FileDownload')}
        style={downloadButtonStyle}
        download={downloadTitle}
      >
        <FaFilePdf className={cx('FileDownload-Icon')} />
        <div>{downloadTitle}</div>
      </a>
    </Tooltip>
  );
};

export default FileDownload;
