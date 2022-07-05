interface reducer {
  type: string, 
  payload: object
}
//reducer for second select field value 
const exchangeToReducer = (state:object = {}, action: reducer) :object => { 
    switch(action.type) {
      case 'exchangeTo':
        return state = action.payload
      default:
        return state
    }
  }

  export default exchangeToReducer