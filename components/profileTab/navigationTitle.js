import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
import s from '../../styles'
let {
  AppRegistry,
  Component,
  Text,
  Image,
  Animated,
  View
} =React;
import {buttonClicks$} from '../../actions/buttonClicks'
export default class NavigationTitle extends Component{
	state={title:'Profile',fontSize:0.1};
	componentWillMount(){
		console.log('mounting again here')
		this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{
			
			if(x.action==='create border'){
				// this.setState({titlekey: "value", 'Profile',fontSize:0.1})
				if (this.action && this.action!==x.action){
					Animated.timing(this.anim,{toValue:0,duration:200}).start()
				}
			}else if(x.action==='delete border'){
				// this.setState({title:'Johnnrdino',fontSize:11})
				if (this.action && this.action!==x.action){
					Animated.timing(this.anim,{toValue:1,duration:200}).start()
					
				}

			}

			this.action=x.action
		})
	}
	shouldComponentUpdate(nextProps,nextState){
		if (this.state!==nextState) return true
		return false
	}
	componentWillUnmount(){
		this.buttonClicksSubscription.unsubscribe()
	}
	render(){
		this.anim=this.anim || new Animated.Value(0)
		return (

			<View style={{paddingTop:10,...center}}>

				<Animated.Text style={{
					opacity:this.anim.interpolate({inputRange:[0,1],outputRange:[1,0]}),
					// top:this.anim.interpolate({inputRange:[0,1],outputRange:[0,-100]}),
					fontSize:this.anim.interpolate({inputRange:[0,1],outputRange:[18,0.1]})}}>
					Profile
				</Animated.Text>

				
				<View style={{...center}}>
					<Animated.Text style={{
						opacity:this.anim,
						// top:this.anim.interpolate({inputRange:[0,1],outputRange:[-100,0]}),
						fontSize:this.anim.interpolate({inputRange:[0,1],outputRange:[0.1,18]})
					}}>
						Johnnrdino
					</Animated.Text>
					<Animated.Text style={{
						opacity:this.anim,
						// top:this.anim.interpolate({inputRange:[0,1],outputRange:[-100,0]}),
						fontSize:this.anim.interpolate({inputRange:[0,1],outputRange:[0.1,11]})
					}}>
						14 messages
					</Animated.Text>
				</View>


			</View>

			)
	}

};
Object.assign(NavigationTitle.prototype, TimerMixin);
	// <Animated.Image 
	// 					source={{uri:'http://www.binarytradingforum.com/core/image.php?userid=27&dateline=1355305878'}}
	// 					style={{
	// 						height:this.anim.interpolate({inputRange:[0,1],outputRange:[0.1,40]}),
	// 						width:this.anim.interpolate({inputRange:[0,1],outputRange:[0.1,40]}),
	// 						marginRight:this.anim.interpolate({inputRange:[0,1],outputRange:[300*k,73*k]}),
	// 						borderRadius:7}}
	// 				/>