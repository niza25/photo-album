import { combineReducers } from 'redux'
import albums from './album'

// combines reducers (in other .js files), names of the part of the state
export default combineReducers({
  albums
})