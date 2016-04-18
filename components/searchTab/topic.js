import TimerMixin from 'react-timer-mixin'
import s from '../../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  TouchableOpacity,
  Text,
  View
} =React;
var dismissKeyboard = require('dismissKeyboard');

import {buttonClicks} from '../../actions/buttonClicks'
export default class Topic extends Component{
	state={};
	showTopic(){
		if(this.props.border==='no') buttonClicks({action:'hide black screen'})|| dismissKeyboard()
		buttonClicks({name:'channels',action:'navigation push',nav:'searchNav',title:this.props.topic,info:{what:'going to edit'}})
	}
	render(){
		return (

			<TouchableOpacity onPress={this.showTopic.bind(this)} style={{padding:15,borderBottomWidth:this.props.border==='no'?0:0.5,borderColor:'rgb(215,215,215)'}}>
				<Text style={{fontWeight:'700',fontSize:18,color:this.props.border==='no'?'white':'rgb(80,80,80)'}}>{this.props.topic}</Text>

			</TouchableOpacity>

			)
	}

};
Object.assign(Topic.prototype, TimerMixin);