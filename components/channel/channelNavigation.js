import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  View,
  Navigator,
} =React;
import Channel from './channel'
import BackButton from './backButton'
import dismissKeyboard from 'dismissKeyboard'
import {buttonClicks$,buttonClicks} from '../../actions/buttonClicks'
var RCTStatusBarManager = require('NativeModules').StatusBarManager;
import ChannelSearchInput from './channelSearchInput'
import Line from './line'
import ChannelMenuButton from './channelMenuButton'
let NavigationBarRouteMapper={
		LeftButton(route, navigator, index, navState){
			if(route.name==='channel'){
				return <BackButton index={index} route={route}/>
			}
			return <BackButton index={index} route={route} navigator={navigator}/>
		},
		RightButton(route, navigator, index, navState){
			return <ChannelMenuButton route={route}/>
		},
		Title(route, navigator, index, navState){
			if(route.name==='line') return <ChannelSearchInput info={{title:'inline'}} index={index}/>
			else if(route.name==='channel') return <ChannelSearchInput info={route.info} index={index}/>
			return null
		}
	}
export default class ChannelNavigation extends Component{
	state={height:0,statusBarHeight:20};
	componentWillMount(){
		this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{
			if(x.action==='navigation push' && x.nav==='channelNav'){
				this.nav&&this.nav.push({name:x.name,routeInfo:x.info})
			}
		})
	  	RCTStatusBarManager.getHeight((e)=>this.setState({statusBarHeight:e.height}))
	}
	componentWillUnmount(){
		this.buttonClicksSubscription.unsubscribe()
	}
	renderChannel(route,navigator){
		if(route.name==='channel'){
			return <Channel messageId={this.props.messageId} index={route.index} navigator={navigator}/>
		}else if(route.name==='line'){
			return <Line color={route.routeInfo.color}/>
		}
	}
	setHeightOfNavigation(height){
		this.setState({height:height})
	}
	render(){
		return (
			<Navigator 
				style={{paddingTop:65}}
				ref={el=>this.nav=el}
				navigator={this.props.navigator}
				initialRoute={{name:'channel',info:this.props.routeInfo,index:0,messageId:this.props.messageId}}
				renderScene={this.renderChannel.bind(this)}
				navigationBar={
					<Navigator.NavigationBar
						ref={el=>this.navBar=el}
			            routeMapper={NavigationBarRouteMapper}
			            style={{height:65,backgroundColor:'white',borderBottomWidth:.5,borderColor:'rgb(215,215,215)'}}
			          />
				}
			/>
			)
	}
};
Object.assign(ChannelNavigation.prototype, TimerMixin);
