import Reducer  from './Reducer'
import { combineReducers,createStore } from 'redux';

const store=createStore(combineReducers({Reducer}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;