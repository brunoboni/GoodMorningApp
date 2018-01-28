const INITIAL_STATE = {
    name: '',
    email: 'banana@banana.com',
    password: '',
    confirmpassword: '',
    nomatchpassword: '',
    phone: '',
    erroCadastro: '',
    erroLogin: '',
    loading_login: false,
    loading_cadastro: false,
    checkemail: false
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'MODIFICA_EMAIL':
            return { ...state, email: action.payload }
        case 'MODIFICA_TELEFONE':
            return { ...state, phone: action.payload }
        case 'MODIFICA_SENHA':
            return { ...state, password: action.payload }
        case 'MODIFICA_CONFIRMA_SENHA':
            return { ...state, confirmpassword: action.payload }
        case 'MOSTRA_MSG_ERRO_SENHA':
            return { ...state, nomatchpassword: action.payload }
        case 'MODIFICA_NOME':
            return { ...state, name: action.payload }
        case 'CADASTRO_USUARIO_ERRO':
            return { ...state, erroCadastro: action.payload, loading_cadastro: false }
        case 'CADASTRO_USUARIO_SUCESSO':
            return { ...state, nome: '', senha: '', loading_cadastro: false }
        case 'LOGIN_USUARIO_ERRO':
            return { ...state, erroLogin: action.payload, loading_login: false }
        case 'LOGIN_USUARIO_SUCESSO':
            return { ...state }
        case 'LOGIN_EM_ANDAMENTO':
            return { ...state, loading_login: true }
        case 'CADASTRO_EM_ANDAMENTO':
            return { ...state, loading_cadastro: true }
        case 'MODIFICA_ENVIO_EMAIL':
            return { ...state, checkemail: action.payload ? false : true }
        case 'DADOS_USUARIO_AUTENTICADO':
            return { ...state, name: action.payload.name,
                               checkemail: action.payload.checkemail,
                                phone: action.payload.phone }
        default:
            return state;
    }
}