import { useContext } from "react";
import Context from "../../Context/Context";
function Home() {
  const { data } = useContext(Context);
  const {
    totalEarn,
    earnMinusCommisionPartners,
    earnBeforeCommision,
    priceTrips,
    uber,
    boltBrutto,
    distanceTrip,
    costOneKm,
  } = data;

  return (
    <section className="mt-20 font-medium">
      <header className="my-5 text-lg">
        <h1>Zarobki</h1>
      </header>
      <article className="text-lg">
        <p className="mb-3">Całkowity zarobek brutto: {totalEarn} zł</p>
        <p className="mb-1"> Zysk Uber: {uber} zł</p>
        <p className="mb-3">Zysk Bolt: {boltBrutto} zł</p>
        <p className="mb-3">
          całkowity zysk przed opodatkowaniem: {earnBeforeCommision} zł
        </p>
        <p className="mb-3">
          całkowity zysk po odliczeniu podatków partnera:{" "}
          {earnMinusCommisionPartners} zł
        </p>

        <p className="mb-1">koszt 1km: {costOneKm} zł</p>
        <p className="mb-1">przejechany dystans: {distanceTrip} km</p>
        <p className="mb-1">koszt całego przejazdu: {priceTrips} zł</p>
        <p className=" mt-10 font-bold text-xl">
          Zysk całkowity: {totalEarn} zł
        </p>
      </article>
    </section>
  );
}

export default Home;
