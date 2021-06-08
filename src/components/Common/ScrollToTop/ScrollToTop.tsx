import React from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { BsBoxArrowInUp } from 'react-icons/bs';
import useScrollToTop from 'hooks/scroll/useScrollToTop';

const style = require('./ScrollToTop.scss');
const cx: ClassNamesFn = classNames.bind(style);

const ScrollToTop = (): JSX.Element => {
	const { isTop, scrollToTop } = useScrollToTop();

	return (
		<>
			{!isTop && (
				<div className={cx('ScrollToTop')} onClick={scrollToTop}>
					<BsBoxArrowInUp className={cx('ScrollToTop-Icon')} />
				</div>
			)}
		</>
	);
};

export default ScrollToTop;