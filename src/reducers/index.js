import { combineReducers, createStor, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import networksReducer from './networksReducer'
import peersReducer from './peersReducer'
import interfacesReducer from './interfacesReducer';

const rootReducer = combineReducers({
  peers:      peersReducer,
  networks:   networksReducer,
  interfaces: interfacesReducer
})

const store = createStore(rootReducer, {}, applyMiddleware(thunk))

export default store