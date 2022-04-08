import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { userDataReducer } from "./reducers/index";

const persistConfig = {
  key: "userData",
  storage,
};
const persistedReducer = persistReducer(persistConfig, userDataReducer);

export default () => {
  let store = createStore(persistedReducer, composeWithDevTools());
  let persistor = persistStore(store);
  return { store, persistor };
};
