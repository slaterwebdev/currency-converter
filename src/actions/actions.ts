interface numberPayload {
    type: string, 
    payload: number
}

interface objectPayload {
    type: string, 
    payload: object
}

//action for currencyApiReducer: All currency data
export const displayData = (data:{}) :objectPayload => {
    return {
        type: 'displayData',
        payload: data
    }
}

//action for currencyAmountReducer: how much the user wants to exchange
export const currencyAmount = (userData: number):numberPayload => {
    return {
        type: 'currencyAmount',
        payload: userData
    }
}

//action for exchangeFromReducer: start currency for user 
export const exchangeFrom = (userData: number) :numberPayload => {
    return {
        type: 'exchangeFrom',
        payload: userData
    }
}

//action for exchangeToReducer: end currency for user 
export const exchangeTo = (userData: number) :numberPayload => {
    return {
        type: 'exchangeTo',
        payload: userData
    }
}