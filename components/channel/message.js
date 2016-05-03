import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  Image,
  TouchableOpacity,
  InteractionManager,
  TouchableWithoutFeedback,
  LayoutAnimation,
  TouchableHighlight,
  View,Animated
} =React;
const Incremental = require('Incremental');
const IncrementalGroup = require('IncrementalGroup');
const IncrementalPresenter = require('IncrementalPresenter');

import MessageProfile from './messageProfile'
import MessageButtons from './messageButtons'
// var WithProgress = require('react-native-image-progress');
// var ProgressBar = require('react-native-progress/Bar');
import {veryFast,openAnimation} from '../animations'
import {buttonClicks} from '../../actions/buttonClicks'
export default class Message extends Component{
	state={loading:this.props.index>2?true:false,
		karma:Math.floor(Math.random()*1000),
		haveIRated:false,isSaved:false,
		lineCount:Math.floor(Math.random()*100)};
	navigateToImageViewer(){
		// buttonClicks({action:'navigation push', nav:'topNav',name:'imageViewer'})
		// Animated.spring(this.anim,{toValue:this.anim._value>0?0:1}).start()
		// this.image.setNativeProps({style:{position:'absolute',top:0,lef}})
	}
	// componentDidMount(){
	// 	if(this.props.index>2){
	// 		if(this.props.index>5 ){
	// 			this.setTimeout(()=>{
	// 				InteractionManager.runAfterInteractions(()=>{
	// 					this.setState({loading:false})
	// 				})
	// 			},200)
	// 		}else if(this.props.index>10 && this.props.index<15){
	// 			this.setTimeout(()=>{
	// 				InteractionManager.runAfterInteractions(()=>{
	// 					this.setState({loading:false})
	// 				})
	// 			},400)
	// 		}else if(this.props.index>14 && this.props.index<24){
	// 			this.setTimeout(()=>{
	// 				InteractionManager.runAfterInteractions(()=>{
	// 					this.setState({loading:false})
	// 				})
	// 			},600)
	// 		}else if(this.props.index>23 && this.props.index<34){
	// 			this.setTimeout(()=>{
	// 				InteractionManager.runAfterInteractions(()=>{
	// 					this.setState({loading:false})
	// 				})
	// 			},800)
	// 		}else if(this.props.index>33){
	// 			this.setTimeout(()=>{
	// 				InteractionManager.runAfterInteractions(()=>{
	// 					this.setState({loading:false})
	// 				})
	// 			},1000)
	// 		}
	// 		else{
	// 			InteractionManager.runAfterInteractions(()=>{
	// 				this.setState({loading:false})
	// 			})
	// 		}
			
	// 	}
	// }
	render(){
		this.anim=this.anim || new Animated.Value(0)
		// if(this.state.loading) return null
		return (
			
			<View style={[s.container,{overflow:'hidden',}]}>					
					<View style={{margin:8,marginRight:0,marginLeft:4,marginBottom:12,
						borderColor:this.props.color,borderLeftWidth:2,
						paddingLeft:5,paddingBottom:0,paddingTop:0}}>

						<Incremental key={this.props.index}><View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:5*k,width:300*k}}>
							<MessageProfile profile={this.props.message.author}/>
							<MessageButtons index={this.props.index} karma={this.state.carma} haveIRated={this.state.haveIRated} isSaved={this.state.isSaved}/>
						</View></Incremental>
						<Incremental key={this.props.index+' '}><Text style={{width:300*k,marginLeft:3*k,fontSize:17,marginBottom:5*k,lineHeight:23}}> 
							{this.props.message.text}
						</Text></Incremental>

				
						<View style={{flexDirection:'row',marginLeft:3*k,marginBottom:0}}>
							<TouchableHighlight underlayColor={'rgb(120,120,120'} 
							onPress={()=>{
								// buttonClicks({action:'show image viewer'})
								buttonClicks({action:'reply pressed',to:'Johnnrdino'})
								}} style={{height:20,width:70,justifyContent:'flex-end'}}>
							<Text style={s.smallGreyText}>Ответить</Text></TouchableHighlight>

							<TouchableHighlight underlayColor={'rgb(120,120,120'} 
								style={{height:20,width:130,justifyContent:'flex-end',marginLeft:10}}
								 onPress={()=>buttonClicks({action:'navigation push',name:'line',nav:'channelNav',info:this.props})}>
								<Text style={s.smallGreyText}>Разговор ({this.state.lineCount})</Text>
							</TouchableHighlight>

						</View>
					</View>

					

				

			</View>

			)
	}

};
Object.assign(Message.prototype, TimerMixin);

// <TouchableWithoutFeedback onPress={()=>{
// 					let handle = React.findNodeHandle(this.image);
// 					handle&&UIManager.measure(handle,(x,y,width,height,pagex,pagey)=>{
// 						// Animated.timing(this.anim,{toValue:1,duration:100}).start()
// 						buttonClicks({action:'show image viewer',pagey:pagey})
// 					})


// 					}}>
// 					<Animated.Image ref={el=>this.image=el}
// 				      style={{ height:this.anim.interpolate({inputRange:[0,1],outputRange:[200,280*k]}),
// 				      	width:this.anim.interpolate({inputRange:[0,1],outputRange:[200,280*k]}),
// 				      	margin:this.anim.interpolate({inputRange:[0,1],outputRange:[15,0]}),
// 				      	marginBottom:5,
// 				      	left:0,
// 				      	opacity:this.anim.interpolate({inputRange:[0,1],outputRange:[1,0]}),
// 				      	marginLeft:45*k,
// 				      	borderRadius:this.anim.interpolate({inputRange:[0,1],outputRange:[20,0]}),}}
// 				      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxvY5y5_BrPwLfkiS5hpnlHDmO-U8mbsjamCGQQqYwieXLHst' }}
// 				    />
// 				</TouchableWithoutFeedback>


