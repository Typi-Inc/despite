import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  TouchableWithoutFeedback,
  Text,
  ScrollView,
  InteractionManager,
  LayoutAnimation,
  View
} =React;
import ChannelsPlaceholder from './channelsPlaceholder'
import {openAnimation} from '../animations'
import {channelList} from '../mock'
import ChannelItem from './channelItem'

export default class ChannelsByTopic extends Component{
	state={loading:true}
	componentDidMount(){
		InteractionManager.runAfterInteractions(()=>{
				this.setState({loading:false})
			})
	}
	render(){
		if(this.state.loading) return <ChannelsPlaceholder/>
		LayoutAnimation.configureNext(openAnimation)
		return (
			<View style={{flex:1,backgroundColor:'white'}}>
		<ScrollView directionalLockEnabled={true}>
				{channelList.map((channel,i)=>{
					return <ChannelItem key={i} channel={channel}/>
				})}

		</ScrollView>
		</View>

			)
	}
};
Object.assign(ChannelsByTopic.prototype, TimerMixin);