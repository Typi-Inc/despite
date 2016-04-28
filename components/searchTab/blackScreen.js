import TimerMixin from 'react-timer-mixin'
import s from '../../styles'
import React from 'react-native'; 
import {buttonClicks$} from '../../actions/buttonClicks'
import {openAnimation,keyboard} from '../animations'
var dismissKeyboard = require('dismissKeyboard');
let Dimensions = require('Dimensions');
let windowSize = Dimensions.get('window');

let {
  AppRegistry,
  Component,
  Text,
  Animated,
  TouchableOpacity,
  LayoutAnimation,
  DeviceEventEmitter,
  ScrollView,
  View
} =React;
import Topic from './topic'
import {topics} from '../mock'
export default class BlackScreen extends Component{
	state={what:'hell'};
	componentWillMount(){
	  	this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{
	  		if(x.action==='show black screen'){
	  			this.show()
	  		}else if(x.action==='hide black screen'){
	  			this.hide()
	  		}
	  		
	  	})
	  	 // this._keyboardWillShowSubscription= DeviceEventEmitter.addListener('keyboardWillShow', this.getHeight.bind(this));

	  }
	componentWillUnmount(){
	  	this.buttonClicksSubscription.unsubscribe()
	  	 // this._keyboardWillShowSubscription.remove()
	 }

	getHeight(e){
		this.keyboardHeight=e.height
		// this.background.setNativeProps({style:{height:windowSize.height-75-this.keyboardHeight}})
	}
	show(x){
		this.scroll.scrollTo({x:0,y:0,animated:false})
		Animated.timing(this.anim,{toValue:1,duration:10}).start()
	}
	hide(){
		Animated.timing(this.anim,{toValue:0,duration:10}).start()
	}
	render(){
		this.keyboardHeight=this.keyboardHeight||0
		this.anim=this.anim || new Animated.Value(0)
		return (
			<View style={{position:'absolute',top:0,left:0,width:320*k,paddingTop:20,...center}}>
				<Animated.View  ref={el=>this.background=el} style={{position:'absolute',
					top:75,left:this.anim.interpolate({inputRange:[0,1],outputRange:[600*k,0]}),
					height:400*k,width:320*k,backgroundColor:'black'}}>
					<ScrollView ref={el=>this.scroll=el} keyboardShouldPersistTaps={true} contentContainerStyle={{paddingTop:10,paddingBottom:140*k}}>
							{topics.map((topic)=>{

						return <Topic color={'white'} border={'no'} topic={topic}/>
					})}

					</ScrollView>
				</Animated.View>
				
			</View>

			)
	}

};
Object.assign(BlackScreen.prototype, TimerMixin);