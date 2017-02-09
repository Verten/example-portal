/**
 * Created by ebinhon on 2/9/2017.
 */
const host = 'http://localhost:8080'

const userAuthorize = 'authorize'
const userAuthenticate = 'authenticate'

const API = {
  /**
   * @return {string}
   */
  USER_AUTHORIZE() {
    return `${host}/${userAuthorize}`
  },
  /**
   * @return {string}
   */
  USER_AUTHENTICATE() {
    return `${host}/${userAuthenticate}`
  },
}

export default API
