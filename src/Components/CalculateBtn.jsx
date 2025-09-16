import useBmi from "../Context/Context";

const CalculateBtn = () => {
    const {calculateBMI} = useBmi()
  return (
    <button onClick={calculateBMI} className="bg-linear-to-r from-cyan-400 to-emerald-400 text-white font-bold my-14 py-4 px-15 rounded-4xl text-2xl text-shadow-2xs shadow-xs cursor-pointer">
      Calculate BMI
    </button>
  );
};

export default CalculateBtn;
