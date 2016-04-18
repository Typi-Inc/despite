import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  ScrollView,
  TouchableOpacity,
  View
} =React;
import Topic from './topic'
import {topics} from '../mock'
export default class SearchTab extends Component{
	state={};
	render(){
		return (

			<View style={{flex:1}}>
				<ScrollView contentContainerStyle={{marginTop:10}}>

					{topics.map((topic)=>{

						return <Topic topic={topic}/>
					})}




				</ScrollView>



			</View>

			)
	}

};
Object.assign(SearchTab.prototype, TimerMixin);