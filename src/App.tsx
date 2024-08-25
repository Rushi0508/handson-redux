import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../redux/store'
import Component from './Component'
import { increment, decrement } from '../redux/counter/counterSlice'

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button>{count}</button><br />
        <p><button onClick={() => dispatch(decrement())}>-</button>I am a counter <button onClick={() => dispatch(increment())}>+</button></p>
        <Component />
      </div>
    </>
  )
}

export default App
