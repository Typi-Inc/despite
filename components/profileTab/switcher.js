import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  Animated,
  LayoutAnimation,
  View
} =React;
import Line from '../channel/line'
import Message from '../channel/message'
import {openAnimation} from '../animations'
export default class Switcher extends Component{
	state={};
	switch(val){
		Animated.timing(this.anim,{toValue:val,duration:1}).start()
	}
	render(){
		this.anim=this.anim || new Animated.Value(0)
		return (

			<View style={{flex:1}}>
				<Animated.View style={{flex:1,top:0,bottom:0,paddingLeft:3,
					position:'absolute',left:this.anim.interpolate({inputRange:[0,1],outputRange:[0,320*k]})}}>
					<Message color={'red'}/>
					<Message color={'red'}/>
					<Message color={'red'}/>
					
					<Message color={'red'}/>
					<Message color={'red'}/>
					<Message color={'red'}/>
				</Animated.View>
				<Animated.View style={{flex:1,
					left:this.anim.interpolate({inputRange:[0,1],outputRange:[-320*k,0]})}}>
					<Message color={'blue'}/>
					<Message color={'blue'}/>
					<Message color={'blue'}/>
					
					<Message color={'blue'}/>
					<Message color={'blue'}/>
					<Message color={'blue'}/>
				</Animated.View>

			</View>

			)
	}

};
Object.assign(Switcher.prototype, TimerMixin);


