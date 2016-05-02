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
		// console.log("==================", arguments)
		console.log('here')
		buttonClicks({action:'navigation push',nav:'topNav',name:'channel',info:channel,messageId:5})
		buttonClicks({action:'measure position',index:5})

	}
	render(){
		return (
			<View>
			<View style={{height:0.5,width:320*k,backgroundColor:'rgb(225,225,225)'}}/>
			<TouchableOpacity onPress={()=>this.goToChannel(this.props.channel)}>
				<View style={{flexDirection:'row',padding:5,alignItems:'center'}}>
					<Image style={{width:70*k,height:70*k,marginRight:4*k,borderRadius:3*k,}} source={{uri:this.props.channel.image}}/>
					<View style={{marginLeft:3*k,flexDirection:'row',flex:1}}>	
						<View>
							
							<View style={{margin:4, flexDirection:'row',justifyContent:'space-between', alignItems:'center',width:240*k}}>
								<Text style={{fontSize:16,fontWeight:'600',color:'rgb(80,80,80)',flex:6}}>#{this.props.channel.title}</Text>
								<Text style={{color:'rgb(140,140,140)',flex:1.6}}>{this.props.channel.lastTime}</Text>

							</View>
							<View style={{margin:4, flexDirection:'row',justifyContent:'space-between', alignItems:'center',width:240*k}}>

								<Text style={{fontSize:14,color:'rgb(140,140,140)',flex:6}}>{this.props.channel.memberCount} members</Text>
								{this.props.channel.counter>0?<View style={{flex:.5,marginRight:15,...center,
									padding:5,paddingTop:2,paddingBottom:2,borderRadius:10,backgroundColor:'rgb(14,122,254)'}}>
										<Text style={{color:'white',fontWeight:'500'}}>{this.props.channel.counter}</Text>
								</View>:null}
							</View>
							<Text style={{margin:4,fontSize:14,color:'rgb(80,80,80)'}}>{this.props.channel.currentlyOnline} online</Text>
						</View>
					</View>
					
				</View>
			</TouchableOpacity>
			<View style={{height:0.5,width:320*k,backgroundColor:'rgb(225,225,225)'}}/>
			</View>

			)
	}

};
Object.assign(ChannelItem.prototype, TimerMixin);