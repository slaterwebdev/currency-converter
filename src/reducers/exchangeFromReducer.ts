const exchangeFromReducer = (state = null, action: {type: string, payload: object}) : object | null => { 
    switch(action.type) {
      case 'exchangeFrom':
        return action.payload
      default:
        return state
    }
  }

  export default exchangeFromReducer