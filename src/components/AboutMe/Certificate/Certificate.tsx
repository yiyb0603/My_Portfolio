import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { FaRegIdBadge } from 'react-icons/fa';
import { certificates, ICertificate } from 'data/Certificate';
import SectionTitle from '../SectionTitle';

const style = require('./Certificate.scss');
const cx: ClassNamesFn = classNames.bind(style);

const Certificate = (): JSX.Element => {
  return (
    <div className={cx('Certificate')}>
      <SectionTitle name='자격증' icon={<FaRegIdBadge />} />

      {
        certificates.map((certificate: ICertificate, idx: number) => {
          const { name, color, certifiedAt } = certificate;

          const colorBar: CSSProperties = {
            width: 5,
            height: 20,
            backgroundColor: color,
            marginRight: 6,
          };

          return (
            <div className={cx('Certificate-CertifiWrap')} key={idx}>
              <div className={cx('Certificate-CertifiWrap-Left')}>
                <div style={colorBar}></div>
                <div>{name}</div>
              </div>

              <div className={cx('Certificate-CertifiWrap-Date')}>{certifiedAt}</div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Certificate;
