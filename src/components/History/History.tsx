import React, { memo } from 'react';
import classNames from 'classnames';
import { ClassNamesFn } from 'classnames/types';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import useHistoryControl from 'hooks/history/useHistoryControl';
import { IHistory } from 'data/History';
import historyTopics from 'data/models/historyTopics';
import palette from 'styles/palette';
import PageTitle from 'components/Common/PageTitle';

import 'react-vertical-timeline-component/style.min.css';

const style = require('./History.scss');
const cx: ClassNamesFn = classNames.bind(style);

const History = (): JSX.Element => {
  const {
    selectButton,
    onClickButton,
    filterHistory,
  } = useHistoryControl();

  return (
    <div className={cx('History')}>
      <div className={cx('History-Top')}>
        <PageTitle
          title='활동 목록'
          subTitle='제가 지금까지 활동해온 목록입니다.'
        />
        <div className={cx('History-Top-SelectZone')}>
          {
            historyTopics.map((topic: string, idx: number) => {
              return (
                <button
                  id={(idx - 1).toString()}
                  key={idx}
                  className={cx({
                    'History-Top-SelectZone-Selected': selectButton === (idx - 1),
                  })}
                  onClick={onClickButton}
                >
                  {topic}
                </button>
              );
            })
          }
        </div>
      </div>

      <VerticalTimeline>
        {
          filterHistory.map((history: IHistory, index: number) => {
            const { name, date, icon } = history;

            return (
              <VerticalTimelineElement
                key={index}
                contentStyle={{ backgroundColor: palette.blue, color: palette.white }}
                className='vertical-timeline-element--education'
                date={date}
                iconStyle={{ backgroundColor: palette.blue }}
                icon={icon({ color: palette.white })}
              >
                <h3 className='vertical-timeline-element-title'>{date}</h3>
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

export default memo(History);