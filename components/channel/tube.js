import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
import {keyboard,verFast} from '../animations'
let {
  AppRegistry,
  Component,
  Text,
  ScrollView,
  DeviceEventEmitter,LayoutAnimation,
  View,
  TouchableOpacity,
  Animated
} =React;
import Message from './message'
import SlideUpInput from './slideUpInput'
export default class Tube extends Component{
	state={};
	show(e){
		LayoutAnimation.configureNext(keyboard);
		this.keyboardHeight=e.endCoordinates.height
		this.scroll.setNativeProps({style:{bottom:e.endCoordinates.height+this.input.getAddHeight()},contentInset:{top:e.endCoordinates.height+this.input.getAddHeight()}})
 	}

 	hide(){
  		LayoutAnimation.configureNext(keyboard);
  		this.keyboardHeight=0
  		if(this.contentOffset===0){
  			this.scroll.setNativeProps({contentOffset:{y:0}})
  		}
		this.scroll.setNativeProps({contentInset:{top:this.input.getAddHeight()}})
  	
	 
	}
	setBottom(addHeight){
		this.scroll.setNativeProps({style:{bottom:this.keyboardHeight+addHeight}})
	}


	componentWillMount(){

	  	this._keyboardWillShowSubscription= DeviceEventEmitter.addListener('keyboardWillShow', this.show.bind(this));
	    this._keyboardWillHideSubscription= DeviceEventEmitter.addListener('keyboardWillHide', this.hide.bind(this));
	 
	  }
	componentWillUnmount(){
	  	this._keyboardWillShowSubscription.remove()
	  	this._keyboardWillHideSubscription.remove()

	 }
	handleScroll(e){
		if (e.nativeEvent.contentOffset.y<0){
			this.contentOffset=0
		}else{
			this.contentOffset=1
		}
	}
	
	render(){
		this.keyboardHeight=this.keyboardHeight || 0
		return (
			<View style={{flex:1}}>
				
				<ScrollView  
				//keyboardDismissMode='interactive' 
					scrollEventThrottle={500}
					onScroll={this.handleScroll.bind(this)} 
					ref={el=>this.scroll=el}
				>	
					<Message color={'#BD10E0'}/>
					<Message color={'#F5A623'}/>
					<Message color={'#BD10E0'}/>
					<Message color={'#4A90E2'}/>
					<Message color={'#4A90E2'}/>
					<Message color={'#4A90E2'}/>
					<Message color={'#D0021B'}/>
					<Message color={'#F5A623'}/>
					<Message color={'#BD10E0'}/>
					<Message color={'#4A90E2'}/>
					<Message color={'#4A90E2'}/>
					<Message color={'#4A90E2'}/>
					<Message color={'#D0021B'}/>
					<Message color={'#F5A623'}/>
					<View ref={(el)=>this.t=el} style={{height:50*k}}/>

				</ScrollView>

				<SlideUpInput ref={(e)=>this.input=e} setBottom={this.setBottom.bind(this)}/>
			</View>
			)
	}

};
Object.assign(Tube.prototype, TimerMixin);