import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Animated,
  ScrollView,
  TouchableOpacity,
  Text,
  View
} =React;
import {buttonClicks,buttonClicks$ } from '../actions/buttonClicks'
import Message from './channel/message'
class TestObject extends Component{
	state={};
	_handlePress(i){
		
		if(i % 2 ===0) buttonClicks({action:'hide odd'})
		else buttonClicks({action:'hide even'})
	}
	hideOdd(){
		if(this.props.index%2!==0){
			Animated.timing(this.anim,{toValue:this.anim._value>0?0:1,duration:200}).start()

		}else {
			return
		}
	}
	hideEven(){
		if(this.props.index%2===0){
			Animated.timing(this.anim,{toValue:this.anim._value>0?0:1,duration:200}).start()

		}else {
			return
		}

	}
	componentWillMount(){
		this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{
       		if(x.action==='hide odd') this.hideOdd()
       		else this.hideEven()
    	})
	}
	componentWillUnmount(){
		this.buttonClicksSubscription.unsubscribe()
	}
	render(){
		this.anim=this.anim || new Animated.Value(0)
		return (

				<Animated.View style={{marginTop:0,
							height:this.anim.interpolate({inputRange:[0,1],outputRange:[420*k,0]}),
							width:this.anim.interpolate({inputRange:[0,1],outputRange:[320*k,0]})
						}}>

							<TouchableOpacity onPress={this._handlePress.bind(this,this.props.index)}>
								<Message index={this.props.index} color={this.props.index%2===0?'red':'blue'}/>


							</TouchableOpacity>
						</Animated.View>

			)
	}

};





export default class Test extends Component{
	state={};
	handlePress(i){
	
	}
	render(){
		this.anim=this.anim || new Animated.Value(0)
		return (

			<View style={{flex:1,backgroundColor:'white'}}> 
				<ScrollView>
				<View style={{height:30}}/>
					{[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28].map(i=>{

						return <TestObject index={i} key={i} onPress={this.handlePress.bind(this,i)}/>
					})}



				</ScrollView>


			</View>
			)
	}

};
Object.assign(Test.prototype, TimerMixin);





