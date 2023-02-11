import { CalculateCost } from "../../Function/CalculateCost";

function Home() {
  const cost = CalculateCost();
  const { brutto, allBrutto, costFuelPerKm, totalProfit, uber } = cost;

  return (
    <section>
      <header className="my-5">
        <h1>Zarobki</h1>
      </header>
      <article>
        <p> Zysk Uber: {uber}</p>
        <p>Zysk Bolt: {brutto}</p>
        <p>koszt 1km: {costFuelPerKm}</p>
        <p className=" my-3 font-bold text-xl">Zysk całkowity: {totalProfit}</p>
      </article>
    </section>
  );
}

export default Home;
