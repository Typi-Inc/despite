
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
import NotificationsTab from './notificationTab/notificationsTab'
import ProfileNavigation from './profileTab/profileNaivgation'
import SearchNavigation from './searchTab/searchNavigation'
export default class Tabs extends Component{
	state={height:50,overflow:'visible',selectedTab:'search'};
	// static childContextTypes={toggleTabs:React.PropTypes.func,tabsHidden:React.PropTypes.func};
	tabsHidden(){
		return this.state.height===0
	}
	toggleTabs(val){
  		this.setState({height:val?0:45,overflow:val?'hidden':'visible'})
  	}
  	componentWillMount(){
  		// LayoutAnimation.configureNext(openAnimation)
  		StatusBarIOS.setStyle('default')
  	}
	renderNotificationBadge(){
		return <View style={{height:6,width:6,backgroundColor:'#F59C0B',borderRadius:5,left:15,top:-5}}/>
	}
	hideNotificationBadge(){
		return <View/>
	}
	notificationPress(){
		this.setState({ selectedTab: 'activity',hideBadge:true })
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
			    tabBarStyle={{height:this.state.height,overflow:this.state.overflow,backgroundColor:'black'}}
				sceneStyle={{paddingBottom: this.state.height ,backgroundColor:'white'}}
			>
				
				<TabNavigator.Item
					selected={this.state.selectedTab === 'chats'}
					onPress={() =>this.setState({ selectedTab: 'chats' })}
					renderIcon={()=><Image source={{uri:'chats',isStatic:true}} style={{height:19,width:19}}/>}
					renderSelectedIcon={()=><Image source={{uri:'chatA',isStatic:true}} style={{height:19,width:19}}/>}
				>
					<TopicPager/>
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'search'}
					onPress={() =>this.setState({ selectedTab: 'search' })}
					renderIcon={()=><Image source={{uri:'search',isStatic:true}} style={{height:20,width:20}}/>}
					renderSelectedIcon={()=><Image source={{uri:'searchA',isStatic:true}} style={{height:20,width:20}}/>}
				>
					<SearchNavigation/>
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'create'}
					onPress={() =>this.createChannel()}
					renderIcon={()=><Image source={{uri:'create',isStatic:true}} style={{height:22,width:22}}/>}
					renderSelectedIcon={()=><Image source={{uri:'createA',isStatic:true}} style={{height:22,width:22}}/>}
				>
					<View/>
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'activity'}
					onPress={() =>this.notificationPress()}
					renderIcon={()=><Image source={{uri:'notif',isStatic:true}} style={{height:20,width:18}}/>}
					renderSelectedIcon={()=><Image source={{uri:'notifA',isStatic:true}} style={{height:20,width:18}}/>}
					renderBadge={this.state.hideBadge?this.hideNotificationBadge:this.renderNotificationBadge.bind(this)}
				>
					<NotificationsTab/>
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'profile'}
					onPress={() =>this.setState({ selectedTab: 'profile' })}
					renderIcon={()=><Image source={{uri:'profile',isStatic:true}} style={{height:19,width:19}}/>}
					renderSelectedIcon={()=><Image source={{uri:'profileA',isStatic:true}} style={{height:19,width:19}}/>}
				>
					<ProfileNavigation/>
				</TabNavigator.Item>
			</TabNavigator>

			)
	}

};
Object.assign(Tabs.prototype, TimerMixin);