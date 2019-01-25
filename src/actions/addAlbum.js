export const ADD_ALBUM = 'ADD_ALBUM'

export function addAlbum(title, id) {
  return {
    type: ADD_ALBUM,
    payload: {
      title,
      id
    }
  }
}

/* export const addAlbum = (title, id) => {
  return {
    type: ADD_ALBUM,
    payload: {
      title,
      id
    }
  }
} */