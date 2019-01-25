export const SET_ALBUM = 'SET_ALBUM'

export function setAlbum({title, id}) {
  return {
    type: SET_ALBUM,
    payload: {
      title: title,
      id: id
    }
  }
}