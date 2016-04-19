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
export default class ProfileCard extends Component{
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

			<View style={{flex:1,justifyContent:'center',paddingBottom:20,marginLeft:20*k,marginRight:20*k,}}>
				<View style={{flexDirection:'row',height:90*k,padding:10,alignItems:'center',}}>
						
					<Image source={{uri:this.props.profile.image}} 
							style={{borderRadius:5*k,width:60*k,height:60*k}}/>
					<View style={{margin:10,marginTop:0}}>
						<Text style={{fontSize:20,fontWeight:'bold',color:'rgb(80,80,80)',marginTop:5}}>{this.props.profile.name } </Text>
						<Text style={{fontSize:16,fontWeight:'500',color:'rgb(80,80,80)',marginTop:5}}>Karma: {this.props.profile.karma}</Text>
					</View>
				</View>


				<TouchableOpacity style ={{margin:10,marginLeft:15*k,marginRight:15*k,padding:20,paddingTop:15,paddingBottom:15,...center,borderRadius:10,borderColor:'rgb(14,122,254)',borderWidth:1}}>

					<Text style={{color:'rgb(14,122,254)',fontSize:15}}>Reply to user</Text>


				</TouchableOpacity>
				<TouchableOpacity style ={{margin:10,marginLeft:15*k,marginRight:15*k,padding:20,paddingTop:15,paddingBottom:15,...center,borderRadius:10,borderColor:'rgb(14,122,254)',borderWidth:1}}>

					<Text style={{color:'rgb(14,122,254)',fontSize:15}}>Send a direct</Text>


				</TouchableOpacity>
				<TouchableOpacity style ={{margin:10,marginLeft:15*k,marginRight:15*k,padding:20,paddingTop:15,paddingBottom:15,...center,borderRadius:10,borderColor:'rgb(220,0,0)',borderWidth:1}}>

					<Text style={{fontSize:15,color:'rgb(230,0,0)'}}>Block user</Text>


				</TouchableOpacity>




				
			</View>

			)
	}

};
Object.assign(ProfileCard.prototype, TimerMixin);