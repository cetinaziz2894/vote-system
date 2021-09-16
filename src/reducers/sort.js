import { SET_SORT, SORT_LIST_DEFAULT } from '../actions/types';

const storedSort = localStorage.getItem('sort') || SORT_LIST_DEFAULT;

const filter = (state = storedSort, action) => {
    switch(action.type) {
        case SET_SORT:
            localStorage.setItem('sort', action.sort);
            return action.sort;
        default:
            return state;
    }
}

export default filter;