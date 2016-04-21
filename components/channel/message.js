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
  TouchableWithoutFeedback,
  LayoutAnimation,
  TouchableHighlight,
  View
} =React;
import Sound from 'react-native-sound'
	var whoosh = new Sound('tap-warm.aif', Sound.MAIN_BUNDLE, (error) => {
			  if (error) {
			    console.log('failed to load the sound', error);
			  } else { // loaded successfully
			    console.log('duration in seconds: ' + whoosh.getDuration() +
			        'number of channels: ' + whoosh.getNumberOfChannels());
			  }
			});

	var cok= new Sound('tap-muted.aif', Sound.MAIN_BUNDLE, (error) => {
			  if (error) {
			    console.log('failed to load the sound', error);
			  } else { // loaded successfully
			    console.log('duration in seconds: ' + whoosh.getDuration() +
			        'number of channels: ' + whoosh.getNumberOfChannels());
			  }
			});

import {veryFast} from '../animations'
import {buttonClicks} from '../../actions/buttonClicks'
export default class Message extends Component{
	state={karma:120,haveIRated:false,isSaved:false};
	render(){
		return (

			<View style={s.container}>					
					<View style={{margin:8,marginRight:0,marginLeft:4,
						borderColor:this.props.color,borderLeftWidth:2,
						paddingLeft:5,paddingBottom:0,paddingTop:0}}>

						<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:5*k,width:300*k}}>
							<TouchableWithoutFeedback style={{backgroundColor:'red'}} onPress={()=>buttonClicks({action:'profileCard',profile:{name:'Johnnrdino',karma:1232,image:'http://www.binarytradingforum.com/core/image.php?userid=27&dateline=1355305878'}})}>
							
								<View style={{flexDirection:'row',...center,}}> 
										<Image source={{uri:'http://www.binarytradingforum.com/core/image.php?userid=27&dateline=1355305878'}} 
										style={{borderRadius:5*k,width:35*k,height:35*k}}/>
										<View style={{margin:5}}>	
											<Text style={{fontSize:16,fontWeight:'bold',color:'rgb(80,80,80)'}}>Johnnrdino</Text>
											<Text style={s.smallGreyText}>12:54</Text>

										</View>
								</View>
							</TouchableWithoutFeedback>

							<View style={{flexDirection:'row',...center}}>
								
								{this.state.haveIRated?<View style={{flexDirection:'row'}}>
									<Text style={{fontWeight:'500',
									color:'green',marginRight:17*k,fontSize:17,alignSelf:'center'}}>+{this.state.karma}</Text>
									<TouchableHighlight underlayColor={'transparent'} onPress={()=>{
										LayoutAnimation.configureNext(veryFast)
										this.setState({isSaved:!this.state.isSaved})
									}} style={{padding:8,...center,marginRight:10*k}}>
										{this.state.isSaved?<Image source={{uri:'saved',isStatic:true,}} style={{height:17*k,width:15*k,}}/>:
										<Image source={{uri:'save',isStatic:true,}} style={{height:17*k,width:15*k,}}/>}
									</TouchableHighlight>	
								</View>:<View style={{flexDirection:'row'}}>
									<TouchableOpacity onPress={()=>{
										whoosh.setVolume(0.8)
										whoosh.play()
										LayoutAnimation.configureNext(veryFast)
										this.setState({haveIRated:true,karma:this.state.karma+1})
									}} style={{padding:8,...center,marginRight:5*k}}><Image source={{uri:'up',isStatic:true,}} style={{height:25*k,width:25*k,}}/></TouchableOpacity>
									<TouchableOpacity onPress={()=>{
										cok.play()
										LayoutAnimation.configureNext(veryFast)
										this.setState({haveIRated:true,karma:this.state.karma-1})
									}} style={{padding:8,...center,marginRight:5*k}}>
									<Image source={{uri:'up',isStatic:true}} 
										style={{height:25*k,width:25*k,transform:[{rotate:'180deg'}]}}/></TouchableOpacity></View>

								}
								
								<TouchableOpacity onPress={()=>buttonClicks({action:'messageActions',props:this.props})}>
									<View style={{width:27*k,marginLeft:5*k,paddingRight:5*k,height:40*k,justifyContent:'center',alignItems:'flex-end',}}>
										<Image source={{uri:'menu',isStatic:true,}} style={s.menuImage}/>
									</View>
								</TouchableOpacity>
							</View>
						</View>
						<Text style={{width:300*k,marginLeft:3*k,fontSize:16}}> 
							I guess it would be awesome if they finally decide to do it,
							who is going? what are your ideas on politics in western europe. do your
								agreement on the brexit issue fully subsidized yes inedeed true
						</Text>

						<View style={{flexDirection:'row',marginLeft:3*k,marginBottom:0}}>
							<TouchableOpacity onPress={()=>buttonClicks({action:'reply pressed',to:'Johnnrdino'})} style={{height:24,width:54,justifyContent:'flex-end'}}><Text style={s.smallGreyText}>Reply</Text></TouchableOpacity>

							<TouchableOpacity style={{height:24,width:80,justifyContent:'flex-end'}} onPress={()=>buttonClicks({action:'navigation push',name:'line',nav:'channelNav',info:this.props})}><Text style={s.smallGreyText}>View line</Text></TouchableOpacity>
						</View>
					</View>

					

				

			</View>

			)
	}

};
Object.assign(Message.prototype, TimerMixin);