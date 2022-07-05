interface reducer {
  type: string, 
  payload: object
}
//reducer for first select field value in the "ExchangeFrom" component
const exchangeFromReducer = (state:object = {}, action: reducer) : object => { 
    switch(action.type) {
      case 'exchangeFrom':
        return  state = action.payload
      default:
        return state
    }
  }

  export default exchangeFromReducer