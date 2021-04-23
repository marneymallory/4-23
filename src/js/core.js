/* eslint-disable prefer-destructuring */
const API_KEY = process.env.API_KEY
/* eslint-enable prefer-destructuring */

export default class Currency {
  static dollars() {
    return fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      })
      .catch(error => error)
  }
}
