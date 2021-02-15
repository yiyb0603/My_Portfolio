import React, { CSSProperties } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import { FaBlog } from 'react-icons/fa';
import { AiFillFacebook, AiFillMail, AiFillRocket } from 'react-icons/ai';
import { MdCallEnd } from 'react-icons/md';
import Constants from "util/Constants";

const style = require("./Contact.scss");
const cx: ClassNamesFn = classNames.bind(style);

const Contact = (): JSX.Element => {
  const { PHONE_NUMBER, EMAIL_ADDRESS, FACEBOOK_ADDRESS, BLOG_ADDRESS, ROCKET_ADDRESS } = Constants;

  const iconStyle: CSSProperties = {
    fontSize: 25,
    marginRight: 4,
    marginTop: 2,
  }

  return (
    <div className={cx('Contact')}>
      <div>
        <div className={cx('Contact-Title')}>
          <MdCallEnd className={cx('Contact-Title-Icon')} />
          <div>연락처</div>
        </div>

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
        
        <a className={cx('Contact-Buttons-Blog')} href={BLOG_ADDRESS} target="_blank" rel="noopener noreferrer">
          <FaBlog style={iconStyle} />
          <div>Velog</div>
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
