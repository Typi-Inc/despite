import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
import Discovery from './discovery'

let {
  AppRegistry,
  Component,
  ScrollView,
  Text,
  View
} =React;
import {messages,colors } from '../mock'
export default class DiscoverList extends Component{
	state={};
	render(){
		return (

			<View style={{backgroundColor:'rgb(245,245,245)',flex:1}}>


				<ScrollView contentContainerStyle={{backgroundColor:'rgb(245,245,245)'}}>
					{messages.map((message,i)=>{

						return <Discovery color={colors[`${i%21}`]} key={i} message={message} index={i}/>

					})}


				</ScrollView>

			</View>

			)
	}

};
Object.assign(DiscoverList.prototype, TimerMixin);