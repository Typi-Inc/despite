import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  View
} =React;
export default class Settings extends Component{
	state={};
	componentWillUnmount(){
		console.log('unmounting settings')
	}
	render(){
		return (

			<View style={{backgroundColor:'#0F3057',height:568*h}}/>

			)
	}

};
Object.assign(Settings.prototype, TimerMixin);