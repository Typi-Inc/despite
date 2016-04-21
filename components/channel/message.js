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
  TouchableWithoutFeedback,
  LayoutAnimation,
  TouchableHighlight,
  View,Animated
} =React;
var Lightbox = require('react-native-lightbox');
import MessageProfile from './messageProfile'
import MessageButtons from './messageButtons'

import {veryFast} from '../animations'
import {buttonClicks} from '../../actions/buttonClicks'
export default class Message extends Component{
	state={karma:Math.floor(Math.random()*1000),haveIRated:false,isSaved:false,lineCount:Math.floor(Math.random()*100)};
	navigateToImageViewer(){
		// buttonClicks({action:'navigation push', nav:'topNav',name:'imageViewer'})
		Animated.spring(this.anim,{toValue:this.anim._value>0?0:1}).start()
		// this.image.setNativeProps({style:{position:'absolute',top:0,lef}})
	}
	render(){
		this.anim=this.anim || new Animated.Value(0)
		return (

			<View style={s.container}>					
					<View style={{margin:8,marginRight:0,marginLeft:4,
						borderColor:this.props.color,borderLeftWidth:2,
						paddingLeft:5,paddingBottom:0,paddingTop:0}}>

						<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:5*k,width:300*k}}>
							<MessageProfile/>
							<MessageButtons karma={this.state.carma} haveIRated={this.state.haveIRated} isSaved={this.state.isSaved}/>
						</View>
						<Text style={{width:300*k,marginLeft:3*k,fontSize:16,marginBottom:5}}> 
							I guess it would be awesome if they finally decide to do it,
							who is going? what are your ideas on politics in western europe. do your
								agreement on the brexit issue fully subsidized yes inedeed true
						</Text>
					      <TouchableWithoutFeedback onPress={()=>this.navigateToImageViewer()}>
								<Animated.Image ref={el=>this.image=el}
						          style={{ height:this.anim.interpolate({inputRange:[0,1],outputRange:[200,280*k]}),
						          	width:this.anim.interpolate({inputRange:[0,1],outputRange:[200,280*k]}),
						          	margin:this.anim.interpolate({inputRange:[0,1],outputRange:[15,0]}),
						          	marginBottom:5,
						          	left:0,
						          	borderRadius:this.anim.interpolate({inputRange:[0,1],outputRange:[20,0]}),}}
						          source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTRHDbRipz7fkuVc3f7OoZT0fSlEdjimXMYEeQI39lKrRhpFYLV' }}
						        />
					        </TouchableWithoutFeedback>


						<View style={{flexDirection:'row',marginLeft:3*k,marginBottom:0}}>
							<TouchableHighlight underlayColor={'rgb(120,120,120'} onPress={()=>buttonClicks({action:'reply pressed',to:'Johnnrdino'})} style={{height:24,width:70,justifyContent:'flex-end'}}><Text style={s.smallGreyText}>Ответить</Text></TouchableHighlight>

							<TouchableHighlight underlayColor={'rgb(120,120,120'} 
								style={{height:24,width:130,justifyContent:'flex-end',marginLeft:10}}
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