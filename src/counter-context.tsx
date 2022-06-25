import { createContext, ReactNode, useState } from "react";

type initialState = [number, (arg: number)=> void]

export const counterContext = createContext<initialState>([0, (arg:number) => {}])

interface props {
    children: ReactNode
}
export const CounterProvider = ({children}: props) => {
    const [count, countSetter] = useState(0)
    const setCount = (arg: number)=> {
        countSetter(arg)
    }
    return (
        <counterContext.Provider value={[count, setCount]}>
            {children}
        </counterContext.Provider>
    )
}
