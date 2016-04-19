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
export default class CrossBackButton extends Component{
	state={};
	render(){
		return (

			<TouchableOpacity style={{height:45,width:45,justifyContent:'center',alignItems:'flex-start',marginLeft:3}} onPress={()=>{
					dismissKeyboard()
					if(this.props.index===0){
						buttonClicks({action:'go back to chats',nav:'topNav'})
					}else{
						this.props.navigator.pop()
					}
					
				}}>
					<Image source={{uri:'cross',isStatic:true}} style={{margin:8,height:15,width:15}}/>

				</TouchableOpacity>

			)
	}

};
Object.assign(CrossBackButton.prototype, TimerMixin);