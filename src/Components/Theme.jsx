import { CgDarkMode } from "react-icons/cg";
import useBmi from "../Context/Context";

const Theme = () => {
  const { themeMode, darkTheme, lightTheme } = useBmi();
  const handleTheme = (e) => {
    const checkDarkStatus = e.currentTarget.checked;
    if (checkDarkStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <div className="w-full self-end flex justify-end p-3">
      <label className="inline-flex items-center cursor-pointer">
        <CgDarkMode className="mx-2 text-xl dark:text-white"/>
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={handleTheme}
          checked={themeMode === "dark"}
        />
        <div className="relative w-11 h-6 bg-gray-200   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-600 dark:peer-checked:bg-emerald-600"></div>
      </label>
    </div>
  );
};

export default Theme;
