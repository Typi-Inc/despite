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
import TopicPager from '../chatsTab/topicPager'
export default class Profile extends Component{
	state={};
	render(){
		return (

			<View style={{backgroundColor:'rgb(245,245,245)',flex:1}}>

				<ScrollView>

					<View style={{backgroundColor:'white',flexDirection:'row',height:80*k,width:320*k,marginBottom:10,padding:10,alignItems:'center'}}>
						<Image source={{uri:'http://www.binarytradingforum.com/core/image.php?userid=27&dateline=1355305878'}} 
								style={{borderRadius:5*k,width:60*k,height:60*k}}/>
						<View style={{margin:10,width:150*k,}}>
							<Text style={{fontSize:16,fontWeight:'bold',color:'rgb(80,80,80)'}}>Johnnrdino</Text>
							<Text style={{fontSize:14,fontWeight:'500',color:'rgb(80,80,80)',marginTop:5}}>Karma: 456</Text>
						</View>
						<TouchableOpacity style={{...center,left:10*k,padding:14,paddingTop:7,paddingBottom:7,borderRadius:5*k,borderColor:'black',borderWidth:1}}>
							<Text>Edit</Text>
						</TouchableOpacity>

					</View>

					<TouchableOpacity><View style={{backgroundColor:'white',alignItems:'center',paddingLeft:15,flexDirection:'row',height:50*k,width:320*k,}}>
						<Text style={{fontSize:16}}>Saved messages</Text>	

					</View></TouchableOpacity>
					<View style={{height:1,width:320*k,backgroundColor:'rgb(235,235,235)'}}/>
					<TouchableOpacity><View style={{backgroundColor:'white',alignItems:'center',paddingLeft:15,flexDirection:'row',height:50*k,width:320*k}}>
						<Text style={{fontSize:16}}>Business channels</Text>

					</View></TouchableOpacity>
					<View style={{height:1,width:320*k,backgroundColor:'rgb(235,235,235)'}}/>
					<TouchableOpacity><View style={{backgroundColor:'white',alignItems:'center',paddingLeft:15,flexDirection:'row',height:50*k,width:320*k}}>
						<Text style={{fontSize:16}}>Joined channels</Text>

					</View></TouchableOpacity>
					<View style={{height:1,width:320*k,backgroundColor:'rgb(235,235,235)'}}/>
					<TouchableOpacity><View style={{backgroundColor:'white',alignItems:'center',paddingLeft:15,flexDirection:'row',height:50*k,width:320*k}}>
						<Text style={{fontSize:16}}>My channels</Text>

					</View></TouchableOpacity>


				</ScrollView>
			</View>

			)
	}

};
Object.assign(Profile.prototype, TimerMixin);