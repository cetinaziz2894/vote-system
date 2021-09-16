import { SET_PAGE } from '../actions/types';

const storedPage = 1;

const page = (state = storedPage, action) => {
    switch(action.type) {
        case SET_PAGE:
            return action.page;
        default:
            return state;
    }
}

export default page;