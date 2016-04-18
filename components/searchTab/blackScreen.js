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

export default class BlackScreen extends Component{
	state={what:'hell'};
	componentWillMount(){
	  	this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{
	  		console.log('here here',x)
	  		if(x.action==='show black screen'){
	  			this.show()
	  		}else if(x.action==='hide black screen'){
	  			this.hide()
	  		}
	  		
	  	})
	  	 this._keyboardWillShowSubscription= DeviceEventEmitter.addListener('keyboardWillShow', this.getHeight.bind(this));

	  }
	componentWillUnmount(){
	  	this.buttonClicksSubscription.unsubscribe()
	  	 this._keyboardWillShowSubscription.remove()
	 }

	getHeight(e){
		this.keyboardHeight=e.height
		// this.background.setNativeProps({style:{height:windowSize.height-75-this.keyboardHeight}})
	}
	show(x){
		this.background.setNativeProps({style:{top:75}})
		this.setTimeout(()=>{
			LayoutAnimation.configureNext(keyboard)
			this.text.setNativeProps({style:{color:'white'}})
		},300)
		
		
	}
	hide(){
		this.background.setNativeProps({style:{top:600}})
		this.setTimeout(()=>{
			LayoutAnimation.configureNext(openAnimation)
			
			this.text.setNativeProps({style:{color:'rgb(100,100,100)'}})
		},500)
		
	}
	render(){
		this.keyboardHeight=this.keyboardHeight||0
		this.anim=this.anim || new Animated.Value(0)
		return (
			<View style={{position:'absolute',top:0,left:0,width:320*k,paddingTop:20,...center}}>
				<View  ref={el=>this.background=el} style={{position:'absolute',
					left:0*k,top:600,height:290*k,width:320*k,backgroundColor:'rgb(0,0,0)'}}>
					<ScrollView keyboardShouldPersistTaps={true} contentContainerStyle={{padding:20}}>
						<Text ref={el=>this.text=el} style={{fontWeight:'700',fontSize:18,color:'white'}}>Fuck you</Text>
						<Text style={{margin:20,fontWeight:'700',fontSize:18,color:'white'}}>Fuck you</Text>
						<Text style={{margin:20,fontWeight:'700',fontSize:18,color:'white'}}>Fuck you</Text>
						<Text style={{margin:20,fontWeight:'700',fontSize:18,color:'white'}}>Fuck you</Text>
						<Text style={{margin:20,fontWeight:'700',fontSize:18,color:'white'}}>Fuck you</Text>
						<Text style={{margin:20,fontWeight:'700',fontSize:18,color:'white'}}>lick you</Text>
						<Text style={{margin:20,fontWeight:'700',fontSize:18,color:'white'}}>joke you</Text>
							<Text style={{margin:20,fontWeight:'700',fontSize:18,color:'white'}}>go with you</Text>
						<Text style={{margin:20,fontWeight:'700',fontSize:18,color:'white'}}>Fuck you</Text>
						<Text style={{margin:20,fontWeight:'700',fontSize:18,color:'white'}}>Fuck you</Text>
						<Text style={{margin:20,fontWeight:'700',fontSize:18,color:'white'}}>Fuck you</Text>
						<Text style={{margin:20,fontWeight:'700',fontSize:18,color:'white'}}>comme you</Text>
						<Text style={{margin:20,fontWeight:'700',fontSize:18,color:'white'}}>Fuck you</Text>
					</ScrollView>
				</View>
				
			</View>

			)
	}

};
Object.assign(BlackScreen.prototype, TimerMixin);