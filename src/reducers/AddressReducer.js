const INITIAL_STATE = {
    addresstype: '',
    street: '',
    number: '',
    zipcode: '',
    city: '',
    district: '',
    referency: '',
    uid: '',
}


export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'SELECT_ADDRESS':
            return action.payload
        case 'LOADING':
            return { ...state, loading: true }
        case 'SUCCESS':
            return {...state, INITIAL_STATE }
        case 'ERROR':
            return { ...state, success: false, loading: false, error: action.payload }
        default:
            return state
    }
}    
