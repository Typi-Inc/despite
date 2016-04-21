import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  View
} =React;
export default class Posts extends Component{
	state={};
	render(){
		return (

			<View style={{backgroundColor:'#0F3057',height:568*h}}/>

			)
	}

};
Object.assign(Posts.prototype, TimerMixin);