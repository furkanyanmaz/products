import {combineReducers} from "redux";
import product from "./product";

const productReducer    = (state = product,action) => {
    switch (action.type) {
        case "DELETE_PRODUCT":
            return state.filter(product => product.id !== action.payload.id);
        case "FILTER_PRICE":
            return state.filter(product => product.price <  action.payload.price);
        default:
            return state
    }
}

export default combineReducers({
    productReducer:productReducer
});