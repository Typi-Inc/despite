import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../styles'
import React from 'react-native'; 
import Drawer from 'react-native-drawer'
import Tube from './tube'
import ControlPanel from './controlPanel'
let {
  AppRegistry,
  Component,
  Text,
  View
} =React;
export default class Channel extends Component{
	state={};
	render(){
		return (

			<Drawer
				type="static"
				content={<ControlPanel />}
				openDrawerOffset={37*k}
				// closedDrawerOffset={100}
				tapToClose={true}
				side={'right'}
				styles={{drawer:{height:568*h},main: {shadowColor: "#000000", shadowOpacity: 0.8, shadowRadius: 3,backgroundColor:'white'}}}
				tweenHandler={Drawer.tweenPresets.parallax}
				>
				<Tube />
			</Drawer>

			)
	}

};
Object.assign(Channel.prototype, TimerMixin);