export const getUserInfo = () => {
    return {
        type: 'GET_USER_INFO',
        payload: null
    }
}

export const storeUserInfo = (userLoginInfo) => {
    return {
        type: 'STORE_USER_INFO',
        payload: userLoginInfo
    }
}