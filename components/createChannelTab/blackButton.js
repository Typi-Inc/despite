import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  TouchableOpacity,
  View
} =React;
export default class BlackButton extends Component{
	state={};

	render(){
		// console.log(this.props.type)
		// let buttonName;
		// if(this.props.type='create channel'){
		// 	buttonName='Создать'
		// }else if(this.props.type='ok'){
		// 	buttonName='Ok'
		// }
		return (

			<TouchableOpacity 
					style={{...center,left:10*k,backgroundColor:'black',marginTop:8,marginRight:15*k,
					padding:9,paddingTop:5,paddingBottom:5,borderRadius:3,
					borderColor:'black',borderWidth:1}}>
					<Text style={{fontSize:13,color:'white',fontWeight:'500'}}>{this.props.type}</Text>
				</TouchableOpacity>

			)
	}

};
Object.assign(BlackButton.prototype, TimerMixin);