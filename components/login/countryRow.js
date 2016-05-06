import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  View,
  Image,
  TouchableOpacity
} =React;
import dismissKeyboard from 'dismissKeyboard'
import {chooseCountry,registerNav} from '../../actions/buttonClicks'
export default class CountryRow extends Component{
	state={};
	_onPress(country){
		dismissKeyboard()
		chooseCountry({action:'chooseCountry',country:country})
		registerNav({action:'pop'})
	}
	render(){
		let rowData=this.props.rowData
		return (

			<TouchableOpacity onPress={this._onPress.bind(this,rowData)} style={{alignSelf:'flex-end',borderBottomWidth:1,borderColor:'rgb(240,240,240)',
				padding:13,paddingLeft:5,overflow:rowData.name==='Barbados'?'visible':'hidden',
				flexDirection:'row',width:310*k,justifyContent:'space-between',alignItems:'center'}}>

					<Text style={{fontSize:18,}}>{rowData.name}</Text>
					
					<Text style={{fontSize:17,fontWeight:'500'}}>{rowData.dial_code}</Text>

				</TouchableOpacity>

			)
	}

};
Object.assign(CountryRow.prototype, TimerMixin);