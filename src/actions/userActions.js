export const getUserInfo = () => {
    return {
        type: 'GET_USER_INFO',
        payload: null
    }
}

export const storeUserInfo = (user) => {
    return {
        type: 'STORE_USER_INFO',
        payload: user
    }
}