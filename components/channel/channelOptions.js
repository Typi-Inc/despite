import TimerMixin from 'react-timer-mixin'
import s from '../../styles'
import React from 'react-native'; 
import {buttonClicks} from '../../actions/buttonClicks'
let {
  AppRegistry,
  Component,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} =React;
import ChannelsByTopic from '../chatsTab/channelsByTopic'
export default class ChannelOptions extends Component{
	state={};
	render(){
		return (

			<ScrollView contentInset={{top:10}}>
				<View style={{flexDirection:'row',  flexWrap: 'wrap'}}>
					<TouchableOpacity onPress={()=>buttonClicks({action:'close'})}><View style={{margin:10*k,width:120*k,height:120*k,borderRadius:12*k,...center,borderWidth:2,borderColor:'rgb(220,220,220)'}}>
						<Image source={{uri:'files',isStatic:true}} style={{width:13*k,height:26*k,margin:15*k}}/>
						<Text>Files</Text>
					</View></TouchableOpacity>
					<TouchableOpacity><View style={{margin:10*k,width:120*k,height:120*k,borderRadius:12*k,...center,borderWidth:2,borderColor:'rgb(220,220,220)'}}>
						<Image source={{uri:'saved',isStatic:true}} style={{width:16*k,height:22*k,margin:15*k}}/>
						<Text>Saved</Text>
					</View></TouchableOpacity>
					<TouchableOpacity><View style={{margin:10*k,width:120*k,height:120*k,borderRadius:12*k,...center,borderWidth:2,borderColor:'rgb(220,220,220)'}}>
						<Image source={{uri:'members',isStatic:true}} style={{width:25*k,height:16*k,margin:15*k}}/>
						<Text>Members</Text>
					</View></TouchableOpacity>
					<TouchableOpacity><View style={{margin:10*k,width:120*k,height:120*k,borderRadius:12*k,...center,borderWidth:2,borderColor:'rgb(220,220,220)'}}>
						<Image source={{uri:'invite',isStatic:true}} style={{width:24*k,height:24*k,margin:15*k}}/>
						<Text>Invite</Text>
					</View></TouchableOpacity>
				</View>

			</ScrollView>

			)
	}

};
Object.assign(ChannelOptions.prototype, TimerMixin);