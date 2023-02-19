import { useContext } from "react";
import Context from "../../Context/Context";
function Home() {
  const { data, setData } = useContext(Context);
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
  console.log("data w home:", data);
  return (
    <section>
      <header className="my-5">
        <h1>Zarobki</h1>
      </header>
      <article>
        <p>Całkowity zarobek brutto {totalEarn} zł</p>
        <p> Zysk Uber: {parseFloat(uber) + parseFloat(boltBrutto)} zł</p>
        <p>Zysk Bolt: {boltBrutto} zł</p>
        <p>całkowity zysk przed opodatkowaniem: {earnBeforeCommision} zł</p>
        <p>
          całkowity zysk po odliczeniu podatków partnera:{" "}
          {earnMinusCommisionPartners} zł
        </p>

        <p>koszt 1km: {costOneKm} zł</p>
        <p>przejechany dystans: {distanceTrip} km</p>
        <p>koszt całego przejazdu: {priceTrips} zł</p>
        <p className=" my-3 font-bold text-xl">
          Zysk całkowity: {totalEarn} zł
        </p>
      </article>
    </section>
  );
}

export default Home;
