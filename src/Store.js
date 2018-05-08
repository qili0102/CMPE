import {createStore, combineReducers} from 'redux';
import userReducer from './signup/reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import currentProjectReducer from './project/currentProjReducers';
import openProjectReducer from './home/openReducers';

const reducer = combineReducers({
    users: userReducer,
    post_projects:null,
    bid_projects:null,
    open_projects:openProjectReducer,
    bids:null,
    current_project: currentProjectReducer
});

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, reducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);

// const initialState={
//     users: {isRegister: false, isLogin: false}
// };

// export default createStore(reducer, initialState);
// export default createStore(reducer);