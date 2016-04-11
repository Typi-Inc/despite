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
	render(){
		return (

			<ScrollView contentInset={{top:10}}>
				<View style={{flexDirection:'row',  flexWrap: 'wrap'}}>
					<TouchableOpacity onPress={()=>buttonClicks({action:'close'})}><View style={{margin:10*k,width:120*k,height:120*k,borderRadius:12*k,...center,borderWidth:2,borderColor:'rgb(220,220,220)'}}>
						<Image source={{uri:'camera',isStatic:true}} style={{width:35*k,height:26*k,margin:15*k}}/>
						<Text>Camera</Text>
					</View></TouchableOpacity>
					<TouchableOpacity><View style={{margin:10*k,width:120*k,height:120*k,borderRadius:12*k,...center,borderWidth:2,borderColor:'rgb(220,220,220)'}}>
						<Image source={{uri:'gallery',isStatic:true}} style={{width:35*k,height:28*k,margin:15*k}}/>
						<Text>Library</Text>
					</View></TouchableOpacity>
					<TouchableOpacity><View style={{margin:10*k,width:260*k,height:120*k,borderRadius:12*k,...center,borderWidth:2,borderColor:'rgb(220,220,220)'}}>
					</View></TouchableOpacity>
					<TouchableOpacity><View style={{margin:10*k,width:120*k,height:120*k,borderRadius:12*k,...center,borderWidth:2,borderColor:'rgb(220,220,220)'}}>
						<Image source={{uri:'loc',isStatic:true}} style={{width:20*k,height:30*k,margin:15*k}}/>
						<Text>Share location</Text>
					</View></TouchableOpacity>
					<TouchableOpacity><View style={{margin:10*k,width:120*k,height:120*k,borderRadius:12*k,...center,borderWidth:2,borderColor:'rgb(220,220,220)'}}>
						<Image source={{uri:'poll',isStatic:true}} style={{width:30*k,height:30*k,margin:15*k}}/>
						<Text>Ask a question</Text>
					</View></TouchableOpacity>
				</View>

			</ScrollView>

			)
	}

};
Object.assign(AddHooks.prototype, TimerMixin);