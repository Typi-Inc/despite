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
  Image,
  TouchableOpacity,
  LayoutAnimation,
  DeviceEventEmitter,
  ScrollView,
  StatusBar,
  View
} =React;
export default class BlackScreen extends Component{
	state={what:'hell',pagey:0};
	componentWillMount(){
	  	this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{
	  		if(x.action==='show image viewer'){
	  			this.show(x.pagey)
	  			this.setState({pagey:x.pagey-158*k})
	  			this.pagey=x.pagey
	  		}else if(x.action==='hide image viewer'){
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
		// this.scroll.scrollTo({x:0,y:0,animated:false})
		Animated.timing(this.anim,{toValue:1,duration:10}).start(()=>{
			Animated.timing(this.anim1,{toValue:1,duration:200}).start(()=>{
				StatusBar.setHidden(true,'fade')
			})
		})
		// Animated.timing(this.anim2,{toValue:1,duration:100}).start()
		
		
	}
	hide(){
		
		// Animated.timing(this.anim2,{toValue:0,duration:100}).start()
		Animated.timing(this.anim1,{toValue:0,duration:200}).start(()=>{
			Animated.timing(this.anim,{toValue:0,duration:10}).start(()=>{
				StatusBar.setHidden(false,'fade')
			})
		})
		

	}
	render(){
		this.pagey=this.pagey||0
		this.keyboardHeight=this.keyboardHeight||0
		this.anim=this.anim || new Animated.Value(0)
		this.anim1=this.anim1 || new Animated.Value(0)
		this.anim2=this.anim2 || new Animated.Value(0)
		return (
			<View style={{position:'absolute',top:0,left:0,width:320*k,paddingTop:20,...center}}>
				<Animated.View  ref={el=>this.background=el} style={{position:'absolute',...center,
					top:0,left:this.anim.interpolate({inputRange:[0,1],outputRange:[600*k,0]}),
					height:568*h,width:320*k,
					backgroundColor:this.anim1.interpolate({inputRange:[0,1],outputRange:['rgba(0,0,0,0.7)','black']}),
				}}>
					<Text onPress={()=>this.hide()} style={{fontSize:18,color:'white',position:'absolute',top:20,left:10}}>Close </Text>
				
					<Animated.Image ref={el=>this.im=el}
			          style={{height:this.anim1.interpolate({inputRange:[0,1],outputRange:[200*k,320*k]}),
			          width:this.anim1.interpolate({inputRange:[0,1],outputRange:[200*k,320*k]}),
			          borderRadius:this.anim1.interpolate({inputRange:[0,1],outputRange:[30*k,0*k]}),
			          top:this.anim1.interpolate({inputRange:[0,1],outputRange:[this.state.pagey,0*k]}),
			          // bottom:this.anim1.interpolate({inputRange:[0,1],outputRange:[-500*k,100*k]}),
			          // position:'absolute', left:0
			      		}}
			          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxvY5y5_BrPwLfkiS5hpnlHDmO-U8mbsjamCGQQqYwieXLHst' }}
			       />

				</Animated.View>
				
			</View>

			)
	}

};
Object.assign(BlackScreen.prototype, TimerMixin);