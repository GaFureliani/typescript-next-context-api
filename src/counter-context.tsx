import { createContext, ReactNode, useState } from "react";

export const counterContext = createContext<[number, (arg: number)=> void]>([0, (arg:number) => {}])

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
