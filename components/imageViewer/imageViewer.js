import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  Image,
  TouchableOpacity,
  View
} =React;
import {buttonClicks} from '../../actions/buttonClicks'
export default class ImageViewer extends Component{
	state={};
	render(){
		return (

			<View style={{backgroundColor:'black',flex:1,...center}}>
		
				<Image
			          style={{ height:320*k ,width:320*k,margin:15,}}
			          source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTRHDbRipz7fkuVc3f7OoZT0fSlEdjimXMYEeQI39lKrRhpFYLV' }}
			       />


			    
			    	<View style={{position:'absolute',top:15,left:0}}>
			    		<TouchableOpacity onPress={()=>{
			    			buttonClicks({action:'go back to chats',nav:'topNav'})
			    		}} style={{padding:10,}}>
			    		<Image
				          style={{ height:20*k ,width:20*k}}
				          source={{ uri: 'whiteCross',isStatic:true}}
				       />
				        </TouchableOpacity>

			    	</View>


			   


			</View>

			)
	}

};
Object.assign(ImageViewer.prototype, TimerMixin);