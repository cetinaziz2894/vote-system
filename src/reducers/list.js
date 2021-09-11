const initialState = {
    id:null,
    name:'',
    link:'',
    point:0
  };

const listReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "LISTITEM_ADD":
            return {
                ...state,
                id: action.payload.id,
                name:action.payload.name,
                link:action.payload.link,
                point:0
              }
        default:
            return state;
    }
}

export default listReducer;