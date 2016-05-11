import expect from 'expect'
import { Subject, Observable } from 'rxjs'
import createState from './createState'
import { Map } from 'immutable'

describe('createState', () => {

  it('creates state$', done => {
    const reducer$ = new Subject
    const reducer = state => ({ ...state, counter: (state.counter || 0) + 1 })
    const state$ = createState(reducer$)

    state$.toArray().subscribe(results => {
      expect(results).toEqual([
        {},
        { counter: 1 },
        { counter: 2 },
        { counter: 3 }
      ])
    }, () => {}, done)

    reducer$.next(reducer)
    reducer$.next(reducer)
    reducer$.next(reducer)
    reducer$.complete()
  })

  it('creates state$ with initialState$', done => {
    const reducer$ = new Subject
    const initialState$ = Observable.of({ counter: -10 })
    const reducer = state => ({ ...state, counter: state.counter + 1 })
    const state$ = createState(reducer$, initialState$)

    state$.toArray().subscribe(results => {
      expect(results).toEqual([
        { counter: -10 },
        { counter: -9 },
        { counter: -8 },
        { counter: -7 }
      ])
    }, () => {}, done)

    reducer$.next(reducer)
    reducer$.next(reducer)
    reducer$.next(reducer)
    reducer$.complete()
  })

  it('stores non-immutable objects in immutable state', done => {
    const reducer$ = new Subject
    const initialState$ = Observable.of(Map())
    const reducer = state => state.set('socket', { test: 'test' })
    const state$ = createState(reducer$, initialState$)

    state$.toArray().subscribe(results => {
      expect(results).toEqual([
        Map(),
        Map([['socket', { test: 'test' }]])
      ])
    }, () => {}, done)
    reducer$.next(reducer)
    reducer$.complete()
  })
})
