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

const IncrementalGroup = require('IncrementalGroup');
const IncrementalPresenter = require('IncrementalPresenter');

import Spinner from 'react-native-spinkit'
import {buttonClicks$} from '../../actions/buttonClicks'
import Message from './message'
import MessagePlaceholder from './messagePlaceholder'
import SlideUpInput from './slideUpInput'
import InvertibleScrollView from 'react-native-invertible-scroll-view';
export default class Tube extends Component{
	state={loading:false,disable:false};
	show(e){
		if(this.state.disable) return;
		LayoutAnimation.configureNext(keyboard);
		this.keyboardHeight=e.endCoordinates.height
		this.scroll && this.scroll.setNativeProps({style:{bottom:e.endCoordinates.height+this.input.getAddHeight()},contentInset:{bottom:e.endCoordinates.height+this.input.getAddHeight()}})
 	}

 	hide(){
 		if(this.state.disable) return;
  		LayoutAnimation.configureNext(keyboard);
  		this.keyboardHeight=0
  		if(this.contentOffset===0){
  			this.scroll&&this.scroll.setNativeProps({contentOffset:{y:0}})
  		}
		this.scroll && this.scroll.setNativeProps({contentInset:{bottom:this.input.getAddHeight()}})
  	
	 
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
		this.scroll && this.scroll.scrollTo({x:0,y:0,animated:false})
		InteractionManager.runAfterInteractions(()=>{
			LayoutAnimation.configureNext(openAnimation)
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
	_onDone(){
		// this.setState({loading:false})
		// console.log('here')
	}
	render(){
		this.keyboardHeight=this.keyboardHeight || 0
		if(this.state.loading){
			return <View style={{flex:1,...center,backgroundColor:'white'}}><Spinner 
			style={{marginBottom:75}} isVisible={true} 
				size={55} type={'ArcAlt'} color={'#969696'}/>
				<SlideUpInput ref={(e)=>this.input=e} setBottom={this.setBottom.bind(this)}/>

				</View>
		}
		// LayoutAnimation.configureNext(openAnimation)
		return (

			<IncrementalGroup onDone={this._onDone.bind(this)} disabled={true}><View style={{flex:1}}>
				
				<InvertibleScrollView keyboardDismissMode={'interactive'}
				inverted  automaticallyAdjustContentInsets={true}
				//keyboardDismissMode='interactive'
				indicatorStyle={'black'} 
					scrollEventThrottle={500}
					onScroll={this.handleScroll.bind(this)} 
					ref={el=>this.scroll=el}
				>	
				<View ref={(el)=>this.t=el} style={{height:50*k}}/>
				{['#F5A623','#BD10E0',//'#BD10E0','#4A90E2','#4A90E2','#D0021B','#D0021B','#D0021B','#F5A623',
				'#BD10E0','#BD10E0','#4A90E2','#4A90E2','#D0021B','#D0021B','#D0021B','#F5A623',
				//'#BD10E0','#BD10E0','#4A90E2','#4A90E2','#D0021B','#D0021B','#D0021B','#F5A623',
				// '#F5A623','#BD10E0','#4A90E2','#4A90E2','#D0021B','#D0021B','#D0021B','#F5A623',
				// '#F5A623','#BD10E0','#4A90E2','#4A90E2','#D0021B','#D0021B','#D0021B','#F5A623',
				// '#BD10E0','#BD10E0','#4A90E2','#4A90E2','#D0021B','#D0021B','#D0021B','#F5A623',
				// '#BD10E0','#BD10E0','#4A90E2','#4A90E2','#D0021B','#D0021B','#D0021B','#F5A623',
				// '#F5A623','#BD10E0','#4A90E2','#4A90E2','#D0021B','#D0021B','#D0021B','#F5A623',
				].map((color,i)=>{
					if(i>2) return  <IncrementalGroup disabled={false}><Message key={i} index={i} color={color}/></IncrementalGroup>
					return <Message key={i} index={i} color={color}/>})}
					
		
					

				</InvertibleScrollView>

				<SlideUpInput ref={(e)=>this.input=e} setBottom={this.setBottom.bind(this)}/>
			</View>
		</IncrementalGroup>
			)
	}

};
Object.assign(Tube.prototype, TimerMixin);