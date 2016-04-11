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
export default class Message extends Component{
	state={};
	render(){
		return (

			<View style={s.container}>					
					<View style={{margin:8,marginRight:0,marginLeft:4,
						borderColor:this.props.color,borderLeftWidth:2,
						paddingLeft:5,paddingBottom:0,paddingTop:0}}>

						<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:5*k,width:300*k}}>
							<View style={{flexDirection:'row',...center}}> 
								<Image source={{uri:'http://www.binarytradingforum.com/core/image.php?userid=27&dateline=1355305878'}} 
								style={{backgroundColor:'blue', borderRadius:5*k,width:35*k,height:35*k}}/>
								<View style={{margin:5}}>	
									<Text style={{fontSize:18,fontWeight:'bold',color:'rgb(80,80,80)'}}>Johnnrdino</Text>
									<Text style={s.smallGreyText}>12:54</Text>

								</View>
							</View>
							<View style={{flexDirection:'row',...center}}>
								<Text style={{color:'green',marginRight:5*k,fontSize:16}}>+120</Text>
								<TouchableOpacity onPress={()=>buttonClicks({action:'messageActions',props:this.props})}>
									<View style={{width:40*k,marginLeft:5*k,paddingRight:5*k,height:40*k,justifyContent:'center',alignItems:'flex-end',}}>
										<Image source={{uri:'menu',isStatic:true,}} style={s.menuImage}/>
									</View>
								</TouchableOpacity>
							</View>
						</View>
						<Text style={{width:300*k,marginLeft:3*k,fontSize:16}}> 
							I guess it would be awesome if they finally decide to do it,

							who is going? what are your ideas on politics in western europe. do your
								agreement on the brexit issue fully subsidized
						</Text>

						<View style={{flexDirection:'row',marginTop:5*k,marginLeft:3*k,marginBottom:0}}>
							<Text style={s.smallGreyText}>Reply</Text>

							<Text style={s.smallGreyText}>      View line</Text>
						</View>
					</View>

					

				

			</View>

			)
	}

};
Object.assign(Message.prototype, TimerMixin);