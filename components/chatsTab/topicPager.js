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
import DiscoverList from '../discovery/discoveryList'
import ScrollableTabView from 'react-native-scrollable-tab-view'
export default class TopicPager extends Component{
	state={activeIndex:0}
	shouldComponentUpdate(nextProps,nextState){
		return this.state!==nextState
	}
	render(){
		return (
		<ScrollableTabView 
		tabBarPosition={'top'}
			onScroll={(f)=>{
				if(Math.abs(f - parseInt(f, 10))<0.16){
					this.topics.scrollToTab(f)
				}
			}}
			 renderTabBar={() => <Topics ref={el=>this.topics=el}/>}>
			<DiscoverList tabLabel='For you'/>
   			<DelayRendering tabLabel={'Top rated messages'} delay={300}><Channel /></DelayRendering>
   			<DelayRendering tabLabel='Trending' delay={500}><ChannelsByTopic /></DelayRendering>
   			<DelayRendering tabLabel='Nearby' delay={600}><ChannelsByTopic /></DelayRendering>
   		
			
   
      </ScrollableTabView>
			)
	}
};
Object.assign(TopicPager.prototype, TimerMixin);