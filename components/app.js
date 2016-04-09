import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  View,
  Navigator
} =React;
import Tube from './tube'
import Message from './message'
import Channel from './channel'
export default class App extends Component{
	state={};
	render(){
		return (
			<View style={{flex:1}}>
				<View style={{height:20,borderBottomWidth:.5,borderColor:'rgb(220,220,220)'}}/>
			<Navigator
				initialRoute={{name:'message'}}
				renderScene={this.renderApp.bind(this)}
			/>
			</View>
			)
	}
	renderApp(route,navigator){
		return <Channel/>
	}

};
Object.assign(App.prototype, TimerMixin);