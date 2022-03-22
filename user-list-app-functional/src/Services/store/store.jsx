import { createStore } from "redux";
import { setUser } from "../reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(setUser, composeWithDevTools());
