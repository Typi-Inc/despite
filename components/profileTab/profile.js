import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  View
} =React;
import {buttonClicks} from '../../actions/buttonClicks'
import TopicPager from '../chatsTab/topicPager'
export default class Profile extends Component{
	state={};
	showEdit(){
		buttonClicks({name:'edit',action:'navigation push',nav:'profileNav',title:'Edit',info:{what:'going to edit'}})
	}
	showDirects(){
		buttonClicks({name:'directs',action:'navigation push',nav:'profileNav',title:'Directs',info:{what:'going to edit'}})
	}
	showMyChannels(){
		buttonClicks({name:'myChannels',action:'navigation push',nav:'profileNav',title:'My channels',info:{what:'going to edit'}})
	}
	showSaved(){
		buttonClicks({name:'saved',action:'navigation push',nav:'profileNav',title:'Saved',info:{what:'going to edit'}})
	}
	showBusiness(){
		buttonClicks({name:'business',action:'navigation push',nav:'profileNav',title:'Business channels',info:{what:'going to edit'}})
	}
	showSettings(){
		buttonClicks({name:'settings',action:'navigation push',nav:'profileNav',title:'Settings',info:{what:'going to edit'}})
	}
	render(){
		return (

			<View style={{backgroundColor:'rgb(245,245,245)',flex:1}}>

				<ScrollView>
					<View style={{height:1,width:320*k,backgroundColor:'rgb(230,230,230)'}}/>

					<View style={{backgroundColor:'white',flexDirection:'row',height:100*k,width:320*k,padding:10,alignItems:'center'}}>
						<Image source={{uri:'http://www.binarytradingforum.com/core/image.php?userid=27&dateline=1355305878'}} 
								style={{borderRadius:5*k,width:65*k,height:65*k}}/>
						<View style={{margin:10,width:150*k,}}>
							<Text style={{fontSize:16,fontWeight:'bold',color:'rgb(80,80,80)'}}>Johnnrdino</Text>
							<Text style={{fontSize:14,fontWeight:'500',color:'rgb(80,80,80)',marginTop:5}}>Karma: 456</Text>
						</View>
						<TouchableOpacity onPress={this.showEdit.bind(this)} style={{...center,left:10*k,padding:14,paddingTop:7,paddingBottom:7,borderRadius:5*k,borderColor:'black',borderWidth:1}}>
							<Text>Edit</Text>
						</TouchableOpacity>

					</View>
					<View style={{height:1,width:320*k,backgroundColor:'rgb(230,230,230)',marginBottom:20,}}/>

					<View style={{height:1,width:320*k,backgroundColor:'rgb(230,230,230)'}}/>

					<TouchableOpacity onPress={this.showDirects.bind(this)}><View style={{justifyContent:'space-between',backgroundColor:'white',alignItems:'center',paddingLeft:15,flexDirection:'row',height:50*k,width:320*k,}}>
						
						<Text style={{fontSize:16}}>Direct messages</Text>	
						<View style={{padding:7,paddingTop:5,paddingBottom:5,...center,backgroundColor:'black',borderRadius:5,marginRight:15}}>
							<Text style={{fontSize:13,color:'white'}}>14</Text>
						</View>

					</View></TouchableOpacity>
					<View style={{height:1,width:320*k,backgroundColor:'rgb(230,230,230)'}}/>
					<TouchableOpacity onPress={this.showMyChannels.bind(this)}><View style={{backgroundColor:'white',alignItems:'center',paddingLeft:15,flexDirection:'row',height:50*k,width:320*k}}>
						<Text style={{fontSize:16}}>My channels</Text>

					</View></TouchableOpacity>
					<View style={{height:1,width:320*k,backgroundColor:'rgb(230,230,230)'}}/>
					<TouchableOpacity onPress={this.showSaved.bind(this)}><View style={{backgroundColor:'white',alignItems:'center',paddingLeft:15,flexDirection:'row',height:50*k,width:320*k}}>
						<Text style={{fontSize:16}}>Saved messages</Text>

					</View></TouchableOpacity>
					<View style={{height:1,width:320*k,backgroundColor:'rgb(230,230,230)'}}/>
					<TouchableOpacity onPress={this.showBusiness.bind(this)}><View style={{backgroundColor:'white',alignItems:'center',paddingLeft:15,flexDirection:'row',height:50*k,width:320*k}}>
						<Text style={{fontSize:16}}>Business Responses</Text>

					</View></TouchableOpacity>
					<View style={{height:1,width:320*k,backgroundColor:'rgb(230,230,230)',marginBottom:20,}}/>

					<View style={{height:1,width:320*k,backgroundColor:'rgb(230,230,230)'}}/>

					<TouchableOpacity onPress={this.showSettings.bind(this)}><View style={{backgroundColor:'white',alignItems:'center',paddingLeft:15,flexDirection:'row',height:50*k,width:320*k,}}>
						<Text style={{fontSize:16}}>Settings</Text>	

					</View></TouchableOpacity>
					<View style={{height:1,width:320*k,backgroundColor:'rgb(230,230,230)'}}/>



				</ScrollView>
			</View>

			)
	}

};
Object.assign(Profile.prototype, TimerMixin);