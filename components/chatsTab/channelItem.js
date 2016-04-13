import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  Image,
  TouchableOpacity,
  View
} =React;
export default class ChannelItem extends Component{
	state={};
	render(){
		return (

			<TouchableOpacity >
				<View style={{height:100*k,flexDirection:'row',borderBottomWidth:0.5,
							borderColor:'rgb(200,200,200)',...center,}}>
					<Image style={{width:80*k,height:80*k,marginRight:6*k,borderRadius:3*k,}} source={{uri:this.props.channel.image}}/>
					<View style={{marginLeft:3*k,flexDirection:'row',width:210*k,borderLeftWidth:3,borderColor:this.props.channel.color}}>	
						<View style={{height:80*k, }}>
							<Text style={{margin:6*k,fontSize:15,fontWeight:'500',width:200*k}}>#{this.props.channel.title}</Text>
							<Text style={{margin:6*k,fontSize:14,color:'rgb(160,160,160)'}}>{this.props.channel.memberCount} members</Text>
							<Text style={{margin:6*k,fontSize:14}}>{this.props.channel.currentlyOnline} online</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>

			)
	}

};
Object.assign(ChannelItem.prototype, TimerMixin);