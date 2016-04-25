import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
import {veryFast} from '../animations'
let {
  AppRegistry,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  Component,
  Text,
  View
} =React;
import {buttonClicks} from '../../actions/buttonClicks'
import Sound from 'react-native-sound'
	var whoosh = new Sound('tap-mellow.aif', Sound.MAIN_BUNDLE, (error) => {
			  if (error) {
			    // console.log('failed to load the sound', error);
			  } else { // loaded successfully
			    // console.log('duration in seconds: ' + whoosh.getDuration() +
			    //     'number of channels: ' + whoosh.getNumberOfChannels());
			  }
			});

	var cok= new Sound('tap-muted.aif', Sound.MAIN_BUNDLE, (error) => {
			  if (error) {
			  } else { // loaded successfully
			    // console.log('duration in seconds: ' + whoosh.getDuration() +
			    //     'number of channels: ' + whoosh.getNumberOfChannels());
			  }
			});

export default class MessageButtons extends Component{

	state={karma:Math.floor(Math.random()*1000),haveIRated:false,isSaved:false,lineCount:Math.floor(Math.random()*100)};

	render(){
		return (

			<View style={{flexDirection:'row',...center}}>
								
								{this.state.haveIRated?<View style={{flexDirection:'row'}}>
									<Text style={{fontWeight:'500',
									color:'#109440',marginRight:17*k,fontSize:17,alignSelf:'center'}}>+{this.state.karma}</Text>
									<TouchableHighlight underlayColor={'transparent'} onPress={()=>{
										LayoutAnimation.configureNext(veryFast)
										this.setState({isSaved:!this.state.isSaved})
									}} style={{padding:8,...center,marginRight:10*k}}>
										{this.state.isSaved?<Image source={{uri:'saved',isStatic:true,}} style={{height:18*k,width:16*k,}}/>:
										<Image source={{uri:'save',isStatic:true,}} style={{height:18*k,width:16*k,}}/>}
									</TouchableHighlight>	
								</View>:<View style={{flexDirection:'row'}}>
									<TouchableOpacity onPress={()=>{
										whoosh.setVolume(3)
										whoosh.play()
										LayoutAnimation.configureNext(veryFast)
										this.setState({haveIRated:true,karma:this.state.karma+1})
									}} style={{padding:8,...center,marginRight:7*k}}><Image source={{uri:'up',isStatic:true,}} style={{height:25*k,width:25*k,}}/></TouchableOpacity>
									<TouchableOpacity onPress={()=>{
										cok.setVolume(0.7)
										cok.play()
										LayoutAnimation.configureNext(veryFast)
										this.setState({haveIRated:true,karma:this.state.karma-1})
									}} style={{padding:8,...center,marginRight:5*k
										}}>
									<Image source={{uri:'up',isStatic:true}} 
										style={{height:25*k,width:25*k,transform:[{rotate:'180deg'}]}}/></TouchableOpacity></View>

								}
								
								<TouchableOpacity //style={{backgroundColor:'blue'}} 
									onPress={()=>buttonClicks({action:'messageActions',props:this.state})}>
									<View style={{width:27*k,marginLeft:7*k,paddingRight:6*k,height:40*k,justifyContent:'center',alignItems:'flex-end',}}>
										<Image source={{uri:'more',isStatic:true,}} style={s.menuImage}/>
									</View>
								</TouchableOpacity>
							</View>

			)
	}

};
Object.assign(MessageButtons.prototype, TimerMixin);