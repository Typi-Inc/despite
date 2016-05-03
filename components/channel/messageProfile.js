import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  Image,
  TouchableWithoutFeedback,
  View
} =React;
import {buttonClicks} from '../../actions/buttonClicks'
export default class ControlPanel extends Component{
	state={};
	render(){
		return (

			<TouchableWithoutFeedback style={{backgroundColor:'red'}} 
				onPress={()=>buttonClicks({action:'profileCard',
					profile:{name:this.props.profile.name,karma:1232,
					image:this.props.profile.image}})}>
							
								<View style={{flexDirection:'row',...center,}}> 
										<Image source={{uri:this.props.profile.image}} 
										style={{borderRadius:5*k,width:35*k,height:35*k}}/>
										<View style={{margin:5}}>	
											<Text style={{fontSize:17,fontWeight:'bold',color:'rgb(80,80,80)'}}>{this.props.profile.name}</Text>
											<Text style={s.smallGreyText}>12:54</Text>

										</View>
								</View>
							</TouchableWithoutFeedback>

			)
	}

};
Object.assign(ControlPanel.prototype, TimerMixin);