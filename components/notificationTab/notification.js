import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
import s from '../../styles'
let {
  AppRegistry,
  Component,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View
} =React;
import {buttonClicks} from '../../actions/buttonClicks'
export default class Notification extends Component{
	state={};
	goToChannel(channel){
		buttonClicks({action:'navigation push',nav:'topNav',name:'channel',info:{title:this.props.notification.message}})
	}
	render(){
		return (
			<View>
					<View style={{height:.5,width:320*k,backgroundColor:'rgb(230,230,230)'}}/>

			<TouchableOpacity onPress={this.goToChannel.bind(this,'hello')}>
				<View style={{backgroundColor:this.props.backgroundColor,flexDirection:'row',height:90*k,width:320*k,padding:10,alignItems:'center'}}>
						<Image source={{uri:'http://www.binarytradingforum.com/core/image.php?userid=27&dateline=1355305878'}} 
								style={{borderRadius:5*k,width:60*k,height:60*k}}/>
						<View style={{margin:10,width:220*k,}}>
							
							<Text style={{fontSize:15,marginTop:3,marginBottom:5}}>
								<Text style={{fontSize:16,fontWeight:'bold',color:'rgb(80,80,80)'}}>Johnnrdino  </Text>
								mentioned you in a channel <Text style={{color:'black',fontWeight:'500'}}>#politics</Text>
							</Text>
							<Text style={{fontSize:12,fontWeight:'600',color:'gray',marginTop:5}}>Today, 12:54</Text>
						</View>

					

					</View>
			</TouchableOpacity>
					<View style={{height:.5,width:320*k,backgroundColor:'rgb(230,230,230)'}}/>

			</View>

			)
	}

};
Object.assign(Notification.prototype, TimerMixin);