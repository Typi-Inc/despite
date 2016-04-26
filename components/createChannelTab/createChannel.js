import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  StatusBarIOS,
  TextInput,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  View
} =React;
export default class CreateChannel extends Component{
	state={};
	componentWillMount(){
		// StatusBarIOS.setStyle('light-content')
	}
	componentWillUnmount(){
		// StatusBarIOS.setStyle('default')
	}
	componentDidMount(){
		this.input.focus()
	}
	render(){
		return (

			<View style={{backgroundColor:'rgb(245,245,245)',flex:1,}}>
				<ScrollView>

					<View style={{backgroundColor:'white',flexDirection:'row',height:80*k,width:320*k,marginBottom:20,padding:10,alignItems:'center'}}>
						<View 
								style={{borderRadius:5*k,width:60*k,height:60*k,backgroundColor:'gray'}}/>
						 <TextInput //autoFocus={true}
						  ref={el=>this.input=el} autoCorrect={false}
						 multiline={true} 
					        style={{paddingLeft:10,fontSize:17,
					          width:245*k,height:60*k,borderRadius:5}}
					          // value={this.state.text}
					            // onBlur={this.cancel.bind(this)}
					            // onFocus={this._onFocus.bind(this)}
					                placeholder={'Название канала'}
					                placeholderTextColor={'rgb(140,140,140)'}
					                onChange={(event) => {
					                    this.setState({
					                      text: event.nativeEvent.text,})
					                  }}
					      />
						
						<View style={{height:1,width:320*k,backgroundColor:'rgb(235,235,235)'}}/>
					</View>

						<View style={{height:1,width:320*k,backgroundColor:'rgb(235,235,235)'}}/>

					<TouchableOpacity><View style={{backgroundColor:'white',alignItems:'center',paddingLeft:15,flexDirection:'row',height:50*k,width:320*k,}}>
						<Text style={{fontSize:16}}>Add tags</Text>	

					</View></TouchableOpacity>
					<View style={{height:1,width:320*k,backgroundColor:'rgb(235,235,235)'}}/>
					<TouchableOpacity><View style={{backgroundColor:'white',alignItems:'center',paddingLeft:15,flexDirection:'row',height:50*k,width:320*k}}>
						<Text style={{fontSize:16}}>Restrict location</Text>

					</View></TouchableOpacity>
					
					<View style={{height:1,width:320*k,backgroundColor:'rgb(235,235,235)'}}/>
					<TouchableOpacity><View style={{backgroundColor:'white',alignItems:'center',paddingLeft:15,flexDirection:'row',height:50*k,width:320*k}}>
						<Text style={{fontSize:16}}>Channel settings</Text>

					</View></TouchableOpacity>
					<View style={{height:1,width:320*k,backgroundColor:'rgb(235,235,235)',marginBottom:20}}/>
				

						</ScrollView>
			</View>

			)
	}

};
Object.assign(CreateChannel.prototype, TimerMixin);