const { CHECK_DOMAIN_NAME_LOADING, CHECK_DOMAIN_NAME_SUCCESS, CHECK_DOMAIN_NAME_FAILED } = require("./domainType")


export const checkDomainLoading = () =>{
    return {
        type: CHECK_DOMAIN_NAME_LOADING,
        loading: true,
    }
}


export const checkDomainSuccess = (value) =>{
    return {
        type: CHECK_DOMAIN_NAME_SUCCESS,
        loading: false,
        payload: value
    }
}

export const checkDomainFailed = (errorMsg) =>{
    return {
        type: CHECK_DOMAIN_NAME_FAILED,
        loading: false,
        payload: errorMsg
    }
}