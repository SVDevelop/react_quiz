import {NEXT, PREV} from "./types";

const initialState = {}

export const cardNavigationReducer = ( state = initialState, action) => {
    switch (action.type) {
        case NEXT:
            return {}
        case PREV:
            return {}
        default: return state
    }
}