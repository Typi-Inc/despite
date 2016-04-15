import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Navigator,
  TextInput,
  ScrollView,
  Image
} =React;
import CreateChannel from './createChannel'
import AddTags from './addTags'
import Invite from './invite'
import ChannelSettings from './channelSettings'
import BackButton from '../channel/backButton'
import dismissKeyboard from 'dismissKeyboard'
import {buttonClicks$,buttonClicks} from '../../actions/buttonClicks'
var RCTStatusBarManager = require('NativeModules').StatusBarManager;
let NavigationBarRouteMapper={
		LeftButton(route, navigator, index, navState){
			if(route.name==='createChannel'){
				// if(index===1){
				// 	buttonClicks({action:'from channel to topicPager'})
				// }
				return <BackButton index={index} route={route}/>
			}
			return <BackButton index={index} route={route} navigator={navigator}/>
		},
		RightButton(route, navigator, index, navState){

			return null		
		},
		Title(route, navigator, index, navState){
			return null
		}

	}
export default class ChannelNavigation extends Component{
	// static contextTypes={toggleTabs:React.PropTypes.func,tabsHidden:React.PropTypes.func};
	state={height:0,statusBarHeight:20};
	componentWillMount(){
	// 	// this.subscription=this.nav.addListener('willfocus', ()=>{
	// 	// 	if(this.nav._currentRoute.name==='channel' && this.props.tabsHidden()){
	// 	// 		this.props.toggleTabs(false)
	// 	// 		this.setState({height:0})
	// 	// 	}
	// 	// })
		this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{
			if(x.action==='navigation push' && x.nav==='channelNav'){
				// this.setState({height:60})
				// this.props.toggleTabs(true)
				console.log(this.info,'this.info')
				this.nav&&this.nav.push({name:x.name,routeInfo:x.info})
			}
		})
	  	RCTStatusBarManager.getHeight((e)=>this.setState({statusBarHeight:e.height}))
	  		
	}
	componentWillUnmount(){
		this.buttonClicksSubscription.unsubscribe()
	}
	renderCreateChannel(route,navigator){
		if(route.name==='createChannel'){
			return <CreateChannel/>
		}else if(route.name==='invite'){
			return <Invite/>
		}else if(route.name==='addTags'){
			// console.log(route,'route')
			return <AddTags />
		}else if(route.name==='channelSettings'){
			return <ChannelSettings/>
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
				initialRoute={{name:'createChannel',info:this.props.routeInfo}}
				renderScene={this.renderCreateChannel.bind(this)}
				navigationBar={
					<Navigator.NavigationBar
					// navigator={navigator}
						// topNav={this.props.topNav}
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


