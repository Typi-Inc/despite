import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  TouchableWithoutFeedback,
  ScrollView,
  Text,
  Animated,
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
	componentWillMount(){

	}
	componentDidMount(){
		// Animated.timing(this.anim1,{toValue:0.5,duration:100,delay:0}).start()
		// Animated.timing(this.anim,{toValue:1,duration:1,delay:200}).start()
	}
	render(){
		this.anim1=this.anim1 || new Animated.Value(1)
		this.anim=this.anim || new Animated.Value(0)
		return (
			<View style={{flex:1}}>
		<ScrollableTabView 
		tabBarPosition={'top'}
			onScroll={(f)=>{
				if(Math.abs(f - parseInt(f, 10))<0.16){
					this.topics.scrollToTab(f)
				}
			}}
			 renderTabBar={() => <Topics ref={el=>this.topics=el}/>}>
			<DiscoverList tabLabel='Топ 20'/>
   			<DelayRendering tabLabel='Рядом' delay={100}><DiscoverList /></DelayRendering>
   			<DelayRendering tabLabel='Советы' delay={200}><DiscoverList /></DelayRendering>
   			<DelayRendering tabLabel='Куда сходить?' delay={200}><DiscoverList /></DelayRendering>
   			
			
   				
      </ScrollableTabView>
      <Animated.View style={{...center,backgroundColor:'white',position:'absolute',
				top:this.anim.interpolate({inputRange:[0,1],outputRange:[600,600]}),
				opacity:this.anim1,
				left:0,width:320*k,height:568*h-70}}>
				</Animated.View>
      </View>
			)
	}
};
Object.assign(TopicPager.prototype, TimerMixin);