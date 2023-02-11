import { useContext, useState } from "react";
import Context from "../Context/Context";

export function CalculateCost() {
  const { data, setData } = useContext(Context);
  const { calculate, setCalculate } = useContext(Context);

  let { bolt, distanceTrip, fuelPrice, AVG, uber, tip, bonus } = data
    ? data
    : {
        bolt: 0,
        distanceTrip: 0,
        fuelPrice: 0,
        AVG: 0,
        uber: 0,
        tip: 0,
        bonus: 0,
      };
  console.log("data", data);
  console.log("bolec", typeof bolt, bolt);
  const commision = 0.6925;

  const brutto = (bolt * commision).toFixed(2);
  const allBrutto = brutto + tip + bonus;
  const costFuelPerKm = (distanceTrip / 100) * AVG * fuelPrice;
  const totalProfit = allBrutto - costFuelPerKm;

  console.log("calculate", calculate);
  console.log("brutto", typeof brutto, brutto);
  console.log("tip", typeof tip, tip);
  console.log("bonus", typeof bonus, bonus);
  console.log("całkowite brutto", typeof allBrutto, allBrutto);

  return { brutto, allBrutto, costFuelPerKm, totalProfit, uber };
}
