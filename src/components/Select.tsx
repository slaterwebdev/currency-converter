import { ReactElement, useState } from "react";
import { useSelector } from "react-redux";

//Select field component
const Select = (): ReactElement => {
    interface currencyDataInterface {
        data: {
          data: object
        }
    }
    //Grabbing currency data from the redux store
    const currencyData = useSelector((state: currencyDataInterface): {data: object} => {
        return state
      })  
    //store user inputted currency exchange type from select field
    const [selectVal, setSelectVal] = useState('') ;

    return (
        <select 
        name="currencyExchangeType" 
        onChange={(e) => {setSelectVal(e.target.value)}} 
        value={selectVal}
      >
        {currencyData.data && Object.keys(currencyData.data).map((data, key) => {
          return <option value={data} key={key}>{data}</option>
        })}
      </select>
    );
  }
  
  export default Select