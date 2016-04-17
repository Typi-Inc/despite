import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
import {keyboard,verFast,openAnimation} from '../animations'
let {
  AppRegistry,
  Component,
  Text,
  ScrollView,
  DeviceEventEmitter,LayoutAnimation,
  View,
  TouchableOpacity,
  InteractionManager,
  Animated
} =React;
import {buttonClicks$} from '../../actions/buttonClicks'
const Incremental = require('Incremental');
import Message from './message'
import MessagePlaceholder from './messagePlaceholder'
import SlideUpInput from './slideUpInput'
export default class Tube extends Component{
	state={loading:true,disable:false};
	show(e){
		if(this.state.disable) return;
		LayoutAnimation.configureNext(keyboard);
		this.keyboardHeight=e.endCoordinates.height
		this.scroll && this.scroll.setNativeProps({style:{bottom:e.endCoordinates.height+this.input.getAddHeight()},contentInset:{top:e.endCoordinates.height+this.input.getAddHeight()}})
 	}

 	hide(){
 		if(this.state.disable) return;
  		LayoutAnimation.configureNext(keyboard);
  		this.keyboardHeight=0
  		if(this.contentOffset===0){
  			this.scroll&&this.scroll.setNativeProps({contentOffset:{y:0}})
  		}
		this.scroll && this.scroll.setNativeProps({contentInset:{top:this.input.getAddHeight()}})
  	
	 
	}
	setBottom(addHeight){
		this.scroll && this.scroll.setNativeProps({style:{bottom:this.keyboardHeight+addHeight}})
	}


	componentWillMount(){
		this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{
       		 if(x.action==='searchInput is focused') {
       		 	if(this.keyboardHeight>0) this.hide()
       		 	this.setState({disable:true})
       		 }
       		 else if(x.action==='searchInput is blurred') this.setState({disable:false})
    	})
	  	this._keyboardWillShowSubscription= DeviceEventEmitter.addListener('keyboardWillShow', this.show.bind(this));
	    this._keyboardWillHideSubscription= DeviceEventEmitter.addListener('keyboardWillHide', this.hide.bind(this));
	 
	  }
	componentDidMount(){
		InteractionManager.runAfterInteractions(()=>{
				this.setState({loading:false})
			})
	}
	componentWillUnmount(){
		this.buttonClicksSubscription.unsubscribe()
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
	generateRandomColor(){
		return `rgb(${Math.rand()*255},${Math.rand()*255},${Math.rand()*255})`
	}
	
	render(){
		this.keyboardHeight=this.keyboardHeight || 0
		if(this.state.loading){
			return <View style={{flex:1}}><MessagePlaceholder/>


			</View>
		}
		LayoutAnimation.configureNext(openAnimation)
		return (
			<View style={{flex:1}}>
				
				<ScrollView  automaticallyAdjustContentInsets={true}
				//keyboardDismissMode='interactive'
				indicatorStyle={'black'} 
					scrollEventThrottle={500}
					onScroll={this.handleScroll.bind(this)} 
					ref={el=>this.scroll=el}
				>	
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
					<Message color={'#D0021B'}/>
					<Message color={'#F5A623'}/>
					<Message color={'#BD10E0'}/>
					<Message color={'#4A90E2'}/>
		


					<View ref={(el)=>this.t=el} style={{height:50*k}}/>

				</ScrollView>

				<SlideUpInput ref={(e)=>this.input=e} setBottom={this.setBottom.bind(this)}/>
			</View>
			)
	}

};
Object.assign(Tube.prototype, TimerMixin);