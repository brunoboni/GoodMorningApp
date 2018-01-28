const INTIAL_STATE = {}

export default (state = INTIAL_STATE, action) => {

    switch (action.type) {
        case 'ONRECEIVE_ADDRESS':
            return action.payload
        default:
            return state;
    }
}