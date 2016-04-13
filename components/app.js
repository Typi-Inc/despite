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
// import Tube from './tube'
// import Message from './message'
import SmallViewer from './channel/smallViewer'
import Channel from './channel/channel'
import Tabs from './tabs'
export default class App extends Component{
	state={};
	render(){
		return (
			<View style={{flex:1,}}>
			<Navigator
				initialRoute={{name:'message'}}
				renderScene={this.renderApp.bind(this)}
			/>
			<SmallViewer/>
			</View>
			)
	}
	renderApp(route,navigator){
		return <Tabs/>
	}

};
Object.assign(App.prototype, TimerMixin);