import React, { useCallback } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import { MdCallEnd } from 'react-icons/md';
import Constants from "util/Constants";
import contactList, { IContactListType } from "data/models/contactList";
import SectionTitle from "../SectionTitle";
import { Palette } from "styles/Palette/Palette";

const style = require("./Contact.scss");
const cx: ClassNamesFn = classNames.bind(style);

const Contact = (): JSX.Element => {
  const { PHONE_NUMBER, EMAIL_ADDRESS } = Constants;

  const handleIconClick = useCallback((url: string): void => {
    window.open(url, '_blank');
  }, []);

  return (
    <div className={cx('Contact')}>
      <div className={cx('Contact-Wrapper')}>
        <SectionTitle
          name='연락처'
          icon={<MdCallEnd style={{ color: Palette.red }} />}
        />

        <div className={cx('Contact-Contents')}>
          <div className={cx('Contact-Contents-TextWrap')}>
            <div>전화번호: {PHONE_NUMBER}</div>
            <div>이메일: {EMAIL_ADDRESS}</div>
          </div>

          <div className={cx('Contact-Contents-Icons')}>
            {
              contactList.map(({ name, link, logo }: IContactListType, idx: number) => (
                <img
                  key={idx}
                  src={logo}
                  className={cx('Contact-Contents-Icons-Icon')}
                  title={name}
                  alt={name}
                  onClick={() => handleIconClick(link)}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
