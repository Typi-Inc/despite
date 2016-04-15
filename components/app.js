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
  Navigator
} =React;
var RCTStatusBarManager = require('NativeModules').StatusBarManager;

// import Tube from './tube'
// import Message from './message'
import SmallViewer from './channel/smallViewer'
import Channel from './channel/channel'
import {buttonClicks$} from '../actions/buttonClicks'
import ChannelNavigation from './channel/channelNavigation'
import Tabs from './tabs'
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

	}
	componentWillUnmount(){
		this.buttonClicksSubscription.unsubscribe()
	}

	render(){
		return (
			<View style={{flex:1}}>
			<Navigator ref={el=>this.nav=el}
				initialRoute={{name:'message'}}
				configureScene={(route,routeStack)=>{
					if(route.name==='createChannel') return Navigator.SceneConfigs.FloatFromBottom
					return Navigator.SceneConfigs.PushFromRight
				}}
				renderScene={this.renderApp.bind(this)}
				style={{paddingTop:this.statusBarHeight,backgroundColor:'black'}}
				
			/>
			<SmallViewer/>
			</View>
			)
	}
	renderApp(route,navigator){
		if(route.name==='channel') return <View style={{flex:1,backgroundColor:'white'}}>
				<ChannelNavigation routeInfo={route.routeInfo} topNav={navigator}/></View>
		else if(route.name==='createChannel') return <View style={{flex:1,backgroundColor:'white'}}>
			<CreateChannelNavigation routeInfo={route.routeInfo} topNav={navigator}/>
			</View>
		return <Tabs/>
	}

};
Object.assign(App.prototype, TimerMixin);