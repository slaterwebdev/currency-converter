const dataReducer = (state = null, action: {type: string, payload: object}) : object | null => { 
    switch(action.type) {
      case 'displayData':
        return action.payload
      default:
        return state
    }
  }

  export default dataReducer