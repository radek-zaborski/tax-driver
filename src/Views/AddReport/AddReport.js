import Context from "../../Context/Context";

import { useContext } from "react";
import { useForm } from "react-hook-form";

function AddReport() {
  const { setData } = useContext(Context);

  const { register, handleSubmit } = useForm();
  const onSubmit = (input) => {
    setData({ input });
  };

  return (
    <article className="flex flex-wrap w-full justify-center">
      <h1 className="w-full text-center mb-4">Dodaj Raport </h1>
      <form className="flex flex-wrap " onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full mb-3 flex">
          <label className="w-60 mx-1">Zarobek z Bolt'a (brutto)</label>
          <input
            className=" border-2 border-solid border-black"
            {...register(
              "bolt",
              {
                validate: (numberInput) =>
                  console.log("w funkcji", typeof parseInt(numberInput)),
              },
              {
                required: true,
              }
            )}
          />
        </div>
        <div className="w-full mb-3 flex">
          <label className="w-60 mx-1">Zarobek Uber (netto)</label>
          <input
            className="border-2 border-solid border-black"
            {...register("uber", { required: true }, { valueAsNumber: true })}
          />
        </div>
        <div className="w-full mb-3 flex">
          <label className="w-60 mx-1">Bonus</label>
          <input
            className="border-2 border-solid border-black"
            {...register("bonus", { required: true }, { valueAsNumber: true })}
          />
        </div>
        <div className="w-full mb-3 flex">
          <label className="w-60 mx-1">Napiwki</label>
          <input
            className="border-2 border-solid border-black"
            {...register("tip", { required: true }, { valueAsNumber: true })}
          />
        </div>
        <div className="w-full mb-3 flex">
          <label className="w-60 mx-1">Trasa w km</label>
          <input
            className="border-2 border-solid border-black"
            {...register(
              "distanceTrip",
              { required: true },
              { valueAsNumber: true }
            )}
          />
        </div>
        <div className="w-full mb-3 flex">
          <label className="w-60 mx-1">Średnie spalanie L/100km</label>
          <input
            className="border-2 border-solid border-black"
            {...register("AVG", { required: true }, { valueAsNumber: true })}
          />
        </div>
        <div className="w-full mb-3 flex">
          <label className="w-60 mx-1">Cena Paliwa za litr</label>
          <input
            className="border-2 border-solid border-black"
            {...register(
              "fuelPrice",
              { required: true },
              { valueAsNumber: true }
            )}
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
