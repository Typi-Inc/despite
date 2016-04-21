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
					profile:{name:'Johnnrdino',karma:1232,
					image:'http://www.binarytradingforum.com/core/image.php?userid=27&dateline=1355305878'}})}>
							
								<View style={{flexDirection:'row',...center,}}> 
										<Image source={{uri:'http://www.binarytradingforum.com/core/image.php?userid=27&dateline=1355305878'}} 
										style={{borderRadius:5*k,width:35*k,height:35*k}}/>
										<View style={{margin:5}}>	
											<Text style={{fontSize:16,fontWeight:'bold',color:'rgb(80,80,80)'}}>Johnnrdino</Text>
											<Text style={s.smallGreyText}>12:54</Text>

										</View>
								</View>
							</TouchableWithoutFeedback>

			)
	}

};
Object.assign(ControlPanel.prototype, TimerMixin);