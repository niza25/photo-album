export const ADD_ALBUM = 'ADD_ALBUM'

export function addAlbum(title, id) {
  return {
    type: ADD_ALBUM,
    payload: {
      title: title,
      id: id
    }
  }
}