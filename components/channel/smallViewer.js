import TimerMixin from 'react-timer-mixin'
import s from '../../styles'
import React from 'react-native'; 
import {buttonClicks$} from '../../actions/buttonClicks'
import {keyboard,verFast} from '../animations'
var dismissKeyboard = require('dismissKeyboard');
import AddHooks from './addHooks'
import MessageActions from './messageActions'
let {
  AppRegistry,
  Component,
  Text,
  Animated,
  TouchableOpacity,
  LayoutAnimation,
  ScrollView,
  View
} =React;

export default class SmallViewer extends Component{
	state={child:<AddHooks/>};
	componentWillMount(){
	  	this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{
	  		if(x.action==='close'){
	  			this.closeSmallViewer(x)
	  			return;
	  		}else if(x.action==='add'){	
	  			this.setState({child:<AddHooks/>,title:'Добавить'})		
	  		}else if (x.action==='messageActions'){
	  			this.setState({child:<MessageActions color={x.props.color}/>,title:'I would like to'})	
	  		}
	  		this.openSmallViewer(x)	
	  		
	  	})
	  }
	componentWillUnmount(){
	  	this.buttonClicksSubscription.unsubscribe()
	 }


	openSmallViewer(x){
		console.log(x)
		dismissKeyboard()
		this.background.setNativeProps({style:{left:0}})
		this.setTimeout(()=>{
			LayoutAnimation.configureNext(keyboard)
		this.smallViewer.setNativeProps({style:{top:35*k}})
		this.setTimeout(()=>{
			Animated.timing(this.anim,{
				toValue:1,
				duration:150,
			}).start()
		},300)
		},0)
		
	}
	closeSmallViewer(){
		this.background.setNativeProps({style:{left:670}})
		Animated.timing(this.anim,{
				toValue:0,
				duration:150,
		}).start()
		this.setTimeout(()=>{
			LayoutAnimation.configureNext(keyboard)
			
			this.smallViewer.setNativeProps({style:{top:600*k}})
		},0)
		
	}
	render(){
		this.anim=this.anim || new Animated.Value(0)
		return (
			<View style={{position:'absolute',top:0,left:0,background:'green',width:320*k,paddingTop:20,...center}}>
				<View  ref={el=>this.background=el} style={{position:'absolute',
					left:756*k,top:0,height:600*k,width:600*k,backgroundColor:'rgb(0,0,0)',opacity:0.7}}/>
				<View ref={el=>this.smallViewer=el} style={{position:'absolute',
				height:510*k,width:294*k,marginLeft:14*k,top:600*k,paddingLeft:6*k,
				backgroundColor:'white',alignSelf:'center'}}>
					<Text style={{fontSize:20,color:'rgb(120,120,120)',
					margin:10*k,marginTop:20*k}}>{this.state.title}</Text>
					<View style={{width:265*k,height:1,backgroundColor:'rgb(210,210,210)',margin:10*k,marginBottom:0}}/>
					{this.state.child}
					<Animated.View style={{position:'absolute',borderRadius:20*k,right:5*k,alignSelf:'center',
					height:this.anim.interpolate({inputRange:[0,1],outputRange:[0,40*k]}),...center,
					width:this.anim.interpolate({inputRange:[0,1],outputRange:[0,40*k]}),shadowOpacity:0.4,shadowOffset:{width:1,height:3},
					backgroundColor:'white',...center,
					top:this.anim.interpolate({inputRange:[0,1],outputRange:[0,-15*k]}),
					right:this.anim.interpolate({inputRange:[0,1],outputRange:[0,-10*k]})}} 
					ref={el=>this.close=el}>
						<TouchableOpacity style={{...center,height:40*k,width:40*k}} onPress={()=>this.closeSmallViewer()}>
							<Animated.Image source={{uri:'close',isStatic:true}} 
							style={{width:this.anim.interpolate({inputRange:[0,1],outputRange:[0,14*k]}),alignSelf:'center',
							height:this.anim.interpolate({inputRange:[0,1],outputRange:[0,14*k]}),
							}}/>
						</TouchableOpacity>
					</Animated.View>
				</View>
			</View>

			)
	}

};
Object.assign(SmallViewer.prototype, TimerMixin);