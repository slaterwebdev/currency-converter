interface reducer {
  type: string, 
  payload: number
}
//Reducer for user inputted value for currency from input field
const currencyAmountReducer = (state = 0, action: reducer) : number => { 
    switch(action.type) {
      case 'currencyAmount':
        return state = action.payload
      default:
        return state
    }
  }

  export default currencyAmountReducer