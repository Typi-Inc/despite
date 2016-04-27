import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
import Tube from './tube'
let {
  AppRegistry,
  Component,
  Text,
  View
} =React;
export default class Channel extends Component{
	state={};
	render(){
		return (

			
				<Tube messageId={this.props.messageId} navigator={this.props.navigator}/>
	

			)
	}

};
Object.assign(Channel.prototype, TimerMixin);