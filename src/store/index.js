import { createStore } from "redux";
import rootReducers from "../reducers";

// convert object to string and store in localStorage
function saveToLocalStorage(state) {
    debugger
  try {
    const serialisedState = JSON.stringify([state]);
    console.log(serialisedState);
    const list = localStorage.getItem("list");
    const items = JSON.parse(list);
    if (items) {  
        const newList = [
            ...items,
            serialisedState
        ]
        localStorage.setItem("list", newList);
    }else{
        localStorage.setItem("list", serialisedState);
    }
  } catch (e) {
    console.warn(e);
  }
}

// load string from localStarage and convert back in to an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("list");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
const store = createStore(rootReducers, loadFromLocalStorage());

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
