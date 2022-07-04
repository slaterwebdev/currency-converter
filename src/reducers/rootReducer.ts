import { combineReducers } from "redux";
import dataReducer from "./currencyApiReducer";
import currencyAmountReducer from "./currencyAmountReducer";
import exchangeFromReducer from "./exchangeFromReducer";
import exchangeToReducer from "./exchangeToReducer";

const rootReducer = combineReducers({
    data: dataReducer,
    currencyAmount: currencyAmountReducer,
    exchangeFrom: exchangeFromReducer,
    exchangeTo: exchangeToReducer
})

export default rootReducer