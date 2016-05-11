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
  TouchableWithoutFeedback,
  SegmentedControlIOS,
  View
} =React;
import {directs} from '../mock'
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
					<View style={{width:320*k,height:1,backgroundColor:'black',}}/>

					<View style={{width:320*k,flexDirection:'row',height:70,borderBottomWidth:.5,borderColor:'rgb(215,215,215)',
						...center,paddingTop:14,}}>

						<TouchableWithoutFeedback style={{padding:10,...center,flex:1}} onPress={this.switch.bind(this,0)}>

							<Animated.View style={{flex:1,height:40,...center}}>
							
							<Animated.Text style={{//textDecorationLine:this.anim.interpolate({inputRange:[0,1],outputRange:['underline','none']}),
								color:this.anim.interpolate({inputRange:[0,1],outputRange:['black','rgb(150,150,150)']}),
								fontSize:18,fontWeight:'600',
							}}>Directs</Animated.Text>
							
							<Text style={{color:'rgb(14,122,254)'}}>3 unread</Text>

								</Animated.View>
						</TouchableWithoutFeedback>
					<View style={{height:50,width:1,backgroundColor:'rgb(215,215,215)',marginTop:5}}/>
						<TouchableWithoutFeedback style={{flex:1,padding:10,...center}} onPress={this.switch.bind(this,1)}>
					<Animated.View style={{flex:1,height:40,...center}}>
					

							<Animated.Text style={{//textDecorationLine:this.anim.interpolate({inputRange:[0,1],outputRange:['none','underline']}),
								color:this.anim.interpolate({inputRange:[0,1],outputRange:['rgb(150,150,150)','black']}),
								fontSize:18,fontWeight:'600'
							}}>Channels</Animated.Text>
							<Animated.View/>
							<Text style={{color:'rgb(14,122,254)'}}>5 unread</Text>
					</Animated.View>

						</TouchableWithoutFeedback>
				</View>



				<Animated.View style={{flex:1,top:70,bottom:0,position:'absolute',left:this.anim.interpolate({inputRange:[0,1],outputRange:[0,320*k]})}}>
					<ScrollView>
					
						{directs.map((direct,i)=><View  key={i}><Direct  direct={direct}/></View>
					

						)}
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

