import { ReactElement, useState } from "react";
import Select from "./Select";

const ExchangeFrom = (): ReactElement => {
  //storing input field value in state to pass back in the respective fields value prop which can then be picked in the submit event and sent to the redux store
  const [inputVal, setInputVal] = useState('') ;

return (
    <div>
        <label >From: </label>
          <input 
            name="currencyAmountInput"
            value={inputVal}
            onChange={(e) => {
              setInputVal(e.target.value)
            }}
          />
          <Select />
    </div>
);
  }
  
  export default ExchangeFrom