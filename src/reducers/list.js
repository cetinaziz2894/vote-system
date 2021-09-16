import { ADD_ITEM, CLEAR_LIST, DELETE_ITEM, DOWN_VOTE_ITEM, UP_VOTE_ITEM } from '../actions/types';

// Check localStorage for saved LISTs, else return null array
const storedList = JSON.parse(localStorage.getItem('list')) || [];

const list = (state =storedList, action) => {    
    switch (action.type) {
        case ADD_ITEM:
            localStorage.setItem('list', JSON.stringify([...state, action.payload]));
            return [...state, action.payload];

        case DELETE_ITEM:
            let modifiedList = state.filter(el => el.id !== action.id);
            localStorage.setItem('list', JSON.stringify(modifiedList));
            return modifiedList;
        
        case UP_VOTE_ITEM:
            let updatedUpVotedList = state.map(item => {
                if (item.id === action.id) 
                    return Object.assign({}, item, { point: item.point+1 });                    
                return item;
            }
            );
            localStorage.setItem('list', JSON.stringify(updatedUpVotedList));
            return updatedUpVotedList;

        case DOWN_VOTE_ITEM:
            let updatedDownVotedList = state.map(item => {
                if (item.id === action.id && item.point !== 0) 
                    return Object.assign({}, item, { point: item.point-1 });                    
                return item;
            }
            );
            localStorage.setItem('list', JSON.stringify(updatedDownVotedList));
            return updatedDownVotedList;

        case CLEAR_LIST:
            localStorage.removeItem('list');
            return [];
             
        default:
            return state;
    }
}

export default list;