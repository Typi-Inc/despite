import TimerMixin from 'react-timer-mixin'
import s from '../../styles'
import React from 'react-native'; 
import {buttonClicks$} from '../../actions/buttonClicks'
import {keyboard,verFast} from '../animations'
var dismissKeyboard = require('dismissKeyboard');

let {
  AppRegistry,
  Component,
  Text,
  Animated,
  TouchableOpacity,
  LayoutAnimation,
  View
} =React;
export default class SmallViewer extends Component{
	state={};
	componentWillMount(){
	  	this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{
	  		this.openSmallViewer()
	  	})
	  }
	componentWillUnmount(){
	  	this.buttonClicksSubscription.unsubscribe()
	 }


	openSmallViewer(){
		dismissKeyboard()
		this.background.setNativeProps({style:{left:0}})
		this.setTimeout(()=>{
			LayoutAnimation.configureNext(keyboard)
		this.smallViewer.setNativeProps({style:{top:35*k}})
		this.setTimeout(()=>{
			LayoutAnimation.configureNext(verFast)
			this.close.setNativeProps({style:{right:5*k,top:10*k}})
		},300)
		},0)
		
	}
	closeSmallViewer(){
		this.background.setNativeProps({style:{left:670}})
		this.setTimeout(()=>{
			LayoutAnimation.configureNext(keyboard)
		this.close.setNativeProps({style:{right:-50*k}})
		
		this.smallViewer.setNativeProps({style:{top:600*k}})
		},0)
		
	}
	render(){
		return (

			<View style={{position:'absolute',top:0,left:0,background:'green',width:320*k,paddingTop:20}}>
				<View  ref={el=>this.background=el} style={{position:'absolute',
					left:756*k,top:0,height:600*k,width:600*k,backgroundColor:'rgb(0,0,0)',opacity:0.7}}/>
				<View ref={el=>this.smallViewer=el} style={{position:'absolute',
					height:510*k,width:290*k,marginLeft:15*k,top:600*k,backgroundColor:'white',alignSelf:'center'}}/>
				<View style={{position:'absolute',right:-50,top:40}} 
				ref={el=>this.close=el}>
					<TouchableOpacity style={{height:40,width:40,backgroundColor:'red',top:15}} onPress={()=>this.closeSmallViewer()}>
						<View style={{position:'absolute',marginTop:40*k,left:200*k,height:40,width:40,backgroundColor:'red'}}/>
					</TouchableOpacity>
				</View>

			</View>

			)
	}

};
Object.assign(SmallViewer.prototype, TimerMixin);