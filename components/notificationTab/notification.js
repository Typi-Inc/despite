import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
import s from '../../styles'
let {
  AppRegistry,
  Component,
  Text,
  ScrollView,
  TouchableOpacity,
  View
} =React;
import {buttonClicks} from '../../actions/buttonClicks'
export default class Notification extends Component{
	state={};
	goToChannel(channel){
		buttonClicks({action:'navigation push',nav:'topNav',name:'channel',info:{title:this.props.notification.message}})
	}
	render(){
		return (
			<TouchableOpacity onPress={this.goToChannel.bind(this,'hello')}>
				<View style={{height:100*k,flexDirection:'row',borderBottomWidth:0.5,
							borderColor:'rgb(200,200,200)',...center,}}>
					<Text>{this.props.notification.message} </Text>
				</View>
			</TouchableOpacity>

			)
	}

};
Object.assign(Notification.prototype, TimerMixin);