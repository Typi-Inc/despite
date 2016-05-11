import { Observable } from 'rxjs'
import { fromJS } from 'immutable'
import { AsyncStorage } from 'react-native'
import { registerNav } from '../actions/buttonClicks'

const SERVER_URL = 'http://localhost:4000/api'

const postData = (resource, data) => Observable.fromPromise(fetch(`${SERVER_URL}${resource}`, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}))

const registrationReducerFn = actions => Observable.merge(
  actions.assignToRegisteringUser$.
    map(user => state => state.mergeDeep(fromJS({
      registering_user: user
    }))),

  actions.verifyPhoneNumber$
    .flatMap(data => postData('/verify_phone_number', data))
    .map(response => state => console.log(response) || state),

  actions.verifyCode$
    .flatMap(data => postData('/users', data))
    .flatMap(response => Observable.fromPromise(response.json()))
    .flatMap(data => console.log("here is response", data) ||
      Observable.fromPromise(
        AsyncStorage.setItem('token', data.jwt)).map(() => data))
    .map(data => state => {
      registerNav({ action: 'navigation push', title: data.user.phone_number, name: 'usernameEnter' })
      return state
    })
  // actions.
  // actions.signup$
  //   .flatMap(data =>
  //     Observable.ajax.post(`${SERVER_URL}/users`, data))
)

export default registrationReducerFn
