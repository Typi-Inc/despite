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
  SegmentedControlIOS,
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

					<View style={{marginTop:19,paddingTop:10,paddingBottom:10,padding:10,borderBottomWidth:1,borderColor:'rgb(230,230,230)',backgroundColor:'white'}}>
						<SegmentedControlIOS ref={el=>this.segmentedControl=el} values={['Directs', 'Channels']} 
						   tintColor={'black'} selectedIndex={0} style={{fontSize:18,height:35,backgroundColor:'white',margin:10*k,marginBottom:0,marginTop:0}}
						   onValueChange={(e)=>{
						   		if (e==='Directs') {
						   			this.switch(0)
						   		}else if(e==='Channels'){
						   			this.switch(1)
						   		}
						   }}
						   />	
					   </View>



				<Animated.View style={{flex:1,top:75,bottom:0,position:'absolute',left:this.anim.interpolate({inputRange:[0,1],outputRange:[0,320*k]})}}>
					<ScrollView>

						<Direct notification={{message:'help'}} backgroundColor={'rgb(255,255,255)'}/>
						<Direct  backgroundColor={'rgb(255,255,255)'}/>
						<Direct notification={{message:'help'}} backgroundColor={'rgb(255,255,255)'}/>
						<Direct  backgroundColor={'rgb(255,255,255)'}/>
						<Direct notification={{message:'help'}} backgroundColor={'rgb(255,255,255)'}/>
						<Direct  backgroundColor={'rgb(255,255,255)'}/>
						<Direct notification={{message:'help'}} backgroundColor={'rgb(255,255,255)'}/>
						<Direct  backgroundColor={'rgb(255,255,255)'}/>
						

	 

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

