import axios from 'axios';
import { 
  DATA_GET_REQUEST,
  DATA_GET_SUCCESS,
  DATA_GET_FAIL 
} from "../constants/action-types";

export const allData = () => async (dispatch) => {
  try {
    dispatch({ type: DATA_GET_REQUEST });
    const { data } = await axios.get(
      'http://localhost:4000/data'
    );

    dispatch({
      type:DATA_GET_SUCCESS,
      payload: [data],
    });
  } catch (error) {
    dispatch({
      type: DATA_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};