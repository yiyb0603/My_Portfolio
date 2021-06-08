import { IHistory, myHistory } from 'data/History';
import { useState, useCallback, useMemo, MouseEvent } from 'react';

const useHistoryControl = () => {
  const [selectButton, setSelectButton] = useState<number>(-1);

  const onClickButton = useCallback((e: MouseEvent<HTMLButtonElement>): void => {
    const { id } = e.currentTarget;

    if (selectButton !== Number(id)) {
      setSelectButton(Number(id));
    }
  }, [selectButton]);

  const filterHistory: IHistory[] = useMemo(() => {
    return myHistory.filter((history: IHistory) => {
      return selectButton === -1 ? history : history.type === selectButton;
    });
  }, [selectButton]);

  return {
    selectButton,
    onClickButton,
    filterHistory,
  };
};

export default useHistoryControl;