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
  AppStateIOS

} =React;
import Test from './test'
import dismissKeyboard from 'dismissKeyboard'
import PhoneEnter from './login/phoneEnter'
var RCTStatusBarManager = require('NativeModules').StatusBarManager;
import BlackScreen from './searchTab/blackScreen'
// import Tube from './tube'
// import Message from './message'
import SmallViewer from './channel/smallViewer'
import Channel from './channel/channel'
import {buttonClicks$,buttonClicks} from '../actions/buttonClicks'
import ChannelNavigation from './channel/channelNavigation'
import Tabs from './tabs'
let Sound = require('react-native-sound');
import Viewer from './imageViewer/viewer'
import CreateChannelNavigation from './createChannelTab/createChannelNavigation'
import ImageViewerNavigation from './imageViewer/imageViewerNavigation'
export default class App extends Component{
	state={};
	constructor(props){
		super(props);


	}
	componentWillMount(){
		this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{

			if(x.action==='navigation push'&&x.nav==='topNav'){
				buttonClicks({action:'unsubscribe'})
				
				this.nav&&this.nav.push({name:x.name,routeInfo:x.info,messageId:x.messageId})
			}else if (x.action==='go back to chats'&&x.nav==='topNav'){
				buttonClicks({action:'unsubscribe'})
				this.nav&&this.nav.pop()
			}	
	  	})
 	 AppStateIOS.addEventListener('change', this._handleAppStateChange);

	  	RCTStatusBarManager.getHeight((e)=>this.setState({statusBarHeight:e.height}))
	  

	}


	_handleAppStateChange(currentAppState) {
	}
	componentWillUnmount(){
 	 AppStateIOS.removeEventListener('change', this._handleAppStateChange);

		this.buttonClicksSubscription.unsubscribe()
	}

	render(){

		return (
			<View style={{flex:1}}>
			<Navigator ref={el=>this.nav=el}
				initialRoute={{name:'testa'}}
				configureScene={(route,routeStack)=>{
					if(route.name==='createChannel') return {...Navigator.SceneConfigs.FloatFromBottom, gestures: {}}
					else if (route.name==='channel') return Navigator.SceneConfigs.FloatFromRight
					else if (route.name=='imageViewer') return Navigator.SceneConfigs.FadeAndroid
					return Navigator.SceneConfigs.PushFromRight
				}}
				onWillFocus={(e)=>dismissKeyboard()}
				renderScene={this.renderApp.bind(this)}
				style={{paddingTop:this.statusBarHeight,backgroundColor:'black'}}
				
			/>
			<SmallViewer/>
			<BlackScreen/>
			<Viewer/>
			</View>
			)
	}
	renderApp(route,navigator){
		if(route.name==='channel') return <View style={{flex:1,backgroundColor:'white'}}>
				<ChannelNavigation messageId={route.messageId} routeInfo={route.routeInfo} topNav={navigator}/></View>
		else if(route.name==='createChannel') return <View style={{flex:1,backgroundColor:'white'}}>
			<CreateChannelNavigation routeInfo={route.routeInfo} topNav={navigator}/>
			</View>
		else if (route.name==='login') return <PhoneEnter/>
		else if (route.name==='imageViewer') return <ImageViewerNavigation/>
		else if (route.name==='test') return <Test/>
		return <Tabs/>
	}

};
Object.assign(App.prototype, TimerMixin);