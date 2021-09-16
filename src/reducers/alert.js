import { SET_ALERT } from '../actions/types';

const storedAlert = {
    val:false,
    name:'',
    type:''
};

const alert = (state = storedAlert, action) => {
    switch(action.type) {
        case SET_ALERT:
            return {val:action.payload.val, name:action.payload.name, type:action.payload.type};
        default:
            return state;
    }
}

export default alert;