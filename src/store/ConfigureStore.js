import rootReducer from "../reducers/index";
import {createStore} from 'redux';

export default function (initialState) {
    return createStore(
        rootReducer,
        initialState,
    )
}