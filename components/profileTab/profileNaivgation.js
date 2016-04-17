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
import Profile from './profile'
import Settings from './settings'
import Edit from './edit'
import Directs from './directs'
import Business from './business'
import Saved from './saved'
import MyChannels from './myChannels'
import {buttonClicks$,buttonClicks} from '../../actions/buttonClicks'
var RCTStatusBarManager = require('NativeModules').StatusBarManager;
let NavigationBarRouteMapper={
		LeftButton(route, navigator, index, navState){
			if(route.name==='profileTab'){
				return null
			}
			return <BackButton index={index} route={route} navigator={navigator}/>
		},
		RightButton(route, navigator, index, navState){
			return null
		},
		Title(route, navigator, index, navState){
			return 	<View style={{paddingTop:10}}><Text style={s.viewTitle}>{route.title}</Text></View>
		
		}
	}
export default class ProfileNavigation extends Component{
	state={height:0,statusBarHeight:20};
	componentWillMount(){
		this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{
			if(x.action==='navigation push' && x.nav==='profileNav'){
				this.nav&&this.nav.push({name:x.name,routeInfo:x.info,title:x.title})
			}
		})
	  	RCTStatusBarManager.getHeight((e)=>this.setState({statusBarHeight:e.height}))
	}
	componentWillUnmount(){
		this.buttonClicksSubscription.unsubscribe()
	}
	renderChannel(route,navigator){
		if(route.name==='profileTab'){
			return <Profile/>
		}else if(route.name==='settings'){
			return <Settings/>
		}else if(route.name==='directs'){
			return <Directs/>
		}else if(route.name==='myChannels'){
			return <MyChannels/>
		}else if(route.name==='saved'){
			return <Saved/>
		}else if(route.name==='business'){
			return <Business/>
		}else if(route.name==='edit'){
			return <Edit/>
		}

	}
	setHeightOfNavigation(height){
		this.setState({height:height})
	}
	render(){
		return (
			<Navigator 
				style={{paddingTop:65,backgroundColor:'white'}}
				ref={el=>this.nav=el}
				initialRoute={{name:'profileTab',info:this.props.routeInfo,title:'Profile'}}
				renderScene={this.renderChannel.bind(this)}
				configureScene={(route,routeStack)=>{
					if(route.name==='edit') return Navigator.SceneConfigs.FloatFromBottom
					return Navigator.SceneConfigs.PushFromRight
				}}
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
Object.assign(ProfileNavigation.prototype, TimerMixin);
