import Context from "../../Context/Context";

import { useContext } from "react";
import { useForm } from "react-hook-form";

function AddReport() {
  const { setData } = useContext(Context);

  const { register, handleSubmit } = useForm();
  const onSubmit = (input) => {
    setData(input);
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
          <label className="w-60 mx-1">Zarobek Uber (netto)</label>
          <input
            type="number"
            step="0.01"
            className="border-2 border-solid border-black"
            {...register("uber")}
          />
        </div>
        <div className="w-full mb-3 flex">
          <label className="w-60 mx-1">Bonus</label>
          <input
            className="border-2 border-solid border-black"
            {...register("bonus")}
          />
        </div>
        <div className="w-full mb-3 flex">
          <label className="w-60 mx-1">Napiwki</label>
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
