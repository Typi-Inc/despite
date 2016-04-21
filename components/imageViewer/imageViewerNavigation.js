import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  View,
  Navigator,
} =React;
import BackButton from '../channel/backButton'
import dismissKeyboard from 'dismissKeyboard'
import {buttonClicks$,buttonClicks} from '../../actions/buttonClicks'
var RCTStatusBarManager = require('NativeModules').StatusBarManager;
import Images from './images'
import ImageViewer from './imageViewer'
let NavigationBarRouteMapper={
		LeftButton(route, navigator, index, navState){
			if(route.name==='channel'){
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
export default class ImageViewerNavigation extends Component{
	state={height:0,statusBarHeight:20};
	componentWillMount(){
		this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{
			if(x.action==='navigation push' && x.nav==='imageViewerNav'){
				this.nav&&this.nav.push({name:x.name,routeInfo:x.info})
			}
		})
	  	RCTStatusBarManager.getHeight((e)=>this.setState({statusBarHeight:e.height}))
	}
	componentWillUnmount(){
		this.buttonClicksSubscription.unsubscribe()
	}
	renderChannel(route,navigator){
		if(route.name==='imageViewer'){
			return <ImageViewer navigator={navigator}/>
		}else if(route.name==='images'){
			return <Images navigator={navigator}/>
		}
	}
	setHeightOfNavigation(height){
		this.setState({height:height})
	}
	render(){
		return (
			<Navigator 
				
				ref={el=>this.nav=el}
				navigator={this.props.navigator}
				initialRoute={{name:'imageViewer',info:this.props.routeInfo}}
				renderScene={this.renderChannel.bind(this)}
				configureScene={(route,routeStack)=>{
					if(route.name==='edit') return Navigator.SceneConfigs.FloatFromBottom
					else if (route.name=='imageViewer') return Navigator.SceneConfigs.FadeAndroid
					return Navigator.SceneConfigs.FloatFromRight
				}}
				
			/>
			)
	}
};
Object.assign(ImageViewerNavigation.prototype, TimerMixin);
