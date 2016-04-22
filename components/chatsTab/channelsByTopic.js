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
const IncrementalGroup = require('IncrementalGroup');
const IncrementalPresenter = require('IncrementalPresenter');
import ChannelsPlaceholder from './channelsPlaceholder'
import {openAnimation} from '../animations'
import {channelList} from '../mock'
import ChannelItem from './channelItem'
var Spinner = require('react-native-spinkit');
export default class ChannelsByTopic extends Component{
	state={loading:true}
	componentDidMount(){
		InteractionManager.runAfterInteractions(()=>{
			LayoutAnimation.configureNext(openAnimation)
				this.setState({loading:false})
			})
	}
	render(){
		if(this.state.loading) return  <View style={{flex:1,...center,backgroundColor:'white'}}><Spinner 
			style={{marginBottom:75}} isVisible={true} 
				size={55} type={'ArcAlt'} color={'#969696'}/></View>

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