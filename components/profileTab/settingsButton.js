import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
import s from '../../styles'
let {
  AppRegistry,
  Component,
  Text,
  Image,
  TouchableOpacity,
  View
} =React;
import {buttonClicks} from '../../actions/buttonClicks'
export default class SettingsButton extends Component{
	state={};
	goToSettings(){
		buttonClicks({name:'settings',action:'navigation push',nav:'profileNav',title:'Settings',info:{what:'going to edit'}})
	}
	render(){
		return (
			<TouchableOpacity style={{padding:5,...center,margin:7,}} onPress={this.goToSettings.bind(this)}>
				<Image
					style={{height:20,width:20}}
					source={{uri:'settings',isStatic:true}}

				/>
			</TouchableOpacity>

			)
	}

};
Object.assign(SettingsButton.prototype, TimerMixin);