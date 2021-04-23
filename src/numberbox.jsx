import {useContext} from 'react'
import {NumberContext} from './App'

const NumberBox = ({section}) => {
    const numberlist = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const {numberReducer, dispatch} = useContext(NumberContext)
    const selectNumber = (e) => {
        if(numberReducer[e.target.value] === section){
            dispatch({
                type:"REMOVE_SELECT",
                payload: e.target.value
            })
            return;
        }
        dispatch({
            type: "SELECT_NUMBER",
            payload: {number:e.target.value,section:e.target.name},
        })
    }
    const resetNum = ()=>{
        numberlist.forEach(index=>{
            if(numberReducer[index] === section){
                dispatch({
                    type:"REMOVE_SELECT",
                    payload: index
                })
            }
        })
    }
    return (
        <div className="numbersection">
            <h1>{section}</h1>
            {numberlist.map((number) =>
                <button value={number} onClick={selectNumber}
                        name={section}
                        disabled={numberReducer[number] === section || numberReducer[number] === 0?false:true}
                        style={numberReducer[number] === section ? {backgroundColor: 'red'} : {}}>{number}</button>
            )}
            <button onClick={resetNum}>Reset</button>
        </div>
    );
};
export default NumberBox;
