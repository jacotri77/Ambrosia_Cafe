import {combineReducers, createStore} from 'redux'
import menuReducer from './reducers/menu'

const rootReducer = combineReducers({
  menuReducer
})

const store = createStore(rootReducer)

export default store