import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  TouchableWithoutFeedback,
  Text,
  ScrollView,

  View
} =React;
import {channelList} from '../mock'
import ChannelItem from './channelItem'
export default class ChannelsByTopic extends Component{
	state={}
	render(){
		return (

		<ScrollView directionalLockEnabled={true}>
				{channelList.map((channel,i)=>{
					return <ChannelItem key={i} channel={channel}/>
				})}

		</ScrollView>

			)
	}
};
Object.assign(ChannelsByTopic.prototype, TimerMixin);