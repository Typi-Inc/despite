import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  View
} =React;
import ChannelsByTopic from '../chatsTab/channelsByTopic'

export default class Directs extends Component{
	state={};
	render(){
		return (

			<ChannelsByTopic/>

			)
	}

};
Object.assign(Directs.prototype, TimerMixin);