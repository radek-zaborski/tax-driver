import { useContext } from "react";
import Context from "../Context/Context";

export function CalculateCost() {
  const { data, setData } = useContext(Context);

  let { bolt, distanceTrip, fuelPrice, AVG, uber, tip, bonus } = data.input
    ? data.input
    : {
        bolt: 0,
        distanceTrip: 0,
        fuelPrice: 0,
        AVG: 0,
        uber: 0,
        tip: 0,
        bonus: 0,
      };

  const commision = 0.6925;
  // brutto = parseFloat(brutto ? brutto.replace(",", ".") : 0);
  // netto = parseFloat(netto ? netto.replace(",", ".") : 0);
  // bonus = parseFloat(bonus ? bonus.replace(",", ".") : 0);
  // tip = parseFloat(tip ? tip.replace(",", ".") : 0);
  // distanceTrip = parseFloat(distanceTrip ? distanceTrip.replace(",", ".") : 0);
  // fuelPrice = parseFloat(fuelPrice ? fuelPrice.replace(",", ".") : 0);
  // AVG = parseFloat(AVG ? AVG.replace(",", ".") : 0);

  const brutto = parseFloat((bolt * commision).toFixed(2));
  const allBrutto = brutto + tip + bonus;
  const costFuelPerKm =
    (parseFloat(distanceTrip) / 100) * parseFloat(AVG) * parseFloat(fuelPrice);
  const totalProfit = allBrutto - costFuelPerKm;
  console.log("brutto", typeof brutto, brutto);
  console.log("tip", typeof tip, tip);
  console.log("bonus", typeof bonus, bonus);
  console.log("całkowite brutto", typeof allBrutto, allBrutto);
}
