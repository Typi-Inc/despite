
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
	state={height:52,overflow:'visible',selectedTab:'activity'};
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
		return <View style={{padding:4,paddingTop:2,paddingBottom:2,
			backgroundColor:'#D0021B',borderRadius:8,top:-14,left:12}}>
				<Text style={{color:'white',fontSize:11,fontWeight:'500'}}>23</Text>

			</View>
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
					renderIcon={()=><Image source={{uri:'home',isStatic:true}} style={{height:22,width:21}}/>}
					renderSelectedIcon={()=><Image source={{uri:'homeA',isStatic:true}} style={{height:22,width:21}}/>}
				>
					<TopicPager/>
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'search'}
					onPress={() =>this.setState({ selectedTab: 'search' })}
					renderIcon={()=><Image source={{uri:'searchTab',isStatic:true}} style={{height:21,width:21}}/>}
					renderSelectedIcon={()=><Image source={{uri:'searchTabA',isStatic:true}} style={{height:21,width:21}}/>}
				>
					<SearchNavigation/>
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'create'}
					onPress={() =>this.createChannel()}
					renderIcon={()=><Image source={{uri:'addChannel',isStatic:true}} style={{height:23,width:23}}/>}
					renderSelectedIcon={()=><Image source={{uri:'addChannelA',isStatic:true}} style={{height:23,width:23}}/>}
				>
					<View/>
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'activity'}
					onPress={() =>this.notificationPress()}
					renderIcon={()=><Image source={{uri:'doubleChats',isStatic:true}} style={{height:21,width:25}}/>}
					renderSelectedIcon={()=><Image source={{uri:'dobuleChatsA',isStatic:true}} style={{height:21,width:25}}/>}
					// renderBadge={this.state.hideBadge?this.hideNotificationBadge:this.renderNotificationBadge.bind(this)}
				>
					<ChatsTab/>
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'profile'}
					onPress={() =>this.setState({ selectedTab: 'profile' })}
					renderIcon={()=><Image source={{uri:'me',isStatic:true}} style={{height:22,width:15}}/>}
					renderSelectedIcon={()=><Image source={{uri:'meA',isStatic:true}} style={{height:22,width:15}}/>}
				>
					<ProfileNavigation/>
				</TabNavigator.Item>
			</TabNavigator>

			)
	}

};
Object.assign(Tabs.prototype, TimerMixin);