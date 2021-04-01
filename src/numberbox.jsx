import{useContext} from 'react'
import {NumberContext} from './App'

const NumberBox = ({section}) => {
  const number = ['0','1','2','3','4','5','6','7','8','9']
  const {numberReducer,dispatch}= useContext(NumberContext)
  const selectNumber = ()=>{
    dispatch({
      type:"SELECT_NUMBER"
    })
  }
  return (
    <div className="numbersection">
      <h1>{section}</h1>
      <h2>{numberReducer[0]}</h2>
      {number.map((number) =>
      <button value={number} onClick={selectNumber}>{number}</button>
      )}
    </div>
  );
};
export default NumberBox;
