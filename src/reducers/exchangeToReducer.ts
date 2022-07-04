const exchangeToReducer = (state:null = null, action: {type: string, payload: object}) : object | null => { 
    switch(action.type) {
      case 'exchangeTo':
        return action.payload
      default:
        return state
    }
  }

  export default exchangeToReducer