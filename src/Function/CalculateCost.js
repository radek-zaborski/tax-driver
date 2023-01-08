import { useContext } from "react";
import Context from "../Context/Context";

export function CalculateCost() {
  const { data } = useContext(Context);
  console.log(data);
  const { brutto, distanceTrip, fuelPrice, AVG, netto } = data.report
    ? data.report
    : {};

  return <div></div>;
}
