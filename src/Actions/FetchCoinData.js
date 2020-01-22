import axios from 'axios';
import { apiBasrURL } from './../utils/Constants';

export default function fetchCoinData() {
    return dispatch => {
        dispatch({ type: FETCHING_COIN_DATA })

        return axios.get(`${apiBasrURL}/v1/ticker/?limit=10`).then(res => {
           dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data })
        }).catch(err => {
            dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data })
        })
    }
}