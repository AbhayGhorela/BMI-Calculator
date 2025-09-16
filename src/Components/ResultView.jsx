import useBmi from "../Context/Context";

const ResultView = () => {
  const { bmiResult, messageCategory } = useBmi();

  let categoryColor = [{
    min: 0,
    max: 18.5,
    color: '#3b82f6',
  },
  {
    min: 18.5,
    max: 25,
    color: '#22c55e',
  },
  {
    min: 25,
    max: 30,
    color: '#facc15',
  },
  {
    min: 30,
    max: 35,
    color: '#ef4444',
  },
  {
    min: 35,
    max: Infinity,
    color: '#9c27b0',
  }]

  const activeColor = categoryColor.find((category)=>
    bmiResult >= category.min && bmiResult < category.max)

  return (
    <div className="bg-white lg:w-5xl md:w-2xl sm:w-140 w-80 h-100 rounded-3xl shadow-xl flex flex-col items-center px-4">
      <h2 className="font-bold text-cyan-950 text-2xl py-5">Result</h2>
      <p className="py-5 font-bold text-7xl text-cyan-950">{bmiResult}</p>
      <p className="flex flex-col items-center gap-3 font-bold text-cyan-950 text-lg py-2">
        Your BMI Category:
        <span style={{color:activeColor?.color}}>
          {messageCategory}
        </span>
      </p>
      <input type="range" min={10} max={40} step={0.1} value={bmiResult} readOnly className="healthBar my-5"/>
    </div>
  );
};
export default ResultView;
