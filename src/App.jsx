import { useEffect, useState } from "react";
import BmiCalculator from "./Components/BmiCalculator";
import Container from "./Components/Container";
import { BmiProvider } from "./Context/Context";
import CalculateBtn from "./Components/CalculateBtn";
import ResultView from "./Components/ResultView";
import Theme from "./Components/Theme";

const App = () => {

  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmiResult,setBmiResult] = useState(0);
  const [messageCategory,setMessageCategory] = useState('');
  const [themeMode,setThemeMode] = useState('light');

  const darkTheme = ()=>{
    setThemeMode('dark');
  }

  const lightTheme = ()=>{
    setThemeMode('light');
  }

  const calculateBMI=()=>{
    let bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(1)
    setBmiResult(bmi);
    if(bmi < 18.5){
      setMessageCategory('Underweight');
    }else if(bmi >= 18.5 && bmi <= 24.9){
      setMessageCategory('Normal Weight');
    }else if(bmiResult >= 25.0 && bmi <= 29.9){
      setMessageCategory('Overweight');
    }else if(bmi >= 30.0 && bmi <= 34.9){
      setMessageCategory('Obesity (Class I)');
    }else if(bmi >= 35.0 && bmi <= 39.9){
      setMessageCategory('Obesity (Class II)');
    }else{
      setMessageCategory('Obesity (Class III / Severe obesity)');
    }
  }

  useEffect(()=>{
    const html = document.querySelector('html');
    html.classList.remove('light','dark')
    html.classList.add(themeMode)
  },[themeMode])


  return (
    <BmiProvider value={{weight,setWeight,height,setHeight,bmiResult,setBmiResult,messageCategory,setMessageCategory,calculateBMI,themeMode,setThemeMode,darkTheme,lightTheme}}>
      <Container>
        <Theme/>
        <BmiCalculator/>
        <CalculateBtn/>
        <ResultView/>
      </Container>
    </BmiProvider>
  );
};

export default App;
