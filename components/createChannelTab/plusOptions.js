import TimerMixin from 'react-timer-mixin'
import s from '../../styles'
import React from 'react-native'; 
import {buttonClicks} from '../../actions/buttonClicks'
let {
  AppRegistry,
  Component,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} =React;
export default class AddHooks extends Component{
	state={};
	goToChannel(channel){
		buttonClicks({action:'close'})
		buttonClicks({action:'navigation push',nav:'topNav',name:'channel',info:channel})

	}
	createChannel(info){
		buttonClicks({action:'close'})
		buttonClicks({action:'navigation push',nav:'topNav',name:'createChannel',info:info})
	}
	render(){
		return (

			<ScrollView contentInset={{top:10}}>
				<View style={{flexDirection:'row',  flexWrap: 'wrap'}}>
					<TouchableOpacity onPress={this.goToChannel.bind(this,{title:'taxi'})}><View style={{margin:10*k,width:120*k,height:120*k,borderRadius:12*k,...center,borderWidth:2,borderColor:'rgb(220,220,220)'}}>
						<Image source={{uri:'taxi',isStatic:true}} style={{width:28*k,height:29*k,margin:15*k}}/>
						<Text>Найти такси</Text>
					</View></TouchableOpacity>
					<TouchableOpacity onPress={this.goToChannel.bind(this,{title:'eating'})}><View style={{margin:10*k,width:120*k,height:120*k,borderRadius:12*k,...center,borderWidth:2,borderColor:'rgb(220,220,220)'}}>
						<Image source={{uri:'eating',isStatic:true}} style={{width:30*k,height:27*k,margin:15*k}}/>
						<Text>Поесть</Text>
					</View></TouchableOpacity>
				
					<TouchableOpacity onPress={this.goToChannel.bind(this,{title:'cleaning'})}><View style={{margin:10*k,width:120*k,height:120*k,borderRadius:12*k,...center,borderWidth:2,borderColor:'rgb(220,220,220)'}}>
						<Image source={{uri:'cleaning',isStatic:true}} style={{width:27*k,height:27*k,margin:15*k}}/>
						<Text>Уборку</Text>
					</View></TouchableOpacity>
					<TouchableOpacity onPress={this.goToChannel.bind(this,{title:'flowers'})}><View style={{margin:10*k,width:120*k,height:120*k,borderRadius:12*k,...center,borderWidth:2,borderColor:'rgb(220,220,220)'}}>
						<Image source={{uri:'flower',isStatic:true}} style={{width:28*k,height:32*k,margin:15*k}}/>
						<Text>Заказать цветы</Text>
					</View></TouchableOpacity>
					<TouchableOpacity onPress={this.createChannel.bind(this,{title:'createChannel'})}><View style={{margin:10*k,width:260*k,height:120*k,borderRadius:12*k,...center,borderWidth:2,borderColor:'rgb(220,220,220)'}}>
						<Image source={{uri:'createChannel',isStatic:true}} style={{width:28*k,height:28*k,margin:15*k}}/>
						<Text>Создать канал</Text>

					</View></TouchableOpacity>
				</View>

			</ScrollView>

			)
	}

};
Object.assign(AddHooks.prototype, TimerMixin);