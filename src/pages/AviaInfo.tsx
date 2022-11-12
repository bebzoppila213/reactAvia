import FlyCart from "../components/FlyCart";
import { useAppSelector } from "../hooks/redux";

export default function AviaInfo() {
  const avia = useAppSelector((state) => state.avia);

  return (
    <section className="avia-info">
      <div className="container">
        <div className="avia-info__inner">
          <div className="cart-list">
            <FlyCart
              endLocation={avia.aviaData.endLocation}
              startLocation={avia.aviaData.startLocation}
              endDate={avia.aviaData.endDate}
              startDate={avia.aviaData.startDate}
            ></FlyCart>
            {avia.aviaData.endDate ? (
              <FlyCart
                endLocation={avia.aviaData.startLocation}
                startLocation={avia.aviaData.endLocation}
                endDate={avia.aviaData.endDate}
                startDate={avia.aviaData.endDate}
              ></FlyCart>
            ) : (
              ""
            )}
          </div>
          <div className="cart-price">
            <h2 className="cart-price__title">{avia.price} ₽</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
