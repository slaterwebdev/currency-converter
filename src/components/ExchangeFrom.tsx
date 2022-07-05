import { ReactElement, useState } from "react";
import Select from "./Select";

const ExchangeFrom = (): ReactElement => {
  //storing input field value in state to pass back in to variable and then redux store in form submit event 
  const [inputVal, setInputVal] = useState<string>('') ;

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