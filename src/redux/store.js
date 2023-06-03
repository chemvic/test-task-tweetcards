import { configureStore } from "@reduxjs/toolkit";
import {followReducer} from "./following/followSlice";
import {usersReducer} from "./users/usersSlice";
import {currentPageReducer} from "./currentPage/currentPageSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  
  import storage from 'redux-persist/lib/storage';
  
const followPersistConfig = {
    key: 'follow',
    storage,
};
const currentPagePersistConfig = {
    key: 'currentPage',
    storage,
};

export const store = configureStore({
  reducer: {
    users: usersReducer,
    currentPage: persistReducer(currentPagePersistConfig, currentPageReducer),
    follow: persistReducer(followPersistConfig, followReducer),
     

},
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }},)
    

});
export const persistor = persistStore(store);




  
 
  