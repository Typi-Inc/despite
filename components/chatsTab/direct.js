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
						
					<Image source={{uri:this.props.direct.toWhom.image}} 
							style={{borderRadius:5*k,width:70*k,height:70*k}}/>
					<View style={{margin:10,marginTop:0}}>
						
						<Text style={{fontSize:18,fontWeight:'bold',color:'rgb(80,80,80)',marginTop:7}}>{this.props.direct.toWhom.name } </Text>
						<Text style={{fontSize:14,fontWeight:'500',color:'rgb(80,80,80)',marginTop:5}}>Karma: {this.props.direct.toWhom.karma}</Text>
						<Text style={{fontSize:13,fontWeight:'500',color:'rgb(120,120,120)',marginTop:8}}>Whatever you saying in the last day..</Text>

					</View>
					<Text style={{position:'absolute',top:10,right:10,color:'rgb(140,140,140)'}}>{this.props.direct.lastTime}</Text>
					
					{this.props.direct.counter>0?<View style={{position:'absolute',
					top:30*k,right:15,padding:6,paddingTop:2,paddingBottom:2,borderRadius:10,backgroundColor:'rgb(14,122,254)'}}>
						<Text style={{color:'white',fontWeight:'500'}}>{this.props.direct.counter}</Text>
					</View>:null}

					

					</View>
			</TouchableOpacity>
					<View style={{height:.5,width:320*k,backgroundColor:'rgb(230,230,230)'}}/>

			</View>

			)
	}

};
Object.assign(Direct.prototype, TimerMixin);