const initialState = {
    user : {
        isLoggedIn : false,
        username : '',
        email : '',
        password : ''
    }
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'GET_USER_INFO':
            return {
                user : state.user
            }
        case 'STORE_USER_INFO':
            return {
                ...state.user= action.payload
            }
        default :
            return state
    }
}