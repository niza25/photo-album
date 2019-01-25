// exporting a const with the string of the as the type, and used var in the type
export const NEW_HELLO_WORLD = 'NEW_HELLO_WORLD'

export function helloWorld(firstName, lastName) {
  return {
    type: NEW_HELLO_WORLD,
    payload: {
      firstName: firstName,
      lastName: lastName
    }
  }
}