const initialState = {
    loginInfo: {
        isLoggedIn: false,
        username : '',
        email : '',
        password : '',
    },
    BankAccount: {
        balance: {
            USD: 0
        },
        transactions: [
        ],
        onHold: {
            
        }
    }
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'GET_USER_INFO':
            return {
                ...state
            }
        case 'STORE_USER_INFO':
                state.loginInfo = action.payload
        default :
            return state
    }
}