import { persistReducer, persistStore } from "redux-persist"
import stateReducer from "../Feauters/counter/Api's"
import { configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key : "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig,stateReducer)

export const store = configureStore({
    reducer : persistedReducer,
    devTools : true
})

export const persistor = persistStore(store)