import { timeToNormalView } from "../function/Time";
type FlyCartWayProps = {
  startTime: { hour: number; minotes: number };
  endTime: { hour: number; minotes: number };
  difference: { hour: number; minotes: number };
  startLocation: string;
  startDate: string;
  endLocation: string;
  endDate: string;
};

export default function FlyCartWay({
  startTime,
  endTime,
  startLocation,
  startDate,
  endLocation,
  endDate,
  difference,
}: FlyCartWayProps) {
  return (
    <div className="fly-cart-way">
      <div className="fly-cart-way__item">
        <h4 className="fly-cart-way__title">
          {timeToNormalView(startTime.hour)}:
          {timeToNormalView(startTime.minotes)}
        </h4>
        <h5 className="fly-cart-way__subtitle">{startLocation}</h5>
        <h6 className="fly-cart-way__date">{startDate}</h6>
      </div>
      <div className="fly-cart-way__path">
        <div className="fly-cart-way__items">
          <div className="fly-cart-way__item">SVO</div>
          <div className="fly-cart-way__item">ROV</div>
        </div>
        <div className="fly-cart-way__linear"> </div>
        <div className="fly-cart-way__text">
          В пути {difference.hour} ч {difference.minotes} мин
        </div>
      </div>
      <div className="fly-cart-way__item">
        <h4 className="fly-cart-way__title">
          {timeToNormalView(endTime.hour)}:{timeToNormalView(endTime.minotes)}
        </h4>
        <h5 className="fly-cart-way__subtitle">{endLocation}</h5>
        <h6 className="fly-cart-way__date">{endDate || startDate}</h6>
      </div>
    </div>
  );
}
