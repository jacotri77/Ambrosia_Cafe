import {combineReducers, createStore} from 'redux'
import menuReducer from './reducers/menu'
import reservationsReducer from './reducers/reservations'
import feedReducer from './reducers/feed'

const rootReducer = combineReducers({
  menuReducer, reservationsReducer, feedReducer
})

const store = createStore(rootReducer)

export default store