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
export default class BackButton extends Component{
	state={};
	render(){
		console.log(this.props.index)
		return (

			<TouchableOpacity style={{height:45,width:45,justifyContent:'center',alignItems:'flex-start'}} onPress={()=>{
					dismissKeyboard()
					if(this.props.route.name==='line'){
						this.props.navigator.pop()
					}else{
						
						buttonClicks({action:'go back to chats',nav:'topNav'})
					}
					
				}}>
					<Image source={{uri:'arrow',isStatic:true}} style={{margin:8,height:19,width:11}}/>

				</TouchableOpacity>

			)
	}

};
Object.assign(BackButton.prototype, TimerMixin);