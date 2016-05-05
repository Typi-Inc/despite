
import TimerMixin from 'react-timer-mixin'
import s from '../styles'
import React from 'react-native';
let {
  AppRegistry,
  Component,
  Navigator,
  Text,
  LayoutAnimation,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBarIOS,
  View
} =React;
import Channel from './channel/channel'
import TopicPager from './chatsTab/topicPager'
var update = React.addons.update
import {buttonClicks} from '../actions/buttonClicks'
import {openAnimation} from './animations'
import TabNavigator from 'react-native-tab-navigator'
import ChatsTab from './chatsTab/chatsTab'
import ProfileNavigation from './profileTab/profileNaivgation'
import SearchNavigation from './searchTab/searchNavigation'
export default class Tabs extends Component{
	state={height:47,overflow:'visible',selectedTab:'home'};
	// static childContextTypes={toggleTabs:React.PropTypes.func,tabsHidden:React.PropTypes.func};
	tabsHidden(){
		return this.state.height===0
	}
	toggleTabs(val){
  		this.setState({height:val?0:45,overflow:val?'hidden':'visible'})
  	}
  	componentWillMount(){
  		// LayoutAnimation.configureNext(openAnimation)
  		// StatusBarIOS.setStyle('default')
  	}
	renderNotificationBadge(){
		return <View style={{...center,padding:5,paddingTop:1,paddingBottom:1,borderRadius:14,top:-13,right:-10,backgroundColor:'white'}}>
				<Text style={{fontSize:13,fontWeight:'500',backgroundColor:'transparent'}}>8</Text>
			</View>
		// <View style={{
		// 	backgroundColor:'rgb(235,0,0)',borderRadius:10,top:-17,left:8,...center,width:22}}>
		// 		<Text style={{color:'white',fontSize:13,fontWeight:'500',margin:3}}>5</Text>

		// 	</View>
	}
	hideNotificationBadge(){
		return <View/>
	}
	notificationPress(){
		this.setState({ selectedTab: 'chats',hideBadge:true })
		this.setTimeout(()=>{
			if(this.state.selectedTab!=='activity') this.setState({hideBadge:false})
			
		},5000)
	}
	createChannel(){
		buttonClicks({action:'navigation push',nav:'topNav',name:'createChannel'})
	}
	render(){
		LayoutAnimation.configureNext(openAnimation)
		return (
			<TabNavigator 
			// hidesTabTouch={true}
			    tabBarStyle={{height:this.state.height,overflow:this.state.overflow,backgroundColor:'black'}}
				sceneStyle={{paddingBottom: this.state.height ,backgroundColor:'white'}}
			>
				
				<TabNavigator.Item
					selected={this.state.selectedTab === 'home'}
					onPress={() =>this.setState({ selectedTab: 'home' })}
					renderIcon={()=><Image source={{uri:'home',isStatic:true}} style={{height:20,width:19}}/>}
					renderSelectedIcon={()=><Image source={{uri:'homeA',isStatic:true}} style={{height:20,width:19}}/>}
				>
					<TopicPager/>
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'search'}
					onPress={() =>this.setState({ selectedTab: 'search' })}
					renderIcon={()=><Image source={{uri:'searchTab',isStatic:true}} style={{height:19,width:19}}/>}
					renderSelectedIcon={()=><Image source={{uri:'searchTabA',isStatic:true}} style={{height:19,width:19}}/>}
				>
					<SearchNavigation/>
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'create'}
					onPress={() =>this.createChannel()}
					renderIcon={()=><Image source={{uri:'addChannel',isStatic:true}} style={{height:21,width:21}}/>}
					renderSelectedIcon={()=><Image source={{uri:'addChannelA',isStatic:true}} style={{height:21,width:21}}/>}
				>
					<View/>
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'chats'}
					onPress={() =>this.notificationPress()}
					renderIcon={()=><Image source={{uri:'doubleChats',isStatic:true}} style={{height:19,width:23}}/>}
					renderSelectedIcon={()=><Image source={{uri:'dobuleChatsA',isStatic:true}} style={{height:19,width:23}}/>}
					renderBadge={this.state.hideBadge?this.hideNotificationBadge:this.renderNotificationBadge.bind(this)}
				>
					<ChatsTab/>
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'profile'}
					onPress={() =>this.setState({ selectedTab: 'profile' })}
					renderIcon={()=><Image source={{uri:'me',isStatic:true}} style={{height:20,width:13}}/>}
					renderSelectedIcon={()=><Image source={{uri:'meA',isStatic:true}} style={{height:20,width:13}}/>}
				>
					<ProfileNavigation/>
				</TabNavigator.Item>
			</TabNavigator>

			)
	}

};
Object.assign(Tabs.prototype, TimerMixin);