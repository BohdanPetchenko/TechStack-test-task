import { combineReducers } from 'redux'
import bikeReducer from './bike-reducer'
import promiseReducer from './promise-reducer'

export default combineReducers({
    bikeReducer,
    promiseReducer
})