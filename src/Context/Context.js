import { createContext, useContext } from "react";

export const bmiContext = createContext({
    weight:0,
    height:0,
    bmiResult:'',
    messageCategory:'',
    calculateBMI:()=>{}

});

export const BmiProvider = bmiContext.Provider;

export default function useBmi(){
    return useContext(bmiContext)
}