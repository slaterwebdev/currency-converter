export const displayData = (data:{}) :{type: string, payload: object} => {
    return {
        type: 'displayData',
        payload: data
    }
}

export const currencyAmount = (userData: number) :{type: string, payload: number} => {
    return {
        type: 'currencyAmount',
        payload: userData
    }
}

export const exchangeFrom = (userData: number) :{type: string, payload: number} => {
    return {
        type: 'exchangeFrom',
        payload: userData
    }
}

export const exchangeTo = (userData: number) :{type: string, payload: number} => {
    return {
        type: 'exchangeTo',
        payload: userData
    }
}