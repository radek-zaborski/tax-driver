import Context from "../../Context/Context";

import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function AddReport() {
  const { data, setData } = useContext(Context);

  const { register, handleSubmit } = useForm();
  const onSubmit = (input) => {
    let {
      bolt,
      distanceTrip,
      fuelPrice,
      AVG,
      uber,
      tip,
      bonusUber,
      bonusBolt,
    } = input;

    bolt = bolt * 1;
    distanceTrip = distanceTrip * 1;
    fuelPrice = fuelPrice * 1;
    AVG = AVG * 1;
    uber = uber * 1;
    tip = tip * 1;
    bonusUber = bonusUber * 1;
    bonusBolt = bonusBolt * 1;

    // console.log(
    //   typeof bolt,
    //   typeof distanceTrip,
    //   typeof fuelPrice,
    //   typeof AVG,
    //   typeof uber,
    //   typeof tip,
    //   typeof bonusBolt,
    //   typeof bonusUber
    // );

    let commision = 0.25 * 1.23;
    console.log("commision", commision);
    let boltBrutto = ((bolt - tip - bonusBolt) * commision).toFixed(2);
    console.log(typeof boltBrutto);
    console.log("boltBrutto", boltBrutto);
    let boltNetto = (bolt - boltBrutto).toFixed(2) * 1;
    console.log("boltNetto", typeof boltNetto, boltNetto);
    let priceTrips = (AVG * (distanceTrip / 100) * fuelPrice).toFixed(2) * 1;
    console.log("priceKm:", typeof priceTrips, priceTrips);
    let earnBeforeCommision = (boltNetto + uber).toFixed(2);
    console.log(
      "earnBeforeCommision:",
      typeof earnBeforeCommision,
      earnBeforeCommision
    );
    let earnMinusCommisionPartners = (
      (earnBeforeCommision / 1.08) *
      0.915
    ).toFixed(2);
    console.log(
      "earnMinusCommisionPartners:",
      typeof earnMinusCommisionPartners,
      earnMinusCommisionPartners
    );
    let totalEarn = (earnMinusCommisionPartners - priceTrips).toFixed(2);
    console.log("totalEarn:", typeof totalEarn, totalEarn);
    let costOneKm = (priceTrips / 100).toFixed(2);

    setData({
      totalEarn,
      earnMinusCommisionPartners,
      earnBeforeCommision,
      priceTrips,
      uber,
      boltBrutto,
      distanceTrip,
      costOneKm,
    });
  };

  return (
    <article className="flex flex-wrap w-full justify-center">
      <h1 className="w-full text-center mb-4">Dodaj Raport </h1>
      <form className="flex flex-wrap " onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mb-3 flex">
          <label className="w-60 mx-1">Zarobek z Bolt'a (brutto)</label>
          <input
            className=" border-2 border-solid border-black"
            type="number"
            step="0.01"
            {...register("bolt")}
          />
        </div>
        <div className="w-full mb-3 flex">
          <label className="w-60 mx-1">Zarobek Uber</label>
          <input
            type="number"
            step="0.01"
            className="border-2 border-solid border-black"
            {...register("uber")}
          />
        </div>
        {/* ---- for develop in the future!! ---
        <div className="w-full mb-3 flex">
          <label className="w-60 mx-1">Bonus Uber</label>
          <input
            type="number"
            step="0.01"
            className="border-2 border-solid border-black"
            {...register("bonusUber")}
          />
        </div> */}
        <div className="w-full mb-3 flex">
          <label className="w-60 mx-1">Bonus Bolt</label>
          <input
            type="number"
            step="0.01"
            className="border-2 border-solid border-black"
            {...register("bonusBolt")}
          />
        </div>
        <div className="w-full mb-3 flex">
          <label className="w-60 mx-1">Napiwki Bolt</label>
          <input
            type="number"
            step="0.01"
            className="border-2 border-solid border-black"
            {...register("tip")}
          />
        </div>
        <div className="w-full mb-3 flex">
          <label className="w-60 mx-1">Trasa w km</label>
          <input
            type="number"
            step="0.01"
            className="border-2 border-solid border-black"
            {...register("distanceTrip")}
          />
        </div>
        <div className="w-full mb-3 flex">
          <label className="w-60 mx-1">Średnie spalanie L/100km</label>
          <input
            type="number"
            step="0.01"
            className="border-2 border-solid border-black"
            {...register("AVG")}
          />
        </div>
        <div className="w-full mb-3 flex">
          <label className="w-60 mx-1">Cena Paliwa za litr</label>
          <input
            type="number"
            step="0.01"
            className="border-2 border-solid border-black"
            {...register("fuelPrice")}
          />
        </div>

        <input
          className="hover:bg-slate-300 cursor-pointer mx-auto my-10 border-solid border-2 py-1 px-3 rounded-md border-black"
          type="submit"
        />
      </form>
    </article>
  );
}

export default AddReport;
