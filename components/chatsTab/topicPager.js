import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  TouchableWithoutFeedback,
  ScrollView,
  Text,
  View
} =React;
import ChannelsByTopic from './channelsByTopic'
import Channel from '../channel/channel'
export default class TopicPager extends Component{
	state={activeIndex:0}
	render(){
		return (
		<ScrollView directionalLockEnabled={true} horizontal={true} pagingEnabled={false}>
				
			<View>	
				<ScrollView  directionalLockEnabled={true} style={{}}>
					<View style={{backgroundColor:'gray',width:320*k,height:300}}/>
					<View style={{backgroundColor:'yellow',width:320*k,height:300}}/>


				</ScrollView>
			</View>

		
			<ScrollView directionalLockEnabled={true}  style={{}}>
				<View style={{backgroundColor:'black',width:320*k,height:300}}/>
				<View style={{backgroundColor:'green',width:320*k,height:300}}/>
				<View style={{backgroundColor:'blue',width:320*k,height:300}}/>
			<View style={{backgroundColor:'orange',width:320*k,height:300}}/>

			</ScrollView>
			<View style={{backgroundColor:'red',width:320*k,height:300}}/>
			<View style={{backgroundColor:'green',width:320*k,height:300}}/>

		</ScrollView>
			)
	}
};
Object.assign(TopicPager.prototype, TimerMixin);