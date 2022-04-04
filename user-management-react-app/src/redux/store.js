import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { userDataReducer } from "./reducers/index";

export const store = createStore(userDataReducer, composeWithDevTools());
