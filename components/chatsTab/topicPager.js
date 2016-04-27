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
import DelayRendering from './delayRendering'
import ChannelsByTopic from './channelsByTopic'
import Channel from '../channel/channel'
import Topics from './topics'
import ScrollableTabView from 'react-native-scrollable-tab-view'
export default class TopicPager extends Component{
	state={activeIndex:0}
	shouldComponentUpdate(nextProps,nextState){
		this.state!==nextState
	}
	render(){
		return (
		<ScrollableTabView 
			onScroll={(f)=>{
				if(Math.abs(f - parseInt(f, 10))<0.16){
					this.topics.scrollToTab(f)
				}
			}}
			 renderTabBar={() => <Topics ref={el=>this.topics=el}/>}>
			<ChannelsByTopic tabLabel='For you'/>
   			<DelayRendering tabLabel={'Top rated messages'} delay={300}><Channel /></DelayRendering>
   			<DelayRendering tabLabel='Trending' delay={500}><ChannelsByTopic /></DelayRendering>
   			<DelayRendering tabLabel='Nearby' delay={600}><ChannelsByTopic /></DelayRendering>
   		
			
   
      </ScrollableTabView>
			)
	}
};
Object.assign(TopicPager.prototype, TimerMixin);