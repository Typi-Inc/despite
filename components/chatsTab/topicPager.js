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
				if(Math.abs(f - parseInt(f, 10))<0.1){
					this.topics.scrollToTab(f)
				}
			}}
			 renderTabBar={() => <Topics ref={el=>this.topics=el}/>}>
			<ChannelsByTopic tabLabel='For you'/>
   			<Channel tabLabel={'Top rated messages'}/>
   			<ChannelsByTopic tabLabel='Trending'/>
   			<ChannelsByTopic tabLabel='Nearby'/>
			
   
      </ScrollableTabView>
			)
	}
};
Object.assign(TopicPager.prototype, TimerMixin);