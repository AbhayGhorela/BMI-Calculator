import useBmi from "../Context/Context";

const BmiCalculator = () => {
  const { setWeight, weight, setHeight, height } = useBmi();
  return (
    <div>
      <h1 className="text-center font-bold lg:text-7xl md:text-5xl sm:text-3xl text-2xl p-10  text-cyan-950">
        BMI Calculator
      </h1>
      <div className="bg-white lg:w-5xl md:w-2xl sm:w-140 w-80 h-100 rounded-3xl shadow-xl flex flex-col items-center px-4">
        <h2 className="font-bold text-cyan-950 text-2xl py-5">Input</h2>
        <div className="flex justify-between items-center w-full py-6 ">
          <label
            htmlFor="inputHeight"
            className="text-sm font-bold text-gray-400"
          >
            Height(Cm)
          </label>
          <input
            type="number"
            id="inputHeight"
            value={height}
            min={0}
            max={250}
            onChange={(e) => setHeight(e.target.value)}
            className="border-2 outline-none border-gray-300 p-1 w-22"
          />
        </div>

        <input
          type="range"
          min={0}
          max={250}
          defaultValue={height}
          onChange={(e) => setHeight(e.target.value)}
          className="range"
        />

        <div className="flex justify-between items-center w-full py-6 `">
          <label
            htmlFor="inputWeight"
            className="text-sm font-bold text-gray-400"
          >
            Weight(KG)
          </label>
          <input
            type="number"
            id="inputWeight"
            value={weight}
            max={400}
            onChange={(e) => setWeight(e.target.value)}
            className="border-2  outline-none border-gray-300 p-1 w-22"
          />
        </div>
        <input
          type="range"
          min={0}
          max={400}
          defaultValue={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="range"
        />
      </div>
    </div>
  );
};

export default BmiCalculator;
