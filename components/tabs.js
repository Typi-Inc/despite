
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
  View
} =React;
import Channel from './channel/channel'
import ChatsNavigation from './chatsTab/chatsNavigation'
var update = React.addons.update
import TabNavigator from 'react-native-tab-navigator'
export default class Tabs extends Component{
	state={height:50,overflow:'visible',selectedTab:'search'};
	// static childContextTypes={toggleTabs:React.PropTypes.func,tabsHidden:React.PropTypes.func};
	tabsHidden(){
		return this.state.height===0
	}
	toggleTabs(val){
  		this.setState({height:val?0:50,overflow:val?'hidden':'visible'})
  	}
	renderChats(route,navigator){
		if(route.name==='chats'){
			return <Channel/>
		}else if(route.name==='deal'){
			
			return <View style={{flex:1,backgroundColor:'rd'}} navigator={navigator}/>
		}
	}
	render(){
		return (
			<TabNavigator 
			    tabBarStyle={{height:this.state.height,overflow:this.state.overflow,backgroundColor:'black'}}
				sceneStyle={{paddingBottom: this.state.height }}
			>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'search'}
					onPress={() =>this.setState({ selectedTab: 'search' })}
					renderIcon={()=><Image source={{uri:'search',isStatic:true}} style={{height:18,width:18}}/>}
					renderSelectedIcon={()=><Image source={{uri:'searchA',isStatic:true}} style={{height:18,width:18}}/>}
				>
					<Navigator ref={el=>this.featureNav=el}
						initialRoute={{name:'chats'}}
						renderScene={this.renderChats.bind(this)}
						configureScene={(route,routeStack)=> {		
			            	return Navigator.SceneConfigs.PushFromRight
			            }}
					/>
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'chats'}
					onPress={() =>this.setState({ selectedTab: 'chats' })}
					renderIcon={()=><Image source={{uri:'chats',isStatic:true}} style={{height:18,width:18}}/>}
					renderSelectedIcon={()=><Image source={{uri:'chatA',isStatic:true}} style={{height:18,width:18}}/>}
				>
					<ChatsNavigation/>
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'create'}
					onPress={() =>this.setState({ selectedTab: 'create' })}
					renderIcon={()=><Image source={{uri:'create',isStatic:true}} style={{height:21,width:21}}/>}
					renderSelectedIcon={()=><Image source={{uri:'createA',isStatic:true}} style={{height:21,width:21}}/>}
				>
					<View style={{flex:1,backgroundColor:'blue'}}/>
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'activity'}
					onPress={() =>this.setState({ selectedTab: 'activity' })}
					renderIcon={()=><Image source={{uri:'notif',isStatic:true}} style={{height:19,width:17}}/>}
					renderSelectedIcon={()=><Image source={{uri:'notifA',isStatic:true}} style={{height:19,width:17}}/>}
				>
					<View style={{flex:1,backgroundColor:'white'}}/>
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'profile'}
					onPress={() =>this.setState({ selectedTab: 'profile' })}
					renderIcon={()=><Image source={{uri:'profile',isStatic:true}} style={{height:18,width:18}}/>}
					renderSelectedIcon={()=><Image source={{uri:'profileA',isStatic:true}} style={{height:18,width:18}}/>}
				>
					<View style={{flex:1,backgroundColor:'green'}}/>
				</TabNavigator.Item>
			</TabNavigator>

			)
	}

};
Object.assign(Tabs.prototype, TimerMixin);