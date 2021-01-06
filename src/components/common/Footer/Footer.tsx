import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';

const style = require('./Footer.scss');
const cx: ClassNamesFn = classNames.bind(style);

const Footer = (): JSX.Element => {
    return (
        <div className ={cx("Footer")}>@Copyright yiyb0603. All rights reserved. Since 2020</div>
    );
}

export default Footer;