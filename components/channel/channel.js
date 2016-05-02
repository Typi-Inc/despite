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
	shouldComponentUpdate(nextProps,nextState){
		nextState!==this.state
	}
	render(){
		console.log('channel is rerendirnig')
		return (

			
				<Tube  messageId={this.props.messageId} navigator={this.props.navigator}/>
	

			)
	}

};
Object.assign(Channel.prototype, TimerMixin);