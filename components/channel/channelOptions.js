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
  TouchableWithoutFeedback,
  View
} =React;
import ChannelsByTopic from '../chatsTab/channelsByTopic'
export default class ChannelOptions extends Component{
	state={};
	render(){
		return (
			<View style={{flex:1,backgroundColor:'rgb(245,245,245)',borderTopWidth:1,borderColor:'rgb(230,230,230)'}}>
			<ScrollView contentContainerStyle={{marginTop:10,marginBottom:20}}>
				<Text style={{margin:10,color:'rgb(80,80,80)',fontSize:16,fontWeight:'600'}}>Options</Text>
				<View style={{height:1,width:300*k,backgroundColor:'rgb(230,230,230)',}}/>

				<View style={{flexDirection:'row'}}>
					<TouchableOpacity>
						<View style={{//borderRightWidth:1,borderColor:'rgb(230,230,230)',
								backgroundColor:'white',...center,
								height:100*k,width:100*k}}>
								<View style={{...center,padding:10*k,marginBottom:10,borderRadius:30,borderWidth:2,borderColor:'rgb(220,220,220)'}}>
								<Image source={{uri:'media',isStatic:true}} style={{height:20,width:20}}/>
								</View>
							<Text style={{color:'rgb(80,80,80)',fontWeight:'500',fontSize:13}}>Members</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity>
						<View style={{//borderRightWidth:1,borderColor:'rgb(230,230,230)',
								backgroundColor:'white',...center,
								height:100*k,width:100*k}}>
								<View style={{...center,padding:10*k,marginBottom:10,borderRadius:30,borderWidth:2,borderColor:'rgb(220,220,220)'}}>
								<Image source={{uri:'mentions',isStatic:true}} style={{height:20,width:20}}/>
								</View>
							<Text style={{color:'rgb(80,80,80)',fontWeight:'500',fontSize:13}}>Mentions</Text>
							
						</View>
					</TouchableOpacity>
					<TouchableOpacity>
						<View style={{backgroundColor:'white',...center,
								height:100*k,width:100*k}}>
								<View style={{...center,padding:10*k,marginBottom:10,borderRadius:30,borderWidth:2,borderColor:'rgb(220,220,220)'}}>
							<Image source={{uri:'settings',isStatic:true}} style={{height:20,width:20}}/>
							</View>
							<Text style={{color:'rgb(80,80,80)',fontWeight:'500',fontSize:13}}>Settings</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View style={{height:1,width:300*k,backgroundColor:'rgb(230,230,230)',}}/>
				<TouchableOpacity>
					<View style={{backgroundColor:'white',alignItems:'center',paddingLeft:15,
							flexDirection:'row',height:50*k,width:300*k}}>
						<Text style={{fontSize:16,color:'red'}}>Remove channel</Text>
					</View>
				</TouchableOpacity>
				<View style={{height:1,width:300*k,backgroundColor:'rgb(230,230,230)',marginBottom:20}}/>

				<Text style={{margin:10,color:'rgb(80,80,80)',fontSize:16,fontWeight:'600'}}>Admin of #channelName</Text>
				<View style={{height:1,width:300*k,backgroundColor:'rgb(230,230,230)',}}/>
				<TouchableWithoutFeedback>
					<View style={{flexDirection:'row',height:65*k,padding:10,alignItems:'center',justifyContent:'space-between',backgroundColor:'white'}}>
						<View style={{flexDirection:'row',...center}}>
							<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDnuRSeeyPve7KwDvJJ6OBzj3gyghwLcE2z9kZeYBOyZavh3mw'}} 
									style={{borderRadius:5*k,width:45*k,height:45*k}}/>
							<View style={{margin:10,marginTop:0}}>
								<Text style={{fontSize:18,fontWeight:'bold',color:'rgb(80,80,80)',marginTop:5}}>Joseph</Text>
								<Text style={{fontSize:14,fontWeight:'500',color:'rgb(80,80,80)',marginTop:5}}>Karma: 800</Text>
							</View>
						</View>
						<View style={{height:9,width:9,borderRadius:5,backgroundColor:'green',marginRight:5}}/>
					</View>
				</TouchableWithoutFeedback>
				<View style={{height:1,width:300*k,backgroundColor:'rgb(230,230,230)',marginBottom:20}}/>
				

			</ScrollView>
			</View>

			)
	}

};
Object.assign(ChannelOptions.prototype, TimerMixin);