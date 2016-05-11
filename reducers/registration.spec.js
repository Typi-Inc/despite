import expect from 'expect'
import { Observable, Subject } from 'rxjs'
import registrationReducerFn from './registration'
import { Map, fromJS } from 'immutable'

let registrationReducer$
let registrationActions

function testReducer(reducer$, values, initialState = Map(), selector = state => state) {
  const observable = reducer$
    .scan((state, reducer) => reducer(state), initialState)
    .map(selector)
    .take(values.length)

  observable.subscribe(
    val => expect(val).toEqual(values.shift()),
    err => { throw err }
  )

  return observable
}

describe('registration reducer', () => {

  beforeEach(() => {
    registrationActions = {
      assignToRegisteringUser$: new Subject,
      verifyPhoneNumber$: new Subject,
      verifyCode$: new Subject
    }

    registrationReducer$ = registrationReducerFn(registrationActions)
  })

  it('assigns new info to registringUser', done => {
    const phone = { phone_number: '+1231231231' }
    const username = { username: 'test' }

    testReducer(registrationReducer$, [
      fromJS({ registering_user: phone }),
      fromJS({ registering_user: { ...phone, ...username } })
    ]).subscribe(() => {}, () => {}, done)

    registrationActions.assignToRegisteringUser$.next(phone)
    registrationActions.assignToRegisteringUser$.next(username)
  })

})
