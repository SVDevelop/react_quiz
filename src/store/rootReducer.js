import {combineReducers} from "redux";
import {cardNavigationReducer} from "./cardNavigationReducer";

export const rootReducer = combineReducers({
    cardNav: cardNavigationReducer,
})