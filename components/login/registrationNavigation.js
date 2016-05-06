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
import s from '../../styles'
import EnterCode from './enterCode'
import PhoneEnter from './phoneEnter'
import Intro from './intro'
import EnterUsername from './enterUsername'
import CountryPicker from './countryPicker'
import CountrySearchInput from './countrySearchInput'
import BackButton from '../channel/backButton'
import dismissKeyboard from 'dismissKeyboard'
import Next from './next'
// import BlackButton from './blackButton'
import CrossBackButton from '../searchTab/crossBackButton'
import {registerNav$,registerNav} from '../../actions/buttonClicks'
var RCTStatusBarManager = require('NativeModules').StatusBarManager;
let NavigationBarRouteMapper={
		LeftButton(route, navigator, index, navState){
			if(route.name==='countryPicker'){
				// if(index===1){
				// 	buttonClicks({action:'from channel to topicPager'})
				// }
				return <CrossBackButton navigator={navigator} index={index} route={route}/>
			}else if(route.name==='phoneEnter') return null
			return <BackButton index={index} route={route} navigator={navigator}/>
		},
		RightButton(route, navigator, index, navState){
			if(route.name==='createChannel') return <BlackButton type={'Создать'}/>

			else if(route.name==='restrictLocation') return <BlackButton type={'Готово'}/>
			else if (route.name==='countryPicker') return null
			return <Next name={route.name}/>		
		},
		Title(route, navigator, index, navState){
			if(route.name==='countryPicker') return <CountrySearchInput/>
			return <View style={{paddingTop:10}}><Text style={s.viewTitle}>{route.title}</Text></View>
		}

	}
export default class RegistrationNavigation extends Component{
	state={height:0,statusBarHeight:20};
	componentWillMount(){
		this.regusterNavSubscription=registerNav$.subscribe((x)=>{
			if(x.action==='navigation push'){
				this.nav&&this.nav.push({name:x.name,routeInfo:x.info,title:x.title})
			}else if(x.action==='pop'){
				this.nav&&this.nav.pop()

			}
			else{
				return
			}
		})
	  	RCTStatusBarManager.getHeight((e)=>this.setState({statusBarHeight:e.height}))
	}
	componentWillUnmount(){
		this.registerNavSubscription.unsubscribe()
	}
	renderCreateChannel(route,navigator){
		if(route.name==='phoneEnter'){
			return <PhoneEnter/>
		}else if(route.name==='codeEnter'){
			return <EnterCode/>
		}else if(route.name==='intro'){
			return <Intro />
		}else if(route.name==='usernameEnter'){
			return <EnterUsername/>
		}
		else if(route.name==='countryPicker'){
			return <CountryPicker/>
		}
	}
	setHeightOfNavigation(height){
		this.setState({height:height})
	}
	render(){
		return (
			<Navigator 
				style={{paddingTop:70}}
				ref={el=>this.nav=el}
				configureScene={(route,routeStack)=>{
					if(route.name==='countryPicker') return Navigator.SceneConfigs.FloatFromBottom
					return Navigator.SceneConfigs.PushFromRight
				}}
				navigator={this.props.navigator}
				initialRoute={{name:'phoneEnter',info:this.props.routeInfo,title:'Your Phone'}}
				renderScene={this.renderCreateChannel.bind(this)}
				navigationBar={
					<Navigator.NavigationBar
					// navigator={navigator}
						// topNav={this.props.topNav}
						ref={el=>this.navBar=el}
			            routeMapper={NavigationBarRouteMapper}
			            style={{height:70,backgroundColor:'white',borderBottomWidth:.5,borderColor:'rgb(215,215,215)'}}
			          />
				}
			/>

			)
	}

};
Object.assign(RegistrationNavigation.prototype, TimerMixin);


