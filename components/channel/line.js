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
import Spinner from 'react-native-spinkit'

const Incremental = require('Incremental');
import Message from './message'
import SlideUpInput from './slideUpInput'
export default class Tube extends Component{
	state={loading:true};
	componentDidMount(){
		
		InteractionManager.runAfterInteractions(()=>{
			LayoutAnimation.configureNext(veryFast)
				this.setState({loading:false},()=>{
					 // this.scroll&&this.scroll.scrollTo({x:0,y:this.measurePosition(3),animated:false})
					// else this.scroll && this.scroll.scrollTo({x:0,y:0,animated:false})
				})
			})
	}
	show(e){
		LayoutAnimation.configureNext(keyboard);
		this.keyboardHeight=e.endCoordinates.height
		this.scroll && this.scroll.setNativeProps({style:{bottom:e.endCoordinates.height+this.input.getAddHeight()},contentInset:{top:e.endCoordinates.height+this.input.getAddHeight()}})
 	}

 	hide(){
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
		console.log('line is rerendiring')
		this.keyboardHeight=this.keyboardHeight || 0
		// if(this.state.loading){
		// 	return <View style={{flex:1,...center}}><Text>Loading...</Text></View>
		// }
		if(this.state.loading){
			return <View style={{flex:1,...center,backgroundColor:'white'}}><Spinner 
			style={{marginBottom:75}} isVisible={true} 
				size={55} type={'ArcAlt'} color={'#969696'}/>

				</View>
		}
		return (
			<View style={{flex:1,paddingLeft:3}}>
				
				<ScrollView  automaticallyAdjustContentInsets={true}
				//keyboardDismissMode='interactive'
				indicatorStyle={'black'} 
					scrollEventThrottle={500}
					onScroll={this.handleScroll.bind(this)} 
					ref={el=>this.scroll=el}
				>	
					{[1,2,3,4,5,6].map((color,i)=><Message index={i} key={i} color={this.props.color}/>)}
					<View ref={(el)=>this.t=el} style={{height:50*k}}/>

				</ScrollView>

				<SlideUpInput ref={(e)=>this.input=e} setBottom={this.setBottom.bind(this)}/>
			</View>
			)
	}

};
Object.assign(Tube.prototype, TimerMixin);