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
import Topics from './topics'
import ScrollableTabView from 'react-native-scrollable-tab-view'
export default class TopicPager extends Component{
	state={activeIndex:0}
	render(){
		return (
		
		<ScrollableTabView 
			onScroll={(f)=>{
				console.log(f,'f is here')
				if(f === parseInt(f, 10)){
					this.topics.scrollToTab(f)
				}
			}}

			onChangeTab={(i,ref)=>{
			// this.topics.scrollToTab(i)
		}} renderTabBar={() => <Topics ref={el=>this.topics=el}/>}>
			<ScrollView tabLabel="For You"  directionalLockEnabled={true} style={{}}>
				<View style={{backgroundColor:'gray',width:320*k,height:300}}/>
				<View style={{backgroundColor:'yellow',width:320*k,height:300}}/>
			</ScrollView>
   			<ScrollView tabLabel="Trending" directionalLockEnabled={true}  style={{}}>
				<View style={{backgroundColor:'black',width:320*k,height:300}}/>
				<View style={{backgroundColor:'green',width:320*k,height:300}}/>
				<View style={{backgroundColor:'blue',width:320*k,height:300}}/>
				<View style={{backgroundColor:'orange',width:320*k,height:300}}/>
			</ScrollView>
			<ScrollView tabLabel="Nearby" directionalLockEnabled={true}  style={{}}>
				<View style={{backgroundColor:'white',width:320*k,height:300}}/>
				<View style={{backgroundColor:'brown',width:320*k,height:300}}/>
				<View style={{backgroundColor:'red',width:320*k,height:300}}/>
				<View style={{backgroundColor:'green',width:320*k,height:300}}/>
			</ScrollView>
			<ScrollView tabLabel="Dating"  directionalLockEnabled={true} style={{}}>
				<View style={{backgroundColor:'gray',width:320*k,height:300}}/>
				<View style={{backgroundColor:'yellow',width:320*k,height:300}}/>
			</ScrollView>
   			<ScrollView tabLabel="Eating out" directionalLockEnabled={true}  style={{}}>
				<View style={{backgroundColor:'black',width:320*k,height:300}}/>
				<View style={{backgroundColor:'green',width:320*k,height:300}}/>
				<View style={{backgroundColor:'blue',width:320*k,height:300}}/>
				<View style={{backgroundColor:'orange',width:320*k,height:300}}/>
			</ScrollView>
			<ScrollView tabLabel="Going to watch a movie" directionalLockEnabled={true}  style={{}}>
				<View style={{backgroundColor:'white',width:320*k,height:300}}/>
				<View style={{backgroundColor:'brown',width:320*k,height:300}}/>
				<View style={{backgroundColor:'red',width:320*k,height:300}}/>
				<View style={{backgroundColor:'green',width:320*k,height:300}}/>
			</ScrollView>
			<ScrollView tabLabel="Technology"  directionalLockEnabled={true} style={{}}>
				<View style={{backgroundColor:'gray',width:320*k,height:300}}/>
				<View style={{backgroundColor:'yellow',width:320*k,height:300}}/>
			</ScrollView>
   			<ScrollView tabLabel="Flow" directionalLockEnabled={true}  style={{}}>
				<View style={{backgroundColor:'black',width:320*k,height:300}}/>
				<View style={{backgroundColor:'green',width:320*k,height:300}}/>
				<View style={{backgroundColor:'blue',width:320*k,height:300}}/>
				<View style={{backgroundColor:'orange',width:320*k,height:300}}/>
			</ScrollView>
			<ScrollView tabLabel="Jest" directionalLockEnabled={true}  style={{}}>
				<View style={{backgroundColor:'white',width:320*k,height:300}}/>
				<View style={{backgroundColor:'brown',width:320*k,height:300}}/>
				<View style={{backgroundColor:'red',width:320*k,height:300}}/>
				<View style={{backgroundColor:'green',width:320*k,height:300}}/>
			</ScrollView>
   
      </ScrollableTabView>
			)
	}
};
Object.assign(TopicPager.prototype, TimerMixin);