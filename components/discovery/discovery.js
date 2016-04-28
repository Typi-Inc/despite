import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
let Dimensions = require('Dimensions');
let windowSize = Dimensions.get('window');
const k=windowSize.width/320
const h=windowSize.height/568
import {buttonClicks} from '../../actions/buttonClicks'
let {
  AppRegistry,
  Component,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  View
} =React;
import MessageButtons from '../channel/messageButtons'

import ProfileCard from '../profileTab/profileCard'

export default class Discovery extends Component{
	state={};
	goToChannel(){
		buttonClicks({action:'navigation push',nav:'topNav',name:'channel',info:{name:'random'},messageId:5})
	}
	render(){
		return (
		<TouchableOpacity onPress={this.goToChannel.bind(this)}
		style={[styles.container,
		{marginTop:this.props.index>0?5:0,
		borderTopWidth:this.props.index>0?1:.5,}]}>
			<Text style={styles.post}>Was posted to 
				<Text style={styles.nameOfChannel}>  #some channel name</Text>
			</Text>
			<View style={[styles.viewWithBorder,{borderColor:this.props.color}]}>
				<View style={styles.spaceBetween}>

					<View style={styles.centerRow}>
						<Image source={{uri:this.props.message.author.image}}
						style={styles.profileImage}/>
						<View style={{marginLeft:5}}>
							<Text style={styles.authorName}>{this.props.message.author.name}</Text>
							<Text style={s.smallGreyText}>12:54</Text>
						</View>
					</View>
					<MessageButtons index={this.props.index} karma={this.props.message.karma} haveIRated={this.props.message.haveIRated} isSaved={false}/>
				</View>

				<Text style={styles.messageText}>
					{this.props.message.text}
				</Text>
				<View style={{justifyContent:'flex-end',paddingTop:4}}>
					<Text style={s.smallGreyText}>{Math.floor(Math.random()*100)} сообщений в разговоре</Text>
				</View>
			</View>
		</TouchableOpacity>

			)
	}

};
Object.assign(Discovery.prototype, TimerMixin);

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding:5, marginBottom:5,
	borderBottomWidth:1,borderTopWidth:1,
	borderColor:'rgb(235,235,235)'
  },
  authorName:{
  	fontSize:17,fontWeight:'bold',color:'rgb(80,80,80)'
  },
  spaceBetween:{
  	flexDirection:'row',justifyContent:'space-between'
  },
  centerRow:{
  	flexDirection:'row',alignItems:'center'
  },
  messageText: {
    fontSize:17, width:300*k,margin:5,marginLeft:0,lineHeight:23,
    // color:'rgb(60,60,60)'

  },
  profileImage:{borderRadius:5*k,
  	width:40*k,
  	height:40*k
  },
  nameOfChannel:{
  	color:'black',fontSize:16,fontWeight:'500'
  },
  post:{
  	color:'rgb(100,100,100)',
  	fontSize:15,
  	margin:5,
  	marginBottom:10,
  },
  viewWithBorder:{
  	// marginLeft:4,
  	paddingLeft:10,paddingRight:5,
	borderLeftWidth:2,
  }

});
