import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from "./localStorage";
import { rootReducer } from "./rootReducer";

const persistedState = loadState();

export const store = createStore(rootReducer, persistedState, composeWithDevTools())

store.subscribe(() => {
    saveState(store.getState())
})