interface reducer {
  type: string, 
  payload: object
}

//reducer for api fetched data
const dataReducer = (state:object = {}, action: reducer) :object => { 
    switch(action.type) {
      case 'displayData':
        return state = action.payload
      default:
        return state
    }
  }

  export default dataReducer