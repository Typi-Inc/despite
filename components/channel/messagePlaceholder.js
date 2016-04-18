import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  View
} =React;
export default class MessagePlaceholder extends Component{
	state={};
	render(){
		let gray='rgb(230,230,230)'
		return (

			<View style={{flex:1}}>
				<View style={{margin:8,marginRight:0,marginLeft:7,
						borderColor:gray,borderLeftWidth:2,marginTop:10,
						paddingLeft:5,paddingBottom:0,paddingTop:0}}>
					<View>
						<View style={{flexDirection:'row',}}>
							<View style={{backgroundColor:gray,borderRadius:5*k,width:35*k,height:35*k,margin:2}}/>
							<View>
								<View style={{backgroundColor:gray,borderRadius:4*k,width:120*k,height:12*k,margin:4}}/>
								<View style={{backgroundColor:gray,borderRadius:4*k,width:50*k,height:3*k,margin:4}}/>
							</View>
						</View>
						<View style={{backgroundColor:gray,borderRadius:4*k,width:290*k,height:5*k,margin:5}}/>
						<View style={{backgroundColor:gray,borderRadius:4*k,width:290*k,height:5*k,margin:5}}/>
						<View style={{backgroundColor:gray,borderRadius:4*k,width:290*k,height:5*k,margin:5}}/>
						<View style={{backgroundColor:gray,borderRadius:4*k,width:290*k,height:5*k,margin:5}}/>
						<View style={{backgroundColor:gray,borderRadius:4*k,width:290*k,height:5*k,margin:5}}/>
						<View style={{backgroundColor:gray,borderRadius:4*k,width:290*k,height:5*k,margin:5}}/>
						<View style={{backgroundColor:gray,borderRadius:4*k,width:290*k,height:5*k,margin:5}}/>
						<View style={{backgroundColor:gray,borderRadius:4*k,width:50*k,height:3*k,margin:5}}/>
					</View>
				</View>
				<View style={{margin:8,marginRight:0,marginLeft:7,
						borderColor:gray,borderLeftWidth:2,
						paddingLeft:5,paddingBottom:0,paddingTop:0}}>

					<View>

						<View style={{flexDirection:'row',}}>
							<View style={{backgroundColor:gray,borderRadius:5*k,width:35*k,height:35*k,margin:2}}/>
							<View>
								<View style={{backgroundColor:gray,borderRadius:4*k,width:120*k,height:12*k,margin:4}}/>
								<View style={{backgroundColor:gray,borderRadius:4*k,width:50*k,height:3*k,margin:4}}/>
							</View>

						</View>
						<View style={{backgroundColor:gray,borderRadius:4*k,width:290*k,height:5*k,margin:5}}/>
						<View style={{backgroundColor:gray,borderRadius:4*k,width:290*k,height:5*k,margin:5}}/>
						<View style={{backgroundColor:gray,borderRadius:4*k,width:290*k,height:5*k,margin:5}}/>
						<View style={{backgroundColor:gray,borderRadius:4*k,width:290*k,height:5*k,margin:5}}/>
						<View style={{backgroundColor:gray,borderRadius:4*k,width:290*k,height:5*k,margin:5}}/>
						<View style={{backgroundColor:gray,borderRadius:4*k,width:290*k,height:5*k,margin:5}}/>
						<View style={{backgroundColor:gray,borderRadius:4*k,width:290*k,height:5*k,margin:5}}/>
						<View style={{backgroundColor:gray,borderRadius:4*k,width:290*k,height:5*k,margin:5}}/>
						<View style={{backgroundColor:gray,borderRadius:4*k,width:290*k,height:5*k,margin:5}}/>
						<View style={{backgroundColor:gray,borderRadius:4*k,width:290*k,height:5*k,margin:5}}/>
					
						<View style={{backgroundColor:gray,borderRadius:4*k,width:50*k,height:3*k,margin:5}}/>
					</View>
				</View>
				<View style={{margin:8,marginRight:0,marginLeft:7,
						borderColor:gray,borderLeftWidth:2,
						paddingLeft:5,paddingBottom:0,paddingTop:0}}>

					<View>

						<View style={{flexDirection:'row',}}>
							<View style={{backgroundColor:gray,borderRadius:5*k,width:35*k,height:35*k,margin:2}}/>
							<View>
								<View style={{backgroundColor:gray,borderRadius:4*k,width:120*k,height:12*k,margin:4}}/>
								<View style={{backgroundColor:gray,borderRadius:4*k,width:50*k,height:3*k,margin:4}}/>
							</View>

						</View>
						<View style={{backgroundColor:gray,borderRadius:4*k,width:290*k,height:5*k,margin:5}}/>
						<View style={{backgroundColor:gray,borderRadius:4*k,width:290*k,height:5*k,margin:5}}/>
						<View style={{backgroundColor:gray,borderRadius:4*k,width:290*k,height:5*k,margin:5}}/>
						<View style={{backgroundColor:gray,borderRadius:4*k,width:290*k,height:5*k,margin:5}}/>
						
						<View style={{backgroundColor:gray,borderRadius:4*k,width:50*k,height:3*k,margin:5}}/>
					</View>
				</View>

			</View>

			)
	}

};
Object.assign(MessagePlaceholder.prototype, TimerMixin);