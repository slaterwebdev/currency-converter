const currencyAmountReducer = (state = null, action: {type: string, payload: number}) : number | null => { 
    switch(action.type) {
      case 'currencyAmount':
        return action.payload
      default:
        return state
    }
  }

  export default currencyAmountReducer