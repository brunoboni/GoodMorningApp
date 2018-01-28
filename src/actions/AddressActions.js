import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import _ from 'lodash'


export const upsertAddress = (objAddress) => {
    return dispatch => {
        if (objAddress.uid === '')
            firebase.database().ref(`/Address/${getUserMailB64()}`)
                .push(objAddress)
                .then(value => createSuccess(dispatch))
                .catch(error => errors(error, dispatch));
        else {
            firebase.database().ref().child(`/Address/${getUserMailB64()}/${objAddress.uid}`)
                .update(objAddress)
                .then(value => createSuccess(dispatch))
                .catch(error => errors(error, dispatch));
        }
    }
}

export const deleteAddress = (objAddress) => {
    return dispatch => {
        firebase.database().ref(`/Address/${getUserMailB64()}/${objAddress.uid}`)
            .remove()
            .then(value => deleteSuccess(dispatch))
            .catch(error => console.log(error))
    }
}

export const getAdress = () => {
    return dispatch => {
        firebase.database().ref(`/Address/${getUserMailB64()}`)
            .on('value', snapshot => {
                onReceiveAddress(dispatch, snapshot.val())
            })
    }
}
export const onSelectAddress = (address) => {
    Actions.FormAddress()
    return ({
        type: 'SELECT_ADDRESS',
        payload: address
    });

}
const getCurrentUser = () => {
    return { currentUser } = firebase.auth()
}

const getUserMailB64 = () => {
    const { currentUser } = firebase.auth()
    return emailB64 = b64.encode(currentUser.email);
}

const onReceiveAddress = (dispatch, values) => {
    dispatch({
        type: 'ONRECEIVE_ADDRESS',
        payload: values
    })
}
const deleteSuccess = (dispatch) => {
    dispatch({ type: 'SUCCESS' });
}

const createSuccess = (dispatch) => {
    dispatch({ type: 'SUCCESS' });
    Actions.pop();
}


const errors = (error, dispatch) => {
    debugger;
    dispatch({
        type: 'ERROR',
        payload: error.message
    });
}
