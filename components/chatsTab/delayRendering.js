import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  View
} =React;
export default class DelayRendering extends Component{
	state={loading:true};
	componentWillMount(){
		this.setTimeout(()=>{
			this.setState({loading:false})
		},this.props.delay)
	}

	render(){
		if(this.state.loading) return <View/>
		return (

				<View style={{flex:1}}>
					{this.props.children}
				</View>


			)
	}

};
Object.assign(DelayRendering.prototype, TimerMixin);