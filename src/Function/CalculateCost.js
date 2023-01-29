import { useContext } from "react";
import Context from "../Context/Context";

export function CalculateCost() {
  const { data, setData } = useContext(Context);
  console.log(data);

  let { brutto, distanceTrip, fuelPrice, AVG, netto, tip, bonus } = data.input
    ? data.input
    : {
        brutto: 0,
        distanceTrip: 0,
        fuelPrice: 0,
        AVG: 0,
        netto: 0,
        tip: 0,
        bonus: 0,
      };

  console.log("przed", brutto, distanceTrip, fuelPrice, AVG, netto, tip, bonus);

  // brutto = parseFloat(brutto ? brutto.replace(",", ".") : 0);
  // netto = parseFloat(netto ? netto.replace(",", ".") : 0);
  // bonus = parseFloat(bonus ? bonus.replace(",", ".") : 0);
  // tip = parseFloat(tip ? tip.replace(",", ".") : 0);
  // distanceTrip = parseFloat(distanceTrip ? distanceTrip.replace(",", ".") : 0);
  // fuelPrice = parseFloat(fuelPrice ? fuelPrice.replace(",", ".") : 0);
  // AVG = parseFloat(AVG ? AVG.replace(",", ".") : 0);

  Object.keys(data).map((element) => console.log("tuuuuu", element));
  const allBrutto = (brutto * 0.6925 + tip + netto).toFixed(2);

  const costFuelPerKm = (distanceTrip / 100) * AVG * fuelPrice;
  const totalProfit = allBrutto - costFuelPerKm;
  console.log("koszt paliwa za km", costFuelPerKm);
  console.log("całkowite brutto", allBrutto);

  return console.log("netto");
}
