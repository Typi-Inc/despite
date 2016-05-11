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
export default class EnterCode extends Component{
	state={};
	render(){
		return (

			<View style={{backgroundColor:'white',flex:1,alignItems:'center',paddingLeft:10}}>
				

				<View style={{flexDirection:'row',alignItems:'center',padding:18*k,paddingLeft:4,width:310*k,alignSelf:'flex-end',borderBottomWidth:1,borderColor:'rgb(225,225,225)'}}>
				
					<TextInput
					keyboardType={'number-pad'}
					maxLength={5}
					autoFocus={true}
					autoCorrect={false} ref={(e)=>this.input=e} 
					style={{fontSize:20,alignSelf:'center',textAlign:'center',
						width:300*k,height:30,borderRadius:5,marginRight:5}}
				   	value={this.state.text}
	                placeholder={'Code'}
	                placeholderTextColor={'rgb(140,140,140)'}
	                onChange={(event) => {
	                  this.setState({
	                      text: event.nativeEvent.text,})
	                 	 // next({action:'getPhone',phone:this.state.country.dial_code+''+event.nativeEvent.text})

	                  }
	              }
						/>


				</View>
				<Text style={{textAlign:'center',marginTop:10,width:280,fontSize:17,alignSelf:'center',lineHeight:24}}>
				 We have sent you an SMS with your code
				</Text>


				 
			</View>


			)
	}

};
Object.assign(EnterCode.prototype, TimerMixin);