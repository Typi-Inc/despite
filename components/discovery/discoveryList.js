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
  RefreshControl,
  View
} =React;
import {messages,colors } from '../mock'
export default class DiscoverList extends Component{
	state={refreshing:false};
	shouldComponentUpdate(nextProps,nextState){
		return this.props!==nextProps
	}
	_onRefresh() {
	    this.setState({refreshing: true});
	    this.setTimeout(()=>{
	   	    this.setTimeout(()=>this.setState({refreshing:true}),5000)

	    },10000)
	}
	render(){
		return (

			<View style={{backgroundColor:'rgb(245,245,245)',flex:1}}>


				<ScrollView 
				refreshControl={<RefreshControl
						refreshing={this.state.refreshing}
						onRefresh={this._onRefresh.bind(this)}
					/>
				}
				removeClippedSubviews={true} contentContainerStyle={{backgroundColor:'rgb(245,245,245)'}}>
					{messages.map((message,i)=>{

						return <Discovery color={colors[`${i%21}`]} key={i} message={message} index={i}/>

					})}


				</ScrollView>

			</View>

			)
	}

};
Object.assign(DiscoverList.prototype, TimerMixin);