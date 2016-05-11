import expect from 'expect'
import React from 'react-native'
import { Subject } from 'rxjs'
import bindAction from './bindAction'

describe('bindAction', () => {

  it('wraps subject.next', done => {
    const action$ = new Subject
    const action = bindAction(action$)

    action$.toArray().subscribe(result => {
      expect(result).toEqual([ 'foo', 'bar' ])
    }, () => {}, done)

    action('foo')
    action('bar')
    action$.complete()
  })
})
