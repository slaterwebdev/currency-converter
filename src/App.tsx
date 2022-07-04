import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { displayData, currencyAmount, exchangeFrom, exchangeTo } from "./actions/actions";
import Button from "./components/Button";
import InputWrapper from "./components/InputWrapper";
import ExchangeFrom from "./components/ExchangeFrom";
import ExchangeTo from "./components/ExchangeTo";

function App() {
  //Setting up UI display failsafe variables for conditional rendering incase data does not fetch
  const [displayContent, setDisplayContent] = useState<boolean | object>(false);
  const [dataError, setDataError] = useState<boolean>(false)

  //Setting up redux store dispatch variable
  const dispatch = useDispatch();

  //Async function fires on initial rendering and retrieves api data
  useEffect(() => {
    setDataError(false)
    setDisplayContent(true)
    const request = async (url: string) => {
      const fetchData = await fetch(url);
      const res = await fetchData.json();
      dispatch(displayData(res))
    }
    request('http://www.floatrates.com/daily/gbp.json')
    .catch((err) => {
      console.log(err)
      setDataError(true)
      setDisplayContent(false)
    })
  },[])

  //Variable for conditional rendering of error message
  const [regexPatternFail, setRegexPatternFail] = useState<null | boolean>(null);
  const [regexTextDetected, setRegexTextDetected] = useState<null | boolean>(null);

  //form submission - sending user inputted data to redux store
  const formSubmit = (e: any) => {
    e.preventDefault()

    //Regex patterns
    const currencyRegexOne = /^[0-9]+\.[0-9]+$/;
    const currencyRegexTwo = /^[0-9]+\.$/;
    const currencyRegexThree = /^[0-9]+$/;
    const textRegexPattern = /^[a-zA-Z]+$/;

    //Grabbing user inputted form data 
    let currencyAmountInput = e.target.currencyAmountInput.value;
    let currencyExchangeFrom = e.target.currencyExchangeType[0].value;
    let currencyExchangeTo = e.target.currencyExchangeType[1].value;
    
    //Simple regex pattern test
      if(currencyRegexOne.test(currencyAmountInput) 
      || currencyRegexTwo.test(currencyAmountInput) 
      || currencyRegexThree.test(currencyAmountInput)) {
        setRegexPatternFail(null)
        setRegexTextDetected(null)
        dispatch(currencyAmount(currencyAmountInput))
        dispatch(exchangeFrom(currencyExchangeFrom))
        dispatch(exchangeTo(currencyExchangeTo))
      } else if (textRegexPattern.test(currencyAmountInput)){
        setRegexPatternFail(null)
        setRegexTextDetected(true)
      }
      else {
        setRegexTextDetected(null)
        setRegexPatternFail(true)
      }    
      
    //Clearing input field value after submission
    currencyAmountInput = null
  }

  return (
    <div className="App">
      {displayContent &&
      <div>
        <header>
          <h1 onClick={() => {window.location.reload()}}>
            CurrentSea Converter 
            <img src="/imgs/logo.jpg" alt="Site Logo" />
          </h1>
        </header>
      <form onSubmit={formSubmit}>
        <InputWrapper>
          <ExchangeFrom />
        </InputWrapper>
        <InputWrapper>
          <ExchangeTo  />
        </InputWrapper>
        <Button btnText="Convert"/>
      </form>
      {regexPatternFail && 
      <div className="regex-fail-message">
        Please ensure you have inputted: <br/>
        - Valid currency amount <br/>
        - Currency type to exchange from <br/>
        - Currency type to exchange to <br/>
      </div>}
      {regexTextDetected && 
      <div className="regex-fail-message">
        Please enter numerical values only <br/>
      </div>}
      </div>}
      {dataError && <div className="data-fetch-error">Error Loading data</div>}
    </div>
  );
}

export default App;
