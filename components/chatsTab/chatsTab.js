import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
import s from '../../styles'
let {
  AppRegistry,
  Component,
  Text,
  Animated,
  ScrollView,
  TouchableOpacity,
  View
} =React;
import ChannelsByTopic from '../chatsTab/channelsByTopic'
import Direct from './direct'
export default class ChatsTab extends Component{
	state={};
	switch(val){
		Animated.timing(this.anim,{toValue:val,duration:1}).start()
	}
	render(){
		this.anim=this.anim || new Animated.Value(0)
		return (
			<View style={{flex:1}}>
				<View style={{width:320*k,flexDirection:'row',height:75,borderBottomWidth:.5,borderColor:'rgb(215,215,215)',
				...center,paddingTop:14,}}>

					<Animated.View style={{flex:1,height:40}}>
						<TouchableOpacity style={{padding:10,...center,flex:1}} onPress={this.switch.bind(this,0)}>
							<Animated.Text style={{color:this.anim.interpolate({inputRange:[0,1],outputRange:['black','rgb(150,150,150)']}),
								fontSize:18,fontWeight:'600'
							}}>Directs</Animated.Text>
						</TouchableOpacity>
					</Animated.View>
					<View style={{height:45,width:2,backgroundColor:'black',marginTop:15}}/>
					<Animated.View style={{flex:1,height:40}}>
						<TouchableOpacity style={{flex:1,padding:10,...center}} onPress={this.switch.bind(this,1)}>
							<Animated.Text style={{color:this.anim.interpolate({inputRange:[0,1],outputRange:['rgb(150,150,150)','black']}),
								fontSize:18,fontWeight:'600'
							}}>Channels</Animated.Text>
						</TouchableOpacity>
					</Animated.View>



				</View>
				<Animated.View style={{flex:1,top:75,bottom:0,position:'absolute',left:this.anim.interpolate({inputRange:[0,1],outputRange:[0,320*k]})}}>
					<ScrollView>

						<Direct backgroundColor={'rgb(255,255,255)'}/>
						<Direct  backgroundColor={'rgb(255,255,255)'}/>
						<Direct  backgroundColor={'rgb(255,255,255)'}/>
						<Direct  backgroundColor={'rgb(255,255,255)'}/>
						<Direct  backgroundColor={'rgb(255,255,255)'}/>
						<Direct backgroundColor={'rgb(255,255,255)'}/>
	 					<Direct backgroundColor={'rgb(255,255,255)'}/>
						<Direct  backgroundColor={'rgb(255,255,255)'}/>
						<Direct  backgroundColor={'rgb(255,255,255)'}/>
						<Direct  backgroundColor={'rgb(255,255,255)'}/>
						<Direct  backgroundColor={'rgb(255,255,255)'}/>
						<Direct backgroundColor={'rgb(255,255,255)'}/>
	 

					</ScrollView>
				</Animated.View>
				<Animated.View style={{backgroundColor:'blue',flex:1,
					left:this.anim.interpolate({inputRange:[0,1],outputRange:[-320*k,0]})}}>

					<ChannelsByTopic/>
				</Animated.View>



			</View>

			)
	}

};
Object.assign(ChatsTab.prototype, TimerMixin);

