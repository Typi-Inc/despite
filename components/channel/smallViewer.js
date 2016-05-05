import TimerMixin from 'react-timer-mixin'
import s from '../../styles'
import React from 'react-native'; 
import {buttonClicks$,buttonClicks} from '../../actions/buttonClicks'
import {openAnimation,verFast} from '../animations'
var dismissKeyboard = require('dismissKeyboard');
import AddHooks from './addHooks'
import MessageActions from './messageActions'
import PlusOptions from '../createChannelTab/plusOptions'
import ProfileCard from '../profileTab/profileCard'
import ChannelOptions from './channelOptions'
let {
  AppRegistry,
  Component,
  Text,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  LayoutAnimation,
  ScrollView,
  View
} =React;

export default class SmallViewer extends Component{
	state={child:<View/>,height:500*k,top:35*k,width:294*k,marginLeft:14*k,borderHeight:1};
	componentWillMount(){
		console.log('mounting smallViewwer')
	  	this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{
	  		if(x.action==='close'){
	  			this.closeSmallViewer()
	  			return;
	  		}else if(x.action==='add'){	
	  			this.setState({child:<AddHooks/>,title:'Добавить',height:510*k,width:294*k,marginLeft:14*k,borderHeight:1,top:35*k})		
	  			this.openSmallViewer(x)	
	  		}else if (x.action==='messageActions'){
	  			this.setState({child:<MessageActions color={x.props.color}/>,title:'I would like to',height:480*k,width:294*k,marginLeft:14*k,borderHeight:0,top:35*k})	
	  			this.openSmallViewer(x)	
	  		}else if(x.action==='plusTab'){
	  			this.setState({child:<PlusOptions/>,title:'Я хочу',height:500*k,width:294*k,marginLeft:14*k,borderHeight:1,top:35*k})	
	  			this.openSmallViewer(x)	
	  		}else if (x.action==='channelOptions'){
	  			this.setState({child:<ChannelOptions/>,title:'#'+x.info.title,height:500*k,width:294*k,marginLeft:14*k,borderHeight:0,top:35*k})	
	  			this.openSmallViewer(x)	
	  		}else if (x.action==='profileCard'){
	  			this.setState({child:<ProfileCard profile={x.profile}/>,title:'Profile of',height:400*k,width:250*k,marginLeft:35*k,borderHeight:1,top:90*k})
	  			this.openSmallViewer(x)
	  		}
	  		
	  		
	  	})
	  }
	componentWillUnmount(){
	  	this.buttonClicksSubscription.unsubscribe()
	 }


	openSmallViewer(x){
		dismissKeyboard()
		Animated.timing(this.bAnim,{toValue:1,duration:1}).start()
		this.setTimeout(()=>{
			LayoutAnimation.configureNext(openAnimation)
		this.smallViewer.setNativeProps({style:{top:this.state.top}})
		this.setTimeout(()=>{
			Animated.timing(this.anim,{
				toValue:1,
				duration:200,
			}).start()
		},200)
		},0)
		
	}
	closeSmallViewer(){
		Animated.timing(this.bAnim,{toValue:0,duration:1}).start()
		Animated.timing(this.anim,{
				toValue:0,
				duration:200,
		}).start()
		this.setTimeout(()=>{
			LayoutAnimation.configureNext(openAnimation)
			
			this.smallViewer.setNativeProps({style:{top:600*k}})
		},0)
		
	}
	render(){
		this.bAnim=this.bAnim || new Animated.Value(0)
		this.anim=this.anim || new Animated.Value(0)
		return (
			<View style={{position:'absolute',top:0,left:0,width:320*k,paddingTop:20,...center}}>
				<TouchableWithoutFeedback onPress={()=>this.closeSmallViewer()}><Animated.View  ref={el=>this.background=el} style={{position:'absolute',
					left:this.bAnim.interpolate({inputRange:[0,1],outputRange:[600*k,0]}),
					top:0,height:600*k,width:600*k,backgroundColor:'rgb(0,0,0)',opacity:0.7}}/></TouchableWithoutFeedback>
				<View ref={el=>this.smallViewer=el} style={{position:'absolute',
				height:this.state.height,width:this.state.width,marginLeft:this.state.marginLeft,top:600*k,paddingLeft:0,
				backgroundColor:'white',alignSelf:'center'}}>
					<Text style={{fontSize:20,color:'rgb(120,120,120)',
					margin:10*k,marginTop:20*k}}>{this.state.title}</Text>
					<View style={{width:this.state.width-30*k,height:this.state.borderHeight,backgroundColor:'rgb(210,210,210)',margin:10*k,marginBottom:0}}/>
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
							style={{width:14*k,height:14*k,alignSelf:'center',
							opacity:this.anim.interpolate({inputRange:[0,.5,.7,1],outputRange:[0,0,0.5,1]}),
							}}/>
						</TouchableOpacity>
					</Animated.View>
				</View>
			</View>


			)
	}

};
Object.assign(SmallViewer.prototype, TimerMixin);