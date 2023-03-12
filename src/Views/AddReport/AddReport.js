import Context from "../../Context/Context";

import { useContext } from "react";
import { useForm } from "react-hook-form";

function AddReport() {
  const { setData } = useContext(Context);

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
      boltCommision,
    } = input;

    bolt *= 1;
    distanceTrip *= 1;
    fuelPrice *= 1;
    AVG *= 1;
    uber *= 1;
    tip *= 1;
    bonusUber *= 1;
    bonusBolt *= 1;
    boltCommision /= 100;

    console.log(
      typeof bolt,
      typeof distanceTrip,
      typeof fuelPrice,
      typeof AVG,
      typeof uber,
      typeof tip,
      typeof bonusBolt,
      typeof bonusUber,
      typeof boltCommision,
      "prowizja bolt",
      boltCommision
    );

    let commision = boltCommision * 1.23;
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
    <article className="flex flex-wrap w-full h- justify-center max-w-3xl	mt-10 text-lg font-bold">
      <h1 className="w-full text-center mb-10 text-lg font-medium">
        Dodaj Raport{" "}
      </h1>

      <form className="flex flex-wrap  " onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mb-16  flex justify-center	">
          <label className="w-60 mx-1 place-self-center		">
            Prowizja Bolt w %
          </label>
          <input
            className=" border-2 rounded-2xl px-4 py-1 border-solid border-black"
            type="number"
            step="0.01"
            {...register("boltCommision")}
          />
        </div>
        <div className="w-full mb-3 flex justify-center	">
          <label className="w-60 mx-1 place-self-center		">
            Zarobek z Bolt'a (brutto)
          </label>
          <input
            className=" border-2 rounded-2xl px-4 py-1 border-solid border-black"
            type="number"
            step="0.01"
            {...register("bolt")}
          />
        </div>
        <div className="w-full mb-3 flex justify-center	">
          <label className="w-60 mx-1 place-self-center	">Zarobek Uber</label>
          <input
            type="number"
            step="0.01"
            className="border-2 rounded-2xl px-4 py-1 border-solid border-black"
            {...register("uber")}
          />
        </div>

        <div className="w-full mb-3 flex justify-center	">
          <label className="w-60 mx-1 place-self-center	">Bonus Bolt</label>
          <input
            type="number"
            step="0.01"
            className="border-2 rounded-2xl px-4 py-1 border-solid border-black"
            {...register("bonusBolt")}
          />
        </div>
        <div className="w-full mb-3 flex justify-center	">
          <label className="w-60 mx-1 place-self-center	">Napiwki Bolt</label>
          <input
            type="number"
            step="0.01"
            className="border-2 rounded-2xl px-4 py-1 border-solid border-black"
            {...register("tip")}
          />
        </div>
        <div className="w-full mb-3 flex justify-center	">
          <label className="w-60 mx-1 place-self-center	">Trasa w km</label>
          <input
            type="number"
            step="0.01"
            className="border-2 rounded-2xl px-4 py-1 border-solid border-black"
            {...register("distanceTrip")}
          />
        </div>
        <div className="w-full mb-3 flex justify-center	">
          <label className="w-60 mx-1 place-self-center	">
            Średnie spalanie L/100km
          </label>
          <input
            type="number"
            step="0.01"
            className="border-2 rounded-2xl px-4 py-1 border-solid border-black"
            {...register("AVG")}
          />
        </div>
        <div className="w-full mb-3 flex justify-center	">
          <label className="w-60 mx-1 place-self-center	">
            Cena Paliwa za litr
          </label>
          <input
            type="number"
            step="0.01"
            className=" rounded-2xl px-4 py-1 border-2 border-solid border-black"
            {...register("fuelPrice")}
          />
        </div>

        <input
          className="bg-emerald-100 w-40 text-center hover:bg-emerald-300 duration-300	 cursor-pointer mx-auto my-10 border-solid border-2 py-1 px-3 rounded-2xl border-black"
          type="submit"
        />
      </form>
    </article>
  );
}

export default AddReport;
