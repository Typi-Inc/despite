import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
import {veryFast} from '../animations'
let {
  AppRegistry,
  TouchableHighlight,
  Image,
  Animated,
  TouchableOpacity,
  LayoutAnimation,
  Component,
  Text,
  View
} =React;
import {buttonClicks} from '../../actions/buttonClicks'
import Sound from 'react-native-sound'
var whoosh = new Sound('tap-warm.aif', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
  } else { // loaded successfully
  }
});

var cok= new Sound('tap-muted.aif', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
  } else { // loaded successfully
  }
});

export default class MessageButtons extends Component{

	state={karma:Math.floor(Math.random()*1000),haveIRated:false,isSaved:false,lineCount:Math.floor(Math.random()*100)};

	render(){
		this.anim=this.anim || new Animated.Value(0)
		this.anim1=this.anim1 || new Animated.Value(0)

		return (

			<View style={{flexDirection:'row',...center,borderRadius:4,//width:140*k
			}}>
				
				<View style={{flexDirection:'row',...center,height:40*k}}>

						
					<TouchableOpacity onPress={()=>{
						// [1,2,3,4,5,6,7,8].map(i=>buttonClicks({action:'measure position',index:i}))
						// buttonClicks({action:'measure position',index:this.props.index})
						whoosh.setVolume(0.2)
						whoosh.play()
						// Animated.spring(this.anim,{toValue:1,tension:100,friction:12}).start()
						Animated.timing(this.anim,{toValue:1,duration:150}).start()
						// LayoutAnimation.configureNext(veryFast)
						// this.setState({haveIRated:true,karma:this.state.karma+1})
					}}>
						<Animated.View
							style={{padding:this.anim.interpolate({inputRange:[0,1],outputRange:[8,0]}),
								...center,marginRight:this.anim.interpolate({inputRange:[0,1],outputRange:[7*k,0]})}}
						>
							<Animated.Image source={{uri:'up',isStatic:true,}} 
								style={{height:this.anim.interpolate({inputRange:[0,1],outputRange:[25*k,0]}),
									width:this.anim.interpolate({inputRange:[0,1],outputRange:[25*k,0]}),}}/>
						</Animated.View>
					</TouchableOpacity>
						<Animated.Text style={{fontWeight:'500',marginLeft:10,
					color:'rgb(14,122,254)',marginRight:this.anim.interpolate({inputRange:[0,1],outputRange:[0,17*k]}),
					fontSize:this.anim.interpolate({inputRange:[0,1],outputRange:[0.1,17]}),
					alignSelf:'center'}}>+{this.state.karma}</Animated.Text>
					<TouchableHighlight underlayColor={'transparent'} onPress={()=>{

						LayoutAnimation.configureNext(veryFast)
						this.setState({isSaved:!this.state.isSaved})
						}}>
						<Animated.View style={{padding:this.anim.interpolate({inputRange:[0,1],outputRange:[0,8]}),
							...center,
							marginRight:this.anim.interpolate({inputRange:[0,1],outputRange:[0,7*k]})
						}}>

							{this.state.isSaved?<Image 
								source={{uri:'saved',isStatic:true,}}
								style={{height:18*k,width:16*k,}}/>:
								<Animated.Image source={{uri:'save',isStatic:true,}} 
									style={{height:this.anim.interpolate({inputRange:[0,1],outputRange:[0,18*k]}),
									width:this.anim.interpolate({inputRange:[0,1],outputRange:[0,16*k]}),
								}}/>
							}
						</Animated.View>
					</TouchableHighlight>
					<TouchableOpacity onPress={()=>{
						cok.setVolume(0.3)
						cok.play()
						// LayoutAnimation.configureNext(veryFast)
						// Animated.spring(this.anim,{toValue:1,tension:100,friction:12}).start()
						Animated.timing(this.anim,{toValue:1,duration:150}).start()

						// this.setState({haveIRated:true,karma:this.state.karma-1})
						}}>
						<Animated.View
							style={{padding:this.anim.interpolate({inputRange:[0,1],outputRange:[8,0]}),
								...center,marginRight:this.anim.interpolate({inputRange:[0,1],outputRange:[7*k,0]})}}
						>
							<Animated.Image source={{uri:'up',isStatic:true,}} 
								style={{transform:[{rotate:'180deg'}],
									height:this.anim.interpolate({inputRange:[0,1],outputRange:[25*k,0]}),
									width:this.anim.interpolate({inputRange:[0,1],outputRange:[25*k,0]}),}}/>
						</Animated.View>
					</TouchableOpacity>
					
					
				</View>

				{this.props.discovery?
					null
				:<TouchableOpacity //style={{backgroundColor:'blue'}} 
						onPress={()=>buttonClicks({action:'messageActions',props:this.state})}>
						<View style={{width:27*k,marginLeft:7*k,paddingRight:6*k,height:40*k,justifyContent:'center',alignItems:'flex-end',}}>
							<Image source={{uri:'more',isStatic:true,}} style={s.menuImage}/>
						</View>
					</TouchableOpacity>



				}
				
				
			</View>

			)
	}

};
Object.assign(MessageButtons.prototype, TimerMixin);