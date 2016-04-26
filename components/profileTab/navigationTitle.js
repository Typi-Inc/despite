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
	state={title:'Profile',fontSize:0.1};
	componentWillMount(){
		this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{
			if(x.action==='create border'){
				this.setState({title:'Profile',fontSize:0.1})
			}else if(x.action==='delete border'){
				this.setState({title:'Johnnrdino',fontSize:11})
			}
		})
	}
	shouldComponentUpdate(nextProps,nextState){
		if (this.state!==nextState) return true
		return false
	}
	componentWillUnmount(){
		this.buttonClicksSubscription.unsubscribe()
	}
	render(){
		return (

			<View style={{paddingTop:10,...center}}><Text style={s.viewTitle}>{this.state.title}</Text>
				<Text style={{fontSize:this.state.fontSize,marginTop:2}}>14 messages</Text>

			</View>

			)
	}

};
Object.assign(NavigationTitle.prototype, TimerMixin);