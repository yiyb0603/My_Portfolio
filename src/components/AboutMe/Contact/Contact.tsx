import React, { CSSProperties } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import Constants from "util/Constants";
import { AiFillFacebook, AiFillMail, AiFillRocket } from 'react-icons/ai';

const style = require("./Contact.scss");
const cx: ClassNamesFn = classNames.bind(style);

const Contact = () => {
  const { PHONE_NUMBER, EMAIL_ADDRESS, FACEBOOK_ADDRESS, ROCKET_ADDRESS } = Constants;

  const iconStyle: CSSProperties = {
    fontSize: 25,
    marginRight: 4,
    marginTop: 3,
  }

  return (
    <div className={cx('Contact')}>
      <div>
        <div className={cx('Contact-Title')}>연락처</div>

        <div className={cx('Contact-Contents')}>
          <div>전화번호: {PHONE_NUMBER}</div>
          <div>이메일: {EMAIL_ADDRESS}</div>
        </div>
      </div>

      <div className={cx('Contact-Buttons')}>
        <a className={cx('Contact-Buttons-Facebook')} href={FACEBOOK_ADDRESS} target="_blank" rel="noopener noreferrer">
          <AiFillFacebook style={iconStyle} />
          <div>Facebook</div>
        </a>

        <a className={cx('Contact-Buttons-Gmail')} href={"mailto:" + EMAIL_ADDRESS} target="_blank" rel="noopener noreferrer">
          <AiFillMail style={iconStyle} />
          <div>Gmail</div>
        </a>

        <a className={cx('Contact-Buttons-RocketPunch')} href={ROCKET_ADDRESS} target="_blank" rel="noopener noreferrer">
          <AiFillRocket style={iconStyle} />
          <div>Rocket Punch</div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
