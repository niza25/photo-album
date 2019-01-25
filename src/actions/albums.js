import request from 'superagent';
import { setAlbum } from './setAlbum'

export function getAlbums() {
  return function (dispatch) {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        dispatch(setAlbum(response.body))
      })
  }
}