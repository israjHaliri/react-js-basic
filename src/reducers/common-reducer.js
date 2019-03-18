import {HIDELOADING, SHOWLOADING} from "../actions/action-types";

const commonReducer = (state = [], action) => {
    switch (action.type) {
        case SHOWLOADING:
            return 'block';
        case HIDELOADING:
            return 'none';
        default:
            return state;
    }
};

export { commonReducer }