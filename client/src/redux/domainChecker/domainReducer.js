import redux from 'redux';
import ReduxThunk from 'redux-thunk'
import axios from 'axios';
import { checkDomainLoading } from './domainCheckAction';

const { CHECK_DOMAIN_NAME_LOADING, CHECK_DOMAIN_NAME_SUCCESS, CHECK_DOMAIN_NAME_FAILED } = require("./domainType")

const initialState = {
    loading: false,
    payload: []
}

const domainReducer = (state = initialState, action) =>{
    switch(action.type){
        case CHECK_DOMAIN_NAME_LOADING: return {
            ...state,
            loading: action.loading
        }
        case CHECK_DOMAIN_NAME_SUCCESS: return {
            loading: action.loading,
            payload: action.payload
        }
        case CHECK_DOMAIN_NAME_FAILED: return {
            loading: action.loading,
            payload: action.payload
        }
    }
}

const fetchDomain = () =>{
    return function(dispatch){
        dispatch(checkDomainLoading());
        //db.find something...
    }
}
