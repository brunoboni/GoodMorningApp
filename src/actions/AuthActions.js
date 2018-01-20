import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import _ from 'lodash'

export const changeEmail = (texto) => {
    return {
        type: 'MODIFICA_EMAIL',
        payload: texto
    }
}

export const changeConfirmPassword = (text) => {
    return {
        type: 'MODIFICA_CONFIRMA_SENHA',
        payload: text
    }
}
export const authEmail = (text) => {
    return {
        type: 'MODIFICA_ENVIO_EMAIL',
        payload: text
    }
}


export const changeNomatchpassword = (text) => {
    return {
        type: 'MOSTRA_MSG_ERRO_SENHA',
        payload: text
    }
}
export const changePassword = (text) => {
    return {
        type: 'MODIFICA_SENHA',
        payload: text
    }
}
export const changePhone = (text) => {
    return {
        type: 'MODIFICA_TELEFONE',
        payload: text
    }
}

export const changeName = (texto) => {
    return {
        type: 'MODIFICA_NOME',
        payload: texto
    }
}

export const register = ({ name, email, password, phone, checkemail }) => {
    return dispatch => {

        dispatch({ type: 'CADASTRO_EM_ANDAMENTO' });
        debugger;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                debugger;
                let emailB64 = b64.encode(email);

                firebase.database().ref('/User/' + emailB64)
                    .push({ name, phone, checkemail })
                    .then(value => cadastroUsuarioSucesso(dispatch))
            })
            .catch(erro => cadastroUsuarioErro(erro, dispatch));
    }

}

// export const getUser =({email}) =>{
//     return dispatch =>{
//         let emailB64 = b64.encode(email);
//         firebase.database().ref(`/User/${emailB64}`)
//     }

// }


const cadastroUsuarioSucesso = (dispatch) => {
    dispatch({ type: 'CADASTRO_USUARIO_SUCESSO' });

    Actions.Home();
}

const cadastroUsuarioErro = (erro, dispatch) => {
    debugger;
    dispatch({
        type: 'CADASTRO_USUARIO_ERRO',
        payload: erro.message
    });
}

export const login = ({ email, password }) => {

    return dispatch => {

        dispatch({ type: 'LOGIN_EM_ANDAMENTO' });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
        let emailB64 = b64.encode(email);
        firebase.database().ref('/User/' + emailB64)
            .once('value', snapshot =>    
            loginSucesso(dispatch ,snapshot)
            )
        
         })
            .catch(erro => loginUsuarioErro(erro, dispatch));
    }
}
const loginSucesso = (dispatch ,snapshot) => {
    const dadosUsuario = _.first(_.values(snapshot.val()))
    dispatch({
        type: 'DADOS_USUARIO_AUTENTICADO',
        payload: dadosUsuario 
    })
    Actions.Home();

}

const loginUsuarioErro = (erro, dispatch) => {
    if(erro.code == 'auth/invalid-email')
    erro.message = 'Usuario ou senha invalidos'
    dispatch(
        {
            type: 'LOGIN_USUARIO_ERRO',
            payload: erro.message
        }
    );
    
}