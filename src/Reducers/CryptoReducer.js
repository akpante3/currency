import { FETCHING_COIN_DATA , FETCHING_COIN_DATA_FAIL, FETCHING_COIN_DATA_SUCCESS } from "../Actions/ActionTypes";

const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMessage: null
}

export default function( state = initialState, action) {
    switch(action.type) {
        case FETCHING_COIN_DATA:
        return {...state, isFetching: null,
            data: null,
            hasError: false,
            errorMessage: null 
        }

        case FETCHING_COIN_DATA_SUCCESS:
        return {...state, 
            isFetching: false,
            data: action.payload,
            hasError: false,
            errorMessage: null 
        }

        case FETCHING_COIN_DATA_FAIL:
        return {...state, 
            isFetching: false,
            data: action.payload,
            hasError: false,
            errorMessage: null 
        }
        
        default:
        return state;
    }
}