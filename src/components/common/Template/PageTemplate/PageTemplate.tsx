import React, { ReactNode } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import NavBar from "components/common/NavBar";
import Footer from "components/common/Footer";
import ScrollTop from "components/common/ScrollTop";

const style = require("./PageTemplate.scss");
const cx: ClassNamesFn = classNames.bind(style);

interface IPageTemplateProps {
  children?: ReactNode;
}

const PageTemplate = ({ children }: IPageTemplateProps) => {
  return (
    <div className ={cx('PageTemplate')}>
      <ScrollTop />
      <NavBar />
        <div className ={cx('PageTemplate-Contents')}>
          {children && children}
        </div>
      <Footer />
    </div>
  );
};

export default PageTemplate;
