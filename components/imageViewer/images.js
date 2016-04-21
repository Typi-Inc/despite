import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  View
} =React;
export default class Images extends Component{
	state={};
	navigateTo(uri){
		this.props.navigator.push({name:'imageViewer'})
	}

	render(){
		return (
			<View style={{flex:1,backgroundColor:'white'}}>
			<ScrollView contentContainerStyle={{...center,backgroundColor:'white'}}>
				<TouchableWithoutFeedback onPress={()=>this.navigateTo()}>
					<Image
			          style={{ height:200 ,width:200,margin:15,borderRadius:20}}
			          source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTRHDbRipz7fkuVc3f7OoZT0fSlEdjimXMYEeQI39lKrRhpFYLV' }}
			        />
		        </TouchableWithoutFeedback>
		        <TouchableWithoutFeedback onPress={()=>this.navigateTo()}>
					<Image
			          style={{ height:200 ,width:200,margin:15,borderRadius:20}}
			          source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTRHDbRipz7fkuVc3f7OoZT0fSlEdjimXMYEeQI39lKrRhpFYLV' }}
			        />
		        </TouchableWithoutFeedback>
		        <TouchableWithoutFeedback onPress={()=>this.navigateTo()}>
					<Image
			          style={{ height:200 ,width:200,margin:15,borderRadius:20}}
			          source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTRHDbRipz7fkuVc3f7OoZT0fSlEdjimXMYEeQI39lKrRhpFYLV' }}
			        />
		        </TouchableWithoutFeedback>
		        <TouchableWithoutFeedback>
					<Image
			          style={{ height:120 ,width:200,margin:15,borderRadius:20}}
			          source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYv5mMFwkHVvtcIuT5CGYOycVZI2tvxKxA9DXzIkKp0ka76YSDZg' }}
			        />
		        </TouchableWithoutFeedback>
		        <TouchableWithoutFeedback>
					<Image
			          style={{ height:120 ,width:200,margin:15,borderRadius:20}}
			          source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYv5mMFwkHVvtcIuT5CGYOycVZI2tvxKxA9DXzIkKp0ka76YSDZg' }}
			        />
		        </TouchableWithoutFeedback>
		        <TouchableWithoutFeedback>
					<Image
			          style={{ height:120 ,width:200,margin:15,borderRadius:20}}
			          source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYv5mMFwkHVvtcIuT5CGYOycVZI2tvxKxA9DXzIkKp0ka76YSDZg' }}
			        />
		        </TouchableWithoutFeedback>
		        <TouchableWithoutFeedback>
					<Image
			          style={{ height:120 ,width:200,margin:15,borderRadius:20}}
			          source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYv5mMFwkHVvtcIuT5CGYOycVZI2tvxKxA9DXzIkKp0ka76YSDZg' }}
			        />
		        </TouchableWithoutFeedback>
		        <TouchableWithoutFeedback>
					<Image
			          style={{ height:120 ,width:200,margin:15,borderRadius:20}}
			          source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYv5mMFwkHVvtcIuT5CGYOycVZI2tvxKxA9DXzIkKp0ka76YSDZg' }}
			        />
		        </TouchableWithoutFeedback>

			</ScrollView>

			</View>


			)
	}

};
Object.assign(Images.prototype, TimerMixin);