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
			<View style={{flex:1,backgroundColor:'rgb(245,245,245)'}}>
			<ScrollView contentContainerStyle={{marginTop:20,marginBottom:20}}>
				<Text style={{margin:10,color:'rgb(80,80,80)',fontSize:16,fontWeight:'600'}}>Options</Text>

				<View style={{height:1,width:300*k,backgroundColor:'rgb(230,230,230)',}}/>
				<TouchableOpacity>
					<View style={{backgroundColor:'white',alignItems:'center',paddingLeft:15,
							flexDirection:'row',height:50*k,width:300*k}}>
						<Text style={{fontSize:16}}>Channel's media</Text>
					</View>
				</TouchableOpacity>
				<View style={{height:1,width:300*k,backgroundColor:'rgb(230,230,230)',}}/>
				<TouchableOpacity>
					<View style={{backgroundColor:'white',alignItems:'center',paddingLeft:15,
							flexDirection:'row',height:50*k,width:300*k}}>
						<Text style={{fontSize:16}}>Mentions</Text>
					</View>
				</TouchableOpacity>
				<View style={{height:1,width:300*k,backgroundColor:'rgb(230,230,230)',}}/>
				<TouchableOpacity>
					<View style={{backgroundColor:'white',alignItems:'center',paddingLeft:15,
							flexDirection:'row',height:50*k,width:300*k}}>
						<Text style={{fontSize:16}}>Notificaiton settings</Text>
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
				<Text style={{margin:10,color:'rgb(80,80,80)',fontSize:16,fontWeight:'600'}}>Joined</Text>
				<View style={{height:1,width:300*k,backgroundColor:'rgb(230,230,230)',}}/>
				<TouchableWithoutFeedback>
					<View style={{flexDirection:'row',height:65*k,padding:10,alignItems:'center',justifyContent:'space-between',backgroundColor:'white'}}>
						<View style={{flexDirection:'row',...center}}>
							<Image source={{uri:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQc364GqLLnhfFllhF91hAGVCyJ-MO3JZuA6DN3uZtbQi4KWCgv'}} 
									style={{borderRadius:5*k,width:45*k,height:45*k}}/>
							<View style={{margin:10,marginTop:0}}>
								<Text style={{fontSize:18,fontWeight:'bold',color:'rgb(80,80,80)',marginTop:5}}>Joseph</Text>
								<Text style={{fontSize:14,fontWeight:'500',color:'rgb(80,80,80)',marginTop:5}}>Karma: 800</Text>
							</View>
						</View>
						<View style={{height:9,width:9,borderRadius:5,backgroundColor:'green',marginRight:5}}/>
					</View>
				</TouchableWithoutFeedback>
				<View style={{height:1,width:300*k,backgroundColor:'rgb(230,230,230)',}}/>
				<TouchableWithoutFeedback>
					<View style={{flexDirection:'row',height:65*k,padding:10,alignItems:'center',justifyContent:'space-between',backgroundColor:'white'}}>
						<View style={{flexDirection:'row',...center}}>
							<Image source={{uri:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQc364GqLLnhfFllhF91hAGVCyJ-MO3JZuA6DN3uZtbQi4KWCgv'}} 
									style={{borderRadius:5*k,width:45*k,height:45*k}}/>
							<View style={{margin:10,marginTop:0}}>
								<Text style={{fontSize:18,fontWeight:'bold',color:'rgb(80,80,80)',marginTop:5}}>Joseph</Text>
								<Text style={{fontSize:14,fontWeight:'500',color:'rgb(80,80,80)',marginTop:5}}>Karma: 800</Text>
							</View>
						</View>
						<View style={{height:9,width:9,borderRadius:5,backgroundColor:'green',marginRight:5}}/>
					</View>
				</TouchableWithoutFeedback>
				<View style={{height:1,width:300*k,backgroundColor:'rgb(230,230,230)',}}/>
				<TouchableWithoutFeedback>
					<View style={{flexDirection:'row',height:65*k,padding:10,alignItems:'center',justifyContent:'space-between',backgroundColor:'white'}}>
						<View style={{flexDirection:'row',...center}}>
							<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqtoCVUpVbxMyTwuExep1uQP83F9IhpAMF9Opez7WXICXZMi12Ag'}} 
									style={{borderRadius:5*k,width:45*k,height:45*k}}/>
							<View style={{margin:10,marginTop:0}}>
								<Text style={{fontSize:18,fontWeight:'bold',color:'rgb(80,80,80)',marginTop:5}}>Joseph</Text>
								<Text style={{fontSize:14,fontWeight:'500',color:'rgb(80,80,80)',marginTop:5}}>Karma: 800</Text>
							</View>
						</View>
						<View style={{height:9,width:9,borderRadius:5,backgroundColor:'green',marginRight:5}}/>
					</View>
				</TouchableWithoutFeedback>
				<View style={{height:1,width:300*k,backgroundColor:'rgb(230,230,230)',}}/>
				<TouchableWithoutFeedback>
					<View style={{flexDirection:'row',height:65*k,padding:10,alignItems:'center',justifyContent:'space-between',backgroundColor:'white'}}>
						<View style={{flexDirection:'row',...center}}>
							<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqtoCVUpVbxMyTwuExep1uQP83F9IhpAMF9Opez7WXICXZMi12Ag'}} 
									style={{borderRadius:5*k,width:45*k,height:45*k}}/>
							<View style={{margin:10,marginTop:0}}>
								<Text style={{fontSize:18,fontWeight:'bold',color:'rgb(80,80,80)',marginTop:5}}>Joseph</Text>
								<Text style={{fontSize:14,fontWeight:'500',color:'rgb(80,80,80)',marginTop:5}}>Karma: 800</Text>
							</View>
						</View>
						<View style={{height:9,width:9,borderRadius:5,backgroundColor:'green',marginRight:5}}/>
					</View>
				</TouchableWithoutFeedback>
				<View style={{height:1,width:300*k,backgroundColor:'rgb(230,230,230)',}}/>
				<TouchableWithoutFeedback>
					<View style={{flexDirection:'row',height:65*k,padding:10,alignItems:'center',justifyContent:'space-between',backgroundColor:'white'}}>
						<View style={{flexDirection:'row',...center}}>
							<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqtoCVUpVbxMyTwuExep1uQP83F9IhpAMF9Opez7WXICXZMi12Ag'}} 
									style={{borderRadius:5*k,width:45*k,height:45*k}}/>
							<View style={{margin:10,marginTop:0}}>
								<Text style={{fontSize:18,fontWeight:'bold',color:'rgb(80,80,80)',marginTop:5}}>Joseph</Text>
								<Text style={{fontSize:14,fontWeight:'500',color:'rgb(80,80,80)',marginTop:5}}>Karma: 800</Text>
							</View>
						</View>
						<View style={{height:9,width:9,borderRadius:5,backgroundColor:'green',marginRight:5}}/>
					</View>
				</TouchableWithoutFeedback>
				<View style={{height:1,width:300*k,backgroundColor:'rgb(230,230,230)',}}/>


			</ScrollView>
			</View>

			)
	}

};
Object.assign(ChannelOptions.prototype, TimerMixin);