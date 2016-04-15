import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
import s from '../../styles'
let {
  AppRegistry,
  Component,
  Text,
  ScrollView,
  View
} =React;
import Notification from './notification'
export default class NotificationsTab extends Component{
	state={};
	render(){
		return (
			<View style={{flex:1}}>
				<View style={{width:320*k,height:65,borderBottomWidth:.5,borderColor:'rgb(215,215,215)',...center,paddingTop:10,}}>

					<Text style={s.viewTitle}>Notifications</Text>


				</View>
				<ScrollView>

					<Notification notification={{type:'mention',message:'hello world'}}/>
					<Notification notification={{type:'mention',message:'dumb ass'}}/>
					<Notification notification={{type:'mention',message:'a invite you here'}}/>
					<Notification notification={{type:'mention',message:'love yourself'}}/>
 

				</ScrollView>


			</View>

			)
	}

};
Object.assign(NotificationsTab.prototype, TimerMixin);