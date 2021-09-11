export const addItem = (name,link, id) => {
    return {
      type: "LISTITEM_ADD",
      payload:{
          name,
          link,
          id
      }
    };
  };
  
  export const editItem = payload => {
    return {
      type: "LISTITEM_EDIT",
      payload
    };
  };
  
  export const deleteItem = payload => {
    return {
      type: "LISTITEM_DELETE",
      payload
    };
  };
  