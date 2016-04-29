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
import SettingsButton from './settingsButton'
import BackButton from '../channel/backButton'
import dismissKeyboard from 'dismissKeyboard'
import Profile from './profile'
import Settings from './settings'
import Edit from './edit'
import NavigationTitle from './navigationTitle'
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
			if(route.name==='profileTab') return <SettingsButton/>
			return null
		},
		Title(route, navigator, index, navState){
			if(route.name==='profileTab') return <NavigationTitle route={route}/>
			return 	<View style={{paddingTop:10}}><Text style={s.viewTitle}>{route.title}</Text></View>
		
		}
	}
export default class ProfileNavigation extends Component{
	state={height:0,statusBarHeight:20,width:0.5};
	componentWillMount(){
		this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{
			if(x.action==='navigation push' && x.nav==='profileNav'){
				this.nav&&this.nav.push({name:x.name,routeInfo:x.info,title:x.title})
			}else if(x.action==='navigation push' && x.nav==='profileNav' && x.name==='edit'){
				this.nav && this.nav.replace({name:x.name,routeInfo:x.info,title:x.title})
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
		}else if(route.name==='edit'){
			return <Edit/>
		}else return <Settings/>

	}
	setHeightOfNavigation(height){
		this.setState({height:height})
	}
	shouldComponentUpdate(nextProps,nextState){
		return nextState.width!==this.state.width
		
	}
	render(){
		console.log('profile navigation is rerendering')

		return (
			<Navigator 
				style={{paddingTop:70,backgroundColor:'white'}}
				ref={el=>this.nav=el}
				initialRoute={{name:'profileTab',info:this.props.routeInfo,title:'Profile'}}
				renderScene={this.renderChannel.bind(this)}
				configureScene={(route,routeStack)=>{
					if(route.name==='edit') return Navigator.SceneConfigs.FloatFromBottom
					else if (route.name=='settings') return Navigator.SceneConfigs.HorizontalSwipeJump
					return Navigator.SceneConfigs.PushFromRight
				}}
				navigationBar={
					<Navigator.NavigationBar
						ref={el=>this.navBar=el}
			            routeMapper={NavigationBarRouteMapper}
			            style={{height:70,backgroundColor:'white'}}
			          />
				}
			/>
			)
	}
};
Object.assign(ProfileNavigation.prototype, TimerMixin);
