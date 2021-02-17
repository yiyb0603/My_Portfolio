import React, { ReactNode } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import NavBar from "components/Common/NavBar";
import Footer from "components/Common/Footer";
import ScrollToTop from "components/Common/ScrollToTop";
import ScrollProgress from "components/Common/ScrollProgress";

const style = require("./PageTemplate.scss");
const cx: ClassNamesFn = classNames.bind(style);

interface IPageTemplateProps {
  children?: ReactNode;
}

const PageTemplate = ({ children }: IPageTemplateProps): JSX.Element => {
  return (
    <div className ={cx('PageTemplate')}>
      <ScrollProgress />
      <ScrollToTop />
      <NavBar />
        <div className ={cx('PageTemplate-Contents')}>
          {children && children}
        </div>
      <Footer />
    </div>
  );
};

export default PageTemplate;
