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
export default class Direct extends Component{
	state={};
	goToChannel(channel){
		buttonClicks({action:'navigation push',nav:'topNav',name:'channel',info:{title:this.props.direct.toWhom.name}})
	}
	render(){
		return (
			<View>
					<View style={{height:.5,width:320*k,backgroundColor:'rgb(230,230,230)'}}/>

			<TouchableOpacity onPress={this.goToChannel.bind(this,'hello')}>
				<View style={{flexDirection:'row',height:90*k,width:320*k,padding:10,alignItems:'center'}}>
						
						<View style={{flexDirection:'row',flex:6}}>
							<Image source={{uri:this.props.direct.toWhom.image}} 
									style={{borderRadius:5*k,width:60*k,height:60*k}}/>
							<View style={{margin:10,marginTop:0}}>
								
								<Text style={{fontSize:18,fontWeight:'bold',color:'rgb(80,80,80)'}}>{this.props.direct.toWhom.name } </Text>
								<Text style={{fontSize:14,fontWeight:'500',color:'rgb(80,80,80)',marginTop:5}}>Karma: {this.props.direct.toWhom.karma}</Text>
								<Text style={{fontSize:13,fontWeight:'500',color:'rgb(120,120,120)',marginTop:5}}>Whatever you saying in the last ...</Text>

							</View>
						</View>
						<View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end'}}>
							<Text style={{color:'rgb(140,140,140)'}}>{this.props.direct.lastTime}</Text>
							<Image source={{uri:'arrow',isStatic:true}} style={{margin:8,height:14*k,width:8*k,transform:[{rotate:'180deg'}]}}/>
						</View>

					

					</View>
			</TouchableOpacity>
					<View style={{height:.5,width:320*k,backgroundColor:'rgb(230,230,230)'}}/>

			</View>

			)
	}

};
Object.assign(Direct.prototype, TimerMixin);