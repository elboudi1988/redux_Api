import { combineReducers } from "redux";
import { productReducer } from "./productReducer";


const reducers = combineReducers({
    allProduts: productReducer,
});
export default reducers;