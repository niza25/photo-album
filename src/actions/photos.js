export const SET_PHOTOS = 'SET_PHOTOS'

export function setPhotos(arrayOfPhotos) {
  return {
    type: SET_PHOTOS,
    payload: arrayOfPhotos
  }
}