const initialState = {
    user : {
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
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'GET_USER_INFO':
            return {
                user : state.user
            }
        case 'STORE_USER_INFO':
                state.user.loginInfo = action.payload
        default :
            return state
    }
}