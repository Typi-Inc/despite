import React from 'react-native'
import shallowCompare from 'react-addons-shallow-compare'

function connect(state$, selector = state => state) {
  return function wrapWithConnect(WrappedComponent) {
    return class Connect extends React.Component {
      constructor(props) {
        super(props)
        this.componentHasMounted = false
        this.subscription = state$.map(selector).subscribe(
          state => !this.componentHasMounted ? this.state = state : this.setState(state)
        )
      }
      shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState)
      }
      componentDidMount() {
        this.componentHasMounted = true
      }
      componentWillUnmount() {
        this.subscription.unsubscribe()
      }
      render() {
        return (
          <WrappedComponent {...this.state} {...this.props} />
        )
      }
    }
  }
}

export default connect
