import {combineReducers, createStore} from 'redux'
import menuReducer from './reducers/menu'
import reservationReducer from './reducers/reservation'

const rootReducer = combineReducers({
  menuReducer, reservationReducer
})

const store = createStore(rootReducer)

export default store