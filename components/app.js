import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  View,
  TouchableOpacity,
  Image,
  Navigator,

} =React;
import dismissKeyboard from 'dismissKeyboard'
import PhoneEnter from './login/phoneEnter'
var RCTStatusBarManager = require('NativeModules').StatusBarManager;
import BlackScreen from './searchTab/blackScreen'
// import Tube from './tube'
// import Message from './message'
import SmallViewer from './channel/smallViewer'
import Channel from './channel/channel'
import {buttonClicks$} from '../actions/buttonClicks'
import ChannelNavigation from './channel/channelNavigation'
import Tabs from './tabs'
let Sound = require('react-native-sound');

import CreateChannelNavigation from './createChannelTab/createChannelNavigation'

export default class App extends Component{
	state={};
	componentWillMount(){
		this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{
			if(x.action==='navigation push'&&x.nav==='topNav'){
				this.nav&&this.nav.push({name:x.name,routeInfo:x.info})
			}else if (x.action==='go back to chats'&&x.nav==='topNav'){
				this.nav&&this.nav.jumpBack()
			}	
	  	})
	  	RCTStatusBarManager.getHeight((e)=>this.setState({statusBarHeight:e.height}))
	  // 	this.setTimeout(()=>{
	  // 		var whoosh = new Sound('tap-crisp.aif', Sound.MAIN_BUNDLE, (error) => {
			//   if (error) {
			//     console.log('failed to load the sound', error);
			//   } else { // loaded successfully
			//     console.log('duration in seconds: ' + whoosh.getDuration() +
			//         'number of channels: ' + whoosh.getNumberOfChannels());
			//   }
			// });
			// whoosh.play()
			// whoosh.setVolume(2);

			// // Position the sound to the full right in a stereo field
			// whoosh.setPan(1);

			// // Loop indefinitely until stop() is called
			// whoosh.setNumberOfLoops(-1);
			// console.log('volume: ' + whoosh.getVolume());
			// console.log('pan: ' + whoosh.getPan());
			// console.log('loops: ' + whoosh.getNumberOfLoops());
			// whoosh.setCurrentTime(2.5);

			// // Get the current playback point in seconds
			// whoosh.getCurrentTime((seconds) => console.log('at ' + seconds));

			// // Pause the sound
			// whoosh.pause();

			// // Stop the sound and rewind to the beginning
			// whoosh.stop();

			// // Release the audio player resource
			// whoosh.release();

						
	  // 	},2000)
		

	}
	componentWillUnmount(){
		this.buttonClicksSubscription.unsubscribe()
	}

	render(){

		return (
			<View style={{flex:1}}>
			<Navigator ref={el=>this.nav=el}
				initialRoute={{name:'jk'}}
				configureScene={(route,routeStack)=>{
					if(route.name==='createChannel') return Navigator.SceneConfigs.FloatFromBottom
					return Navigator.SceneConfigs.PushFromRight
				}}
				onWillFocus={(e)=>dismissKeyboard()}
				renderScene={this.renderApp.bind(this)}
				style={{paddingTop:this.statusBarHeight,backgroundColor:'black'}}
				
			/>
			<SmallViewer/>
			<BlackScreen/>
			</View>
			)
	}
	renderApp(route,navigator){
		if(route.name==='channel') return <View style={{flex:1,backgroundColor:'white'}}>
				<ChannelNavigation routeInfo={route.routeInfo} topNav={navigator}/></View>
		else if(route.name==='createChannel') return <View style={{flex:1,backgroundColor:'white'}}>
			<CreateChannelNavigation routeInfo={route.routeInfo} topNav={navigator}/>
			</View>
		else if (route.name==='login') return <PhoneEnter/>
		return <Tabs/>
	}

};
Object.assign(App.prototype, TimerMixin);