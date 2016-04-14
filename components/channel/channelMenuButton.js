import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  View,
  Image,
  TouchableOpacity
} =React;
import dismissKeyboard from 'dismissKeyboard'
import {buttonClicks} from '../../actions/buttonClicks'
export default class ChannelMenuButton extends Component{
	state={};
	render(){
		return (

			<TouchableOpacity style={{height:45,width:45,justifyContent:'center',alignItems:'center'}} onPress={()=>{
					// dismissKeyboard()
					buttonClicks({action:'add',component:'hooks'})
					
				}}>
					<Image source={{uri:'burger',isStatic:true}} style={{height:14,
  								  width:17,
   						 marginLeft:6,
   							 }}/>
				</TouchableOpacity>

			)
	}

};
Object.assign(ChannelMenuButton.prototype, TimerMixin);