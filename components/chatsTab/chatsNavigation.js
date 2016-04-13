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
  ScrollView,
  Image
} =React;
import Topics from './topics'
import TopicPager from './topicPager'
import dismissKeyboard from 'dismissKeyboard'
import {buttonClicks$} from '../../actions/buttonClicks'
var RCTStatusBarManager = require('NativeModules').StatusBarManager;

let NavigationBarRouteMapper={
		LeftButton(route, navigator, index, navState){
			if(route.name==='deal'){

				return <TouchableOpacity style={{height:45*k,width:45*k}} onPress={()=>{

					navigator.parentNavigator.pop()
				}}>

					<Image source={{uri:'arrowBlue',isStatic:true}} style={{margin:10*k,height:19,width:11,marginTop:0}}/>

				</TouchableOpacity>
			}else if(route.name==='topics') return;
			else{
				return <TouchableOpacity style={{height:45*k,width:45*k}} onPress={()=>{
					route.toggleTabs(false)
					dismissKeyboard()
					navigator.pop()}}>

					<Image source={{uri:'arrowBlue',isStatic:true}} style={{margin:10*k,height:19,width:11,marginTop:0}}/>

				</TouchableOpacity>
			}

			return null
		},
		RightButton(route, navigator, index, navState){
			if(route.name==='deal'){
				return <View style={{flexDirection:'row'}}>
				</View>
			}
			// else if (route.name==='ask'){
			// 	return <TouchableWithoutFeedback onPress={()=>navigator.pop()}>
			// 		<Text style={s.rightButtonText}>Отправить</Text>
			// 		</TouchableWithoutFeedback>
			// }
			// else if(route.name==='mapScreen'){
			// 	return <TouchableWithoutFeedback onPress={()=>console.log('me here')} >
			// 				<Text style={{color:'#0679a2',marginRight:10*k,fontWeight:'500'}}>Где я?</Text>
			// 			</TouchableWithoutFeedback>
			// }
			return null
		},
		Title(route, navigator, index, navState){
			if(route.name==='topics'){
				console.log(index)
			return;
			}
			return null
		}

	}
export default class ChatsNavigation extends Component{
	// static contextTypes={toggleTabs:React.PropTypes.func,tabsHidden:React.PropTypes.func};
	state={height:0,statusBarHeight:20};
	componentWillMount(){
		// this.subscription=this.nav.navigationContext.addListener('willfocus', ()=>{
		// 	if(this.nav.navigationContext._currentRoute.name==='deal' && this.context.tabsHidden()){
		// 		this.context.toggleTabs(false)
		// 	}
		// })
		this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{
	  		// if(x.action==='choose topic') this.setHeightOfNavigation(100)
	  	RCTStatusBarManager.getHeight((e)=>this.setState({statusBarHeight:e.height}))
	  		
	  	})
	}
	componentWillUnmount(){
		this.buttonClicksSubscription.unsubscribe()
		// this.subscription.remove()
	}
	renderDeal(route,navigator){
		if(route.name==='topics'){
			return <TopicPager navigator={navigator}/>
		}
	}
	setHeightOfNavigation(height){
		this.setState({height:height})
	}
	render(){
		return (
			<Navigator 
				style={{paddingTop:this.statusBarHeight}}
				ref={el=>this.nav=el}
				navigator={this.props.navigator}
				// willFocus={()=>console.log('will focus')}
				// didFocus={()=>console.log('did focus')}
				initialRoute={{name:'topics',title:'hello'}}
				renderScene={this.renderDeal.bind(this)}
				navigationBar={
					<Navigator.NavigationBar
					// navigator={navigator}
						ref={el=>this.navBar=el}
			            routeMapper={NavigationBarRouteMapper}
			            style={{height:this.state.height,backgroundColor:'white',borderBottomWidth:.5,borderColor:'rgb(215,215,215)'}}
			          />
				}
			/>

			)
	}

};
Object.assign(ChatsNavigation.prototype, TimerMixin);