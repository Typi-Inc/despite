import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  TouchableWithoutFeedback,
  Text,
  ScrollView,
  View
} =React;
export default class ChannelsByTopic extends Component{
	state={}
	render(){
		return (
		<View style={{flex:1,width:320*k}}>
		<ScrollView pagingEnabled={false} directionalLockEnabled={true}>
			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#first Channel</Text>
			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#second Channel</Text>

			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#second Channel</Text>

			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#second Channel</Text>

			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#second Channel</Text>
			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#second Channel</Text>

			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#third Channel</Text>

			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#third Channel</Text>

			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#third Channel</Text>
			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#third Channel</Text>

			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#third Channel</Text>

			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#third Channel</Text>

			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#first Channel</Text>
			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#first Channel</Text>
			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#second Channel</Text>

			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#second Channel</Text>

			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#second Channel</Text>

			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#second Channel</Text>
			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#second Channel</Text>

			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#third Channel</Text>

			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#third Channel</Text>

			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#third Channel</Text>
			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#third Channel</Text>

			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#third Channel</Text>

			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#third Channel</Text>

			<Text style={{fontSize:20,margin:20,alignSelf:'center'}}>#first Channel</Text>


		</ScrollView>
		</View>
			)
	}
};
Object.assign(ChannelsByTopic.prototype, TimerMixin);