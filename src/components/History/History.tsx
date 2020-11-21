import React, { useCallback, useState, MouseEvent } from "react";
import classNames from 'classnames';
import { ClassNamesFn } from "classnames/types";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IHistoryType, myHistory } from "Data/History";
import { Palette } from "styles/Palette/Palette";

const style = require("./History.scss");
const cx: ClassNamesFn = classNames.bind(style);

const History = () => {
  const { primary, white } = Palette;
  const [selectButton, setSelectButton] = useState<number>(-1);

  const onClickButton = useCallback((e: MouseEvent<HTMLButtonElement>): void => {
    setSelectButton(Number(e.currentTarget.id));
  }, []);

  const filterHistory: IHistoryType[] = myHistory.filter((history: IHistoryType) => {
    return selectButton === -1 ? history : history.type === selectButton;
  });

  return (
    <div className={cx('History')}>
      <div className={cx('History-SelectZone')}>
        <button id="-1" onClick={onClickButton}
          className={cx({
            'History-SelectZone-Selected': selectButton === -1
        })}>전체</button>

        <button id="0" onClick={onClickButton} className={cx({
            'History-SelectZone-Selected': selectButton === 0
        })}>수상</button>

        <button id="1" onClick={onClickButton} className={cx({
            'History-SelectZone-Selected': selectButton === 1
        })}>활동</button>

        <button id="2" onClick={onClickButton} className={cx({
            'History-SelectZone-Selected': selectButton === 2
        })}>전공 활동</button>
      </div>

      <VerticalTimeline>
        {
          filterHistory.map((history: IHistoryType, index: number) => {
            const { name, date, icon } = history;

            return (
              <VerticalTimelineElement
                key={index}
                contentStyle={{ background: primary, color: white }}
                className="vertical-timeline-element--education"
                date={date}
                iconStyle={{ background: primary }}
                icon={icon({ color: white })}
              >
                <h3 className="vertical-timeline-element-title">{date}</h3>
                <p>
                  {name}
                </p>
              </VerticalTimelineElement>
            );
          })
        }
      </VerticalTimeline>
    </div>
  );
};

export default History;
