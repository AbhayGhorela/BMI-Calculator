import { createContext, useContext } from "react";

export const bmiContext = createContext({
    weight:0,
    height:0,
    bmiResult:'',
    messageCategory:'',
    calculateBMI:()=>{},
    themeMode:'light',
    darkTheme:()=>{},
    lightTheme:()=>{}

});

export const BmiProvider = bmiContext.Provider;

export default function useBmi(){
    return useContext(bmiContext)
}