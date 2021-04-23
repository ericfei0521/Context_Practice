import "./style/App.css";
import NumberBox from './numberbox'
import {createContext, useReducer} from 'react'
import {initialNumber, numberSwitcher} from './reducer/reducer'

export const NumberContext = createContext(initialNumber)
const App = () => {
    const [numberReducer, dispatch] = useReducer(numberSwitcher, initialNumber)
    return (
        <NumberContext.Provider value={{numberReducer, dispatch}}>
            <NumberBox section='S1'/>
            <NumberBox section='S2'/>
            <NumberBox section='S3'/>
            <NumberBox section='S4'/>
        </NumberContext.Provider>
    )
}

export default App
