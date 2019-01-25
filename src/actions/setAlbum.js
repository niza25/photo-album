export const SET_ALBUM = 'SET_ALBUM'

export function setAlbum(albums) {
  return {
    type: SET_ALBUM,
    payload: albums
  }
}