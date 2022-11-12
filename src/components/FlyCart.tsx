import Logo from "../assets/images/logo.png";
import Baggage from "../assets/images/baga.png";
import useTime from "../hooks/useTime";
import FlyCartTime, { TimesType } from "../components/FlyCartTime";
import FlyCartWay from "./FlyCartWay";

const allTimes: TimesType[] = [
  { startTime: { hour: 9, minotes: 20 }, endTime: { hour: 11, minotes: 5 } },
  { startTime: { hour: 10, minotes: 43 }, endTime: { hour: 12, minotes: 16 } },
  { startTime: { hour: 11, minotes: 22 }, endTime: { hour: 13, minotes: 14 } },
];

type FlyCartProps = {
  startLocation: string;
  endLocation: string;
  startDate: string;
  endDate: string;
};

export default function FlyCart({
  startLocation,
  endLocation,
  startDate,
  endDate,
}: FlyCartProps) {
  const { time, difference, updateTime } = useTime(
    allTimes[0].startTime,
    allTimes[0].endTime
  );

  return (
    <div className="fly-cart">
      <div className="fly-cart__help">Невозвратный</div>
      <div className="fly-cart__info">
        <img src={Logo} alt="Логитип" />
        <h3 className="fly-cart__subtitle">S7 Airlines</h3>
      </div>
      <div className="fly-cart-main">
        <FlyCartWay
          startDate={startDate}
          endDate={endDate}
          endLocation={endLocation}
          startLocation={startLocation}
          difference={difference}
          endTime={time.endTime}
          startTime={time.startTime}
        ></FlyCartWay>
        {endDate ? (
          ""
        ) : (
          <FlyCartTime
            updateTime={updateTime}
            activeTime={time}
            allTimes={allTimes}
          ></FlyCartTime>
        )}

        <div className="fly-cart-images">
          <img src={Baggage} alt="Багаж" />
        </div>
      </div>
    </div>
  );
}
