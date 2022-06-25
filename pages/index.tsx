import type { NextPage } from 'next'
import { useContext } from 'react'
import { counterContext } from '../src/counter-context'

const Home: NextPage = () => {
  const [count, setCount] = useContext(counterContext)
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <button onClick={()=>{setCount(count-1)}}>Decrement</button>
      <button onClick={()=>{setCount(count+5)}}>Increment By 5</button>
    </div>
  )
}

export default Home
