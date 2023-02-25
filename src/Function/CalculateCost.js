import { useContext, useEffect } from "react";
import Context from "../Context/Context";

export function CalculateCost() {
  const { data, setData } = useContext(Context);
  const { calculate, setCalculate } = useContext(Context);

  let { bolt, distanceTrip, fuelPrice, AVG, uber, tip, bonus } = data;

  const commision = 0.6925;

  const brutto = (bolt * commision).toFixed(2);
  const allBrutto = brutto + tip + bonus;
  const costFuelPerKm = (distanceTrip / 100) * AVG * fuelPrice;
  const totalProfit = (allBrutto - costFuelPerKm) | 0;

  console.log("tu", brutto, allBrutto, costFuelPerKm, totalProfit, uber);

  console.log("sprawdź tu", data);

  return { brutto, allBrutto, costFuelPerKm, totalProfit, uber };
}
