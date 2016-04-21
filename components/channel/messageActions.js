import TimerMixin from 'react-timer-mixin'
import s from '../../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  TouchableOpacity,
  Text,
  Image,
  View
} =React;
import {buttonClicks} from '../../actions/buttonClicks'
export default class MessageActions extends Component{
	state={};
	viewLine(){
		buttonClicks({action:'close'})
		buttonClicks({action:'navigation push',name:'line',nav:'channelNav',info:this.props})
	}
	reply(){
		buttonClicks({action:'close',})
		buttonClicks({action:'reply pressed',to:'Johnnrdino'})
	}
	render(){
		return (

			<View style={{flex:1}}>
					<View style={{width:265*k,height:1,backgroundColor:'rgb(210,210,210)',marginLeft:15*k,marginBottom:0}}/>
				
				<TouchableOpacity onPress={this.reply.bind(this)} style={{...center,width:265*k,height:60*k,marginLeft:15*k,}}>
					<View style={{flexDirection:'row',...center}}>
					<Image source={{uri:'reply',isStatic:true}} style={{width:24*k,height:17*k}}/>
					<Text style={{fontSize:18,marginLeft:10*k}}>Reply</Text></View>

				</TouchableOpacity>
					<View style={{width:265*k,height:1,backgroundColor:'rgb(210,210,210)',marginLeft:15*k,marginBottom:0}}/>

				<TouchableOpacity 
					onPress={this.viewLine.bind(this)}
				 style={{...center,width:265*k,height:60*k,marginLeft:15*k,}}>
					<View style={{flexDirection:'row',...center}}>
					<View style={{width:2,height:20*k,backgroundColor:this.props.color}}/>
					<Text style={{fontSize:18,marginLeft:10*k}}>View Line</Text></View>
				</TouchableOpacity>
					<View style={{width:265*k,height:1,backgroundColor:'rgb(210,210,210)',marginLeft:15*k,marginBottom:0}}/>

		
				<TouchableOpacity style={{...center,width:265*k,height:60*k,marginLeft:15*k,}}>
					<View style={{flexDirection:'row',...center}}>
					<Image source={{uri:'copy',isStatic:true}} style={{width:15*k,height:20*k}}/>
					<Text style={{fontSize:18,marginLeft:10*k}}>Copy Text</Text></View>
				</TouchableOpacity>
					<View style={{width:265*k,height:1,backgroundColor:'rgb(210,210,210)',marginLeft:15*k,marginBottom:0}}/>

				<TouchableOpacity style={{...center,width:265*k,height:60*k,marginLeft:15*k,}}>
					<View style={{flexDirection:'row',...center}}>
					<Image source={{uri:'facebook',isStatic:true}} style={{width:10*k,height:20*k}}/>
					<Text style={{fontSize:18,marginLeft:10*k}}>Share on Facebook</Text></View>
				</TouchableOpacity>
					<View style={{width:265*k,height:1,backgroundColor:'rgb(210,210,210)',marginLeft:15*k,marginBottom:0}}/>

				<TouchableOpacity style={{...center,width:265*k,height:60*k,marginLeft:15*k,}}>
					<View style={{flexDirection:'row',...center}}>
					<Image source={{uri:'twitter',isStatic:true}} style={{width:20*k,height:17*k}}/>
					<Text style={{fontSize:18,marginLeft:10*k}}>Share on Twitter</Text></View>
				</TouchableOpacity>
					<View style={{width:265*k,height:1,backgroundColor:'rgb(210,210,210)',marginLeft:15*k,marginBottom:0}}/>




			</View>

			)
	}

};
Object.assign(MessageActions.prototype, TimerMixin);