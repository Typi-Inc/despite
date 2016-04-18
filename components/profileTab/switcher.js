import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  LayoutAnimation,
  View
} =React;
import ChannelsByTopic from '../chatsTab/channelsByTopic'
import Channel from '../channel/channel'
import {openAnimation} from '../animations'
export default class Switcher extends Component{
	state={num:0};
	changeNum(num){
		LayoutAnimation.configureNext(openAnimation)
		this.setState({num:num})
	}
	render(){
		let buy=<Text>buy</Text>
		let author=<Text>author</Text>
		let comments=<Text>comments</Text>
		let tab;
		if(this.state.num===0){
			tab=<ChannelsByTopic/>;
		}else if(this.state.num===1){
			tab=<ChannelsByTopic/>;
		}else{
			tab=<Channel/>;
		}
		return (

			<View style={{flex:1}}>
				

				{tab}

			</View>

			)
	}

};
Object.assign(Switcher.prototype, TimerMixin);