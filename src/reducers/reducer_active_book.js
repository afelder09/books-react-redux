import { BOOK_SELECTED } from "../actions/types";

const INITIAL_STATE = null;

export default function(state = INITIAL_STATE, action) {
    switch(action.type){
        case BOOK_SELECTED: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}