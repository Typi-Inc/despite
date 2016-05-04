import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
import {keyboard,veryFast} from '../animations'
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
import {messages,colors} from '../mock'

const IncrementalGroup = require('IncrementalGroup');
const IncrementalPresenter = require('IncrementalPresenter');

import Spinner from 'react-native-spinkit'
import {buttonClicks$,buttonClicks} from '../../actions/buttonClicks'
import Message from './message'
import MessagePlaceholder from './messagePlaceholder'
import SlideUpInput from './slideUpInput'
import InvertibleScrollView from 'react-native-invertible-scroll-view';
export default class Tube extends Component{
	state={loading:true,disable:false,showSpinner:true,removeClippedSubviews:false};
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
  			this.scroll&&this.scroll.setNativeProps({contentOffset:{y:-20}})
  		}
		this.scroll && this.scroll.setNativeProps({contentInset:{top:this.input.getAddHeight()}})
  	
	 
	}
	setBottom(addHeight){
		this.scroll && this.scroll.setNativeProps({style:{bottom:this.keyboardHeight+addHeight}})	
	}


	// componentWillMount(){
		
    	// this.setTimeout(()=>this.buttonClicksSubscription.unsubscribe(),1000)
	  
	  // }
	componentDidMount(){
		
		// InteractionManager.runAfterInteractions(()=>{
		// 	LayoutAnimation.configureNext(veryFast)
		// 		this.setState({loading:false},()=>{
		// 			 // this.scroll&&this.scroll.scrollTo({x:0,y:this.measurePosition(3),animated:false})
		// 			// else this.scroll && this.scroll.scrollTo({x:0,y:0,animated:false})
		// 			buttonClicks({action:'measure now'})

		// 		})
		// 	})

		this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{
       		 if(x.action==='searchInput is focused') {
       		 	if(this.keyboardHeight>0) this.hide()
       		 	this.setState({disable:true})
       		 }else if(x.action==='measure now'){
       		 	this.setTimeout(()=>{
       		 			let handle = React.findNodeHandle(this['5']);
		            	let result;
						if(handle){
						    UIManager.measure(handle,(x,y,width,height,pagex,pagey)=>{
								result=-pagey

								this.scroll&&this.scroll.scrollTo({x:0,y:pagey-70,animated:false})
								Animated.timing(this.anim1,{toValue:0,duration:250}).start()
								Animated.timing(this.anim,{toValue:1,duration:1,delay:200}).start(()=>{
									this.setTimeout(()=>this.setState({removeClippedSubviews:true,showSpinner:false}),200)
								})
							 })
						}
       		 		},100)
	            
       		 }
       		 else if(x.action==='measure position') {
       		 		
       		 	
       		 }else if (x.action==='unsubscribe'){
       		 	this.buttonClicksSubscription && this.buttonClicksSubscription.unsubscribe()
       		 	this._keyboardWillShowSubscription&&this._keyboardWillShowSubscription.remove()
	  			this._keyboardWillHideSubscription&&this._keyboardWillHideSubscription.remove()
       		 }
       		 else if(x.action==='searchInput is blurred')  this.setState({disable:false})
       		 this.currentAction=x.action
    	})
    	this._keyboardWillShowSubscription= DeviceEventEmitter.addListener('keyboardWillShow', this.show.bind(this));
	    this._keyboardWillHideSubscription= DeviceEventEmitter.addListener('keyboardWillHide', this.hide.bind(this));
	 
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
	_onDone(){
		// this.setState({loading:false})
		// console.log('on done',this.props.index)
		buttonClicks({action:'measure now'})
	}
	render(){
		// console.log(this.buttonClicksSubscription)
		this.anim1=this.anim1 || new Animated.Value(1)
		this.anim=this.anim || new Animated.Value(0)
		this.keyboardHeight=this.keyboardHeight || 0
		// if(this.state.loading){
		// 	return <Animated.View style={{...center,backgroundColor:'white',position:'absolute',
		// 		top:this.anim.interpolate({inputRange:[0,1],outputRange:[0,600]}),
		// 		left:0,width:320*k,height:568*h-70}}>
		// 				<Spinner 
		// 			style={{marginBottom:75}} isVisible={true} 
		// 				size={55} type={'ArcAlt'} color={'#969696'}/>


		// 		</Animated.View>
		// }
		// LayoutAnimation.configureNext(veryFast)
		return (
			<View style={{flex:1}}>
			<IncrementalGroup onDone={this._onDone.bind(this)} disabled={false}>
			<View style={{flex:1}}>
				
				<ScrollView //keyboardDismissMode={'interactive'}
				automaticallyAdjustContentInsets={true}
				removeClippedSubviews={this.state.removeClippedSubviews}
				//keyboardDismissMode='interactive'
				// indicatorStyle={'black'} 
					scrollEventThrottle={500}
					onScroll={this.handleScroll.bind(this)} 
					ref={el=>this.scroll=el}
				>	
				
				{messages.map((message,i)=>{
					return  <IncrementalGroup key={i} disabled={false}><Message message={message} ref={el=>this[`${i}`]=el} index={i} color={colors[`${i%21}`]} /></IncrementalGroup>
				})}
					
		<View ref={(el)=>this.t=el} style={{height:50*k}}/>
					

				</ScrollView>

				<SlideUpInput ref={(e)=>this.input=e} setBottom={this.setBottom.bind(this)}/>
				

			</View>
		</IncrementalGroup>
		<Animated.View style={{...center,backgroundColor:'white',position:'absolute',
				top:this.anim.interpolate({inputRange:[0,1],outputRange:[0,600]}),
				opacity:this.anim1,
				left:0,width:320*k,height:568*h-70}}>
						{this.state.showSpinner?<Spinner 
					style={{marginBottom:75}} isVisible={true} 
						size={55} type={'ArcAlt'} color={'#969696'}/>:null

				}
				</Animated.View>
		</View>
			)
	}
	componentWillUnmount(){
		console.log('unmounting tube')

		this.buttonClicksSubscription.unsubscribe()
	  	this._keyboardWillShowSubscription.remove()
	  	this._keyboardWillHideSubscription.remove()

	 }

};
Object.assign(Tube.prototype, TimerMixin);