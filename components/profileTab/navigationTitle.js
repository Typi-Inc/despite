import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
import s from '../../styles'
let {
  AppRegistry,
  Component,
  Text,
  View
} =React;
import {buttonClicks$} from '../../actions/buttonClicks'
export default class NavigationTitle extends Component{
	state={title:'Profile'};
	componentWillMount(){
		this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{
			if(x.action==='create border'){
				this.setState({title:'Profile'})
			}else if(x.action==='delete border'){
				this.setState({title:'Johnnrdino'})
			}
		})
	}
	componentWillUnmount(){
		this.buttonClicksSubscription.unsubscribe()
	}
	render(){
		return (

			<View style={{paddingTop:10}}><Text style={s.viewTitle}>{this.state.title}</Text></View>

			)
	}

};
Object.assign(NavigationTitle.prototype, TimerMixin);