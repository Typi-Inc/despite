import expect from 'expect'
import { shallow } from 'enzyme'
import React, { Text } from 'react-native'
import { Subject } from 'rxjs'
import connect from './connect'

describe('connect', () => {

  const Component = props => <Text>{ props.counter }</Text>
  let state$

  beforeEach(() => {
    state$ = new Subject
  })

  it('creates connected component', () => {
    const WrappedComponent = connect(state$)(Component)
    const wrapper = shallow(<WrappedComponent />)
    expect(wrapper.contains(<Text></Text>))
    state$.next({ counter: 10 })
    expect(wrapper.contains(<Text>10</Text>))
    state$.next({ counter: 20 })
    expect(wrapper.contains(<Text>20</Text>))
  })

  it('creates connected component with selector', () => {
    const selector = state => ({ counter: state.counter * 2 })
    const WrappedComponent = connect(state$, selector)(Component)
    const wrapper = shallow(<WrappedComponent />)
    expect(wrapper.contains(<Text></Text>))
    state$.next({ counter: 10 })
    expect(wrapper.contains(<Text>20</Text>))
    state$.next({ counter: 20 })
    expect(wrapper.contains(<Text>40</Text>))
  })
  
})
