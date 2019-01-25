import {ADD_ALBUM} from '../actions/addAlbum'

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_ALBUM:
      return [        
        ...state,
        action.payload
      ]
    default:
  return state
  }
}