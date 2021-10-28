const { CHECK_DOMAIN_NAME } = require("./domainType")

const checkDomainLoading = () =>{
    return {
        type: CHECK_DOMAIN_NAME,
        loading: true,
        payLoad: []
    }
}

const checkDomain