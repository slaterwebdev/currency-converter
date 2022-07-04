import { ReactElement } from "react";
import { useSelector } from "react-redux";
import Select from "./Select";

const ExchangeTo= (): ReactElement => {
  //Calling user inputted data from the redux store to pass in to the currencyConverted() function
  interface currencyDataInterface {
    data: any, 
    currencyAmount: number, 
    exchangeFrom: number, 
    exchangeTo: number
  }
  const currencyData = useSelector((state: currencyDataInterface): any => {
    return state
  })  

  //Converting the currency using the user inputted data
  const currencyConverted = (): number => {
    let convertedAmount: number = 0;
    if(currencyData.data) {
      if(currencyData.data[currencyData.exchangeFrom] && currencyData.data[currencyData.exchangeTo]){
        //converted amount = currency amount * (starting currency exchange rate / ending currency exchange rate)
        convertedAmount = (Number(currencyData.currencyAmount) * (currencyData.data[currencyData.exchangeTo].rate / currencyData.data[currencyData.exchangeFrom].rate));
      }
    }
    return convertedAmount
  }

return (
    <div>
        <label>To: </label>
        <input 
          name="currencyAmountOutput"
          type="number" 
          readOnly
          value={currencyConverted().toFixed(2)}
        />
        <Select />
    </div>
    );
}
  
  export default ExchangeTo