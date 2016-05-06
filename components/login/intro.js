import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  TextInput,
  TouchableOpacity,
  Text,
  View
} =React;
import CountryPicker from 'react-native-country-picker-modal';
export default class Intro extends Component{
	state={};
	render(){
		return (

			<View style={{backgroundColor:'white',flex:1,alignItems:'center'}}>
				<TouchableOpacity style={{marginTop:30,padding:10*k,borderRadius:5,...center,borderWidth:1}}>
					<Text style={{fontSize:16,fontWeight:'500'}}>Выберите страну</Text>
				</TouchableOpacity>

			</View>

			)
	}

};
Object.assign(Intro.prototype, TimerMixin);