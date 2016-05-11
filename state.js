import { Observable } from 'rxjs'
import createState from './rx-state/createState'
import registrationReducerFn from './reducers/registration'
import registrationActions from './actions/registration'
import { Map } from 'immutable'

const registrationReducer$ = registrationReducerFn(registrationActions)

const reducer$ = Observable.merge(
  registrationReducer$
)

const initialState$ = Observable.of(Map())

export default createState(reducer$, initialState$)
