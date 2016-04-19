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
import {buttonClicks} from '../../actions/buttonClicks'
export default class ChannelItem extends Component{
	state={};
	goToChannel(channel){
		buttonClicks({action:'navigation push',nav:'topNav',name:'channel',info:channel})
	}
	render(){
		return (
			<View>
			<View style={{height:0.5,width:320*k,backgroundColor:'rgb(225,225,225)'}}/>
			<TouchableOpacity onPress={this.goToChannel.bind(this,this.props.channel)}>
				<View style={{height:90*k,flexDirection:'row',padding:10,alignItems:'center'}}>
					<Image style={{width:70*k,height:70*k,marginRight:4*k,borderRadius:3*k,}} source={{uri:this.props.channel.image}}/>
					<View style={{marginLeft:3*k,flexDirection:'row',width:210*k}}>	
						<View style={{height:80*k, marginTop:5*k}}>
							<Text style={{margin:3*k,marginLeft:0,fontSize:15,fontWeight:'500',width:200*k}}>#{this.props.channel.title}</Text>
							<Text style={{margin:3*k,fontSize:14,marginLeft:0,color:'rgb(140,140,140)'}}>{this.props.channel.memberCount} members</Text>
							<Text style={{margin:4*k,marginTop:4*k,marginLeft:0,fontSize:14}}>{this.props.channel.currentlyOnline} online</Text>
						</View>
					</View>
					<Text style={{position:'absolute',top:28*k,right:10,color:'rgb(140,140,140)'}}>{this.props.channel.lastTime}</Text>
					{this.props.channel.counter>0?<View style={{position:'absolute',
					top:50*k,right:15,padding:6,paddingTop:2,paddingBottom:2,borderRadius:10,backgroundColor:'rgb(14,122,254)'}}>
						<Text style={{color:'white',fontWeight:'500'}}>{this.props.channel.counter}</Text>
					</View>:null}
				</View>
			</TouchableOpacity>
			<View style={{height:0.5,width:320*k,backgroundColor:'rgb(225,225,225)'}}/>
			</View>

			)
	}

};
Object.assign(ChannelItem.prototype, TimerMixin);