import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
import s from '../../styles'
let {
  AppRegistry,
  Component,
  View,
  Text,
  Navigator,
} =React;
import BackButton from '../channel/backButton'
import dismissKeyboard from 'dismissKeyboard'
import SearchTab from './searchTab'
import SearchInput from './searchInput'
import ChannelsByTopic from '../chatsTab/channelsByTopic'
import {buttonClicks$,buttonClicks} from '../../actions/buttonClicks'
var RCTStatusBarManager = require('NativeModules').StatusBarManager;
let NavigationBarRouteMapper={
	LeftButton(route, navigator, index, navState){
		if(route.name==='searchTab'){
			return null
		}
		return <BackButton index={index} route={route} navigator={navigator}/>
	},
	RightButton(route, navigator, index, navState){
	
		return null
	},
	Title(route, navigator, index, navState){
		if(route.name==='searchTab') return <SearchInput/>
		if(route.name==='channels') return <View style={{paddingTop:10,width:280*k,...center}}><Text style={s.viewTitle}>{route.title}</Text></View>
		return null
	
	}
}
export default class SearchNavigation extends Component{
	state={height:0,statusBarHeight:20,width:0.5,color:'white'};
	componentWillMount(){
		this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{
			if(x.action==='navigation push' && x.nav==='searchNav'){
				this.nav&&this.nav.push({name:x.name,routeInfo:x.info,title:x.title})
			}else if(x.action==='show black screen') this.setState({color:'rgb(240,240,240)'})
			else if(x.action==='hide black screen')this.setState({color:'rgb(255,255,255)'})
		})
	  	RCTStatusBarManager.getHeight((e)=>this.setState({statusBarHeight:e.height}))
	}
	componentWillUnmount(){
		this.buttonClicksSubscription.unsubscribe()
	}
	renderChannel(route,navigator){
		if(route.name==='searchTab'){
			return <SearchTab/>
		}else if(route.name==='channels'){
			return <ChannelsByTopic/>
		}
	}
	setHeightOfNavigation(height){
		this.setState({height:height})
	}
	render(){
		return (
			<Navigator 
				style={{paddingTop:75,backgroundColor:'white'}}
				ref={el=>this.nav=el}
				initialRoute={{name:'searchTab',info:this.props.routeInfo}}
				renderScene={this.renderChannel.bind(this)}
				configureScene={(route,routeStack)=>{
					// if(route.name==='edit') return Navigator.SceneConfigs.FloatFromBottom
					return Navigator.SceneConfigs.PushFromRight
				}}
				navigationBar={
					<Navigator.NavigationBar
						ref={el=>this.navBar=el}
			            routeMapper={NavigationBarRouteMapper}
			            style={{height:75,backgroundColor:this.state.color,borderBottomWidth:0.5,borderColor:'rgb(215,215,215)'}}
			          />
				}
			/>
			)
	}
};
Object.assign(SearchNavigation.prototype, TimerMixin);
