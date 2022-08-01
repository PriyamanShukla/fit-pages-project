import {
    DATA_GET_REQUEST,
    DATA_GET_SUCCESS,
    DATA_GET_FAIL,
  } from '../constants/action-types';
   
  
  export const dataReducer = (state = { data: [] }, action) => {
    switch (action.type) {
      case DATA_GET_REQUEST:
        return { loading: true, data: [] };
      case DATA_GET_SUCCESS:
        return { loading: false, data: action.payload };
      case DATA_GET_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };