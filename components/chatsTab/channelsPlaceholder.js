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
export default class ChannelPlaceholder extends Component{
	state={};
	goToChannel(channel){
		buttonClicks({action:'navigation push',nav:'topNav',name:'channel',info:channel})
	}
	render(){
		let gray='rgb(230,230,230)'
		return (
			<View style={{flex:1,backgroundColor:'white'}}>
			<View style={{height:0.5,width:320*k,backgroundColor:'rgb(225,225,225)'}}/>
			
			<View style={{height:100*k,flexDirection:'row',...center,}}>
				<View style={{width:80*k,height:80*k,marginRight:4*k,borderRadius:3*k,backgroundColor:gray}}/>
				<View style={{marginLeft:3*k,flexDirection:'row',width:210*k,alignItems:'center'}}>	
					<View style={{height:80*k, }}>
						<View style={{marginTop:3*k,margin:6*k,marginTop:8*k,borderRadius:5,marginLeft:0,width:180*k,height:8*k,backgroundColor:gray}}/>
						<View style={{margin:6*k,marginLeft:0,marginTop:15*k,borderRadius:5,backgroundColor:gray,height:5*k,width:100*k}}/>
						<Text style={{margin:6*k,marginLeft:0, marginTop:15*k,borderRadius:5,height:5*k,backgroundColor:gray,width:80*k}}/>
					</View>
				</View>
			</View>
			<View style={{height:1,width:320*k,backgroundColor:'rgb(225,225,225)'}}/>

			<View style={{height:100*k,flexDirection:'row',...center,}}>
				<View style={{width:80*k,height:80*k,marginRight:4*k,borderRadius:3*k,backgroundColor:gray}}/>
				<View style={{marginLeft:3*k,flexDirection:'row',width:210*k,alignItems:'center'}}>	
					<View style={{height:80*k, }}>
						<View style={{marginTop:3*k,margin:6*k,marginTop:8*k,borderRadius:5,marginLeft:0,width:180*k,height:8*k,backgroundColor:gray}}/>
						<View style={{margin:6*k,marginLeft:0,marginTop:15*k,borderRadius:5,backgroundColor:gray,height:5*k,width:100*k}}/>
						<Text style={{margin:6*k,marginLeft:0, marginTop:15*k,borderRadius:5,height:5*k,backgroundColor:gray,width:80*k}}/>
					</View>
				</View>
			</View>
			<View style={{height:1,width:320*k,backgroundColor:'rgb(225,225,225)'}}/>

			<View style={{height:100*k,flexDirection:'row',...center,}}>
				<View style={{width:80*k,height:80*k,marginRight:4*k,borderRadius:3*k,backgroundColor:gray}}/>
				<View style={{marginLeft:3*k,flexDirection:'row',width:210*k,alignItems:'center'}}>	
					<View style={{height:80*k, }}>
						<View style={{marginTop:3*k,margin:6*k,marginTop:8*k,borderRadius:5,marginLeft:0,width:180*k,height:8*k,backgroundColor:gray}}/>
						<View style={{margin:6*k,marginLeft:0,marginTop:15*k,borderRadius:5,backgroundColor:gray,height:5*k,width:100*k}}/>
						<Text style={{margin:6*k,marginLeft:0, marginTop:15*k,borderRadius:5,height:5*k,backgroundColor:gray,width:80*k}}/>
					</View>
				</View>
			</View>
			<View style={{height:1,width:320*k,backgroundColor:'rgb(225,225,225)'}}/>

			<View style={{height:100*k,flexDirection:'row',...center,}}>
				<View style={{width:80*k,height:80*k,marginRight:4*k,borderRadius:3*k,backgroundColor:gray}}/>
				<View style={{marginLeft:3*k,flexDirection:'row',width:210*k,alignItems:'center'}}>	
					<View style={{height:80*k, }}>
						<View style={{marginTop:3*k,margin:6*k,marginTop:8*k,borderRadius:5,marginLeft:0,width:180*k,height:8*k,backgroundColor:gray}}/>
						<View style={{margin:6*k,marginLeft:0,marginTop:15*k,borderRadius:5,backgroundColor:gray,height:5*k,width:100*k}}/>
						<Text style={{margin:6*k,marginLeft:0, marginTop:15*k,borderRadius:5,height:5*k,backgroundColor:gray,width:80*k}}/>
					</View>
				</View>
			</View>
			<View style={{height:1,width:320*k,backgroundColor:'rgb(225,225,225)'}}/>

			<View style={{height:100*k,flexDirection:'row',...center,}}>
				<View style={{width:80*k,height:80*k,marginRight:4*k,borderRadius:3*k,backgroundColor:gray}}/>
				<View style={{marginLeft:3*k,flexDirection:'row',width:210*k,alignItems:'center'}}>	
					<View style={{height:80*k, }}>
						<View style={{marginTop:3*k,margin:6*k,marginTop:8*k,borderRadius:5,marginLeft:0,width:180*k,height:8*k,backgroundColor:gray}}/>
						<View style={{margin:6*k,marginLeft:0,marginTop:15*k,borderRadius:5,backgroundColor:gray,height:5*k,width:100*k}}/>
						<Text style={{margin:6*k,marginLeft:0, marginTop:15*k,borderRadius:5,height:5*k,backgroundColor:gray,width:80*k}}/>
					</View>
				</View>
			</View>
			<View style={{height:1,width:320*k,backgroundColor:'rgb(225,225,225)'}}/>

			</View>

			)
	}

};
Object.assign(ChannelPlaceholder.prototype, TimerMixin);