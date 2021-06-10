import { useState, useCallback, useMemo, MouseEvent } from 'react';
import { IHistory, myHistories } from 'data/History';

const useHistoryControl = () => {
  const [selectButton, setSelectButton] = useState<number>(-1);

  const onClickButton = useCallback((e: MouseEvent<HTMLButtonElement>): void => {
    const { id } = e.currentTarget;

    if (selectButton !== Number(id)) {
      setSelectButton(Number(id));
    }
  }, [selectButton]);

  const filterHistory: IHistory[] = useMemo(() => {
    return myHistories.filter((myHistory: IHistory) => {
      return selectButton === -1 ? myHistory : myHistory.type === selectButton;
    });
  }, [selectButton]);

  return {
    selectButton,
    onClickButton,
    filterHistory,
  };
};

export default useHistoryControl;