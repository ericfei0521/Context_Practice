import "./App.css";
import NumberBox from './numberbox'
import {createContext,useReducer} from 'react'
import {initialNumber,numberSwitcher } from './reducer'

export const NumberContext = createContext(initialNumber)
const App = () => {
  const [numberReducer,dispatch] = useReducer(numberSwitcher,initialNumber)
  return (
    <NumberContext.Provider value={{numberReducer,dispatch}}>
      <NumberBox section='s1'/>
      {/* <div>{numberReducer[0]}</div> */}
    </NumberContext.Provider>
  )
}

export default App
