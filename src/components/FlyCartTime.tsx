import { timeToNormalView } from "../function/Time";
import { isEqual } from "lodash";
export type TimeItemType = {
  hour: number;
  minotes: number;
};

export type TimesType = {
  startTime: TimeItemType;
  endTime: TimeItemType;
};

type FlyCartTimeProps = {
  allTimes: TimesType[];
  activeTime: TimesType;
  updateTime: (start: TimeItemType, end: TimeItemType) => void;
};

export default function FlyCartTime({
  allTimes,
  updateTime,
  activeTime,
}: FlyCartTimeProps) {
  return (
    <div className="fly-cart-time">
      {allTimes.map((time) => (
        <div
          role="button"
          onClick={() => updateTime(time.startTime, time.endTime)}
          className={
            "fly-cart-time__btn" +
            (isEqual(time, activeTime) ? " fly-cart-time__btn--active" : " ")
          }
        >
          <strong className="fly-cart-time__btn--strong">
            {timeToNormalView(time.startTime.hour)}:
            {timeToNormalView(time.startTime.minotes)}
          </strong>{" "}
          - {timeToNormalView(time.endTime.hour)}:
          {timeToNormalView(time.endTime.minotes)}
        </div>
      ))}
    </div>
  );
}
