import { ReactElement, useState } from "react";
import { useSelector } from "react-redux";

const Select = (): ReactElement => {
    interface currencyDataInterface {
        data: {
          data: object
        }
      }
    const currencyData = useSelector((state: currencyDataInterface): {data: object} => {
        return state
      })  
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