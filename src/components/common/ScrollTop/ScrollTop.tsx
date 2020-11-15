import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { BsBoxArrowInUp } from 'react-icons/bs';

const style = require('./ScrollTop.scss');
const cx: ClassNamesFn = classNames.bind(style);

const ScrollTop = () => {
	const [isTop, setIsTop] = useState<boolean>(true);

	const detectingScroll = useCallback((): void => {
		if (document.documentElement.scrollTop > 0) {
			setIsTop(false);
		} else {
			setIsTop(true);
		}
	}, []);

	const scrollToTop = useCallback((): void => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', detectingScroll, true);

		return () => {
			window.removeEventListener('scroll', detectingScroll, true);
		};
	}, [detectingScroll]);

	return (
		<>
			{!isTop && (
				<div className={cx('ScrollTop')} onClick={scrollToTop}>
					<BsBoxArrowInUp className={cx('ScrollTop-Icon')} />
				</div>
			)}
		</>
	);
};

export default ScrollTop;