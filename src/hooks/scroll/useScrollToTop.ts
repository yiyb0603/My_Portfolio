import { useState, useCallback, useEffect } from 'react';

const useScrollToTop = () => {
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

  return {
    isTop,
    scrollToTop,
  };
};

export default useScrollToTop;