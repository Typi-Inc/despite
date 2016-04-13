import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  TouchableWithoutFeedback,
  Text,
  View
} =React;
export default class Topic extends Component{
	state={}
	render(){
		return (
		<TouchableWithoutFeedback onPress={()=>this.props.activate(this.props.topic)}>
			<Text style={{height:40,paddingTop:20,fontSize:15,color:this.props.active?'black':'rgb(160,160,160)',marginLeft:5*k,marginRight:5*k,alignSelf:'center'}}> {this.props.topic.name}</Text>
		</TouchableWithoutFeedback>
			)
	}
};
Object.assign(Topic.prototype, TimerMixin);