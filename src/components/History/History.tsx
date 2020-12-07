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
  const { blue, white } = Palette;
  const topics: string[] = ['전체', '수상', '활동', '대회', '컨퍼런스'];
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
        {
          topics.map((topic: string, idx: number) => {
            console.log(idx - 1);
            return (
              <button
                id={(idx - 1).toString()}
                key={idx}
                onClick={onClickButton}
                className={cx({ 'History-SelectZone-Selected': selectButton === (idx - 1) })}
              >{topic}</button>
            );
          })
        }
      </div>

      <VerticalTimeline>
        {
          filterHistory.map((history: IHistoryType, index: number) => {
            const { name, date, icon } = history;

            return (
              <VerticalTimelineElement
                key={index}
                contentStyle={{ backgroundColor: blue, color: white }}
                className="vertical-timeline-element--education"
                date={date}
                iconStyle={{ backgroundColor: blue }}
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