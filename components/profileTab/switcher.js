import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  LayoutAnimation,
  View
} =React;
import IncrementalGroup from 'IncrementalGroup'
import ChannelsByTopic from '../chatsTab/channelsByTopic'
import Channel from '../channel/channel'
import Message from '../channel/message'
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
			tab=['#4A90E2','#D0021B','#D0021B','#D0021B','#F5A623',
				'#BD10E0','#BD10E0','#4A90E2','#4A90E2','#D0021B','#D0021B','#D0021B','#F5A623',
				].map((color,i)=>{
					if(i>2) return  <IncrementalGroup disabled={false}><Message key={i} index={i} color={color}/></IncrementalGroup>
					return <Message key={i} index={i} color={color}/>})
		}else{
			tab=['#F5A623','#BD10E0','#BD10E0','#BD10E0','#4A90E2','#4A90E2','#D0021B','#D0021B','#D0021B','#F5A623',
		
				].map((color,i)=>{
					if(i>2) return  <IncrementalGroup disabled={false}><Message key={i} index={i} color={color}/></IncrementalGroup>
					return <Message key={i} index={i} color={color}/>})

			
		}
		return (

			<View style={{flex:1}}>
				

				{tab}

			</View>

			)
	}

};
Object.assign(Switcher.prototype, TimerMixin);