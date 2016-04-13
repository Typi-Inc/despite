import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  ScrollView,
  View
} =React;
import {buttonClicks} from '../../actions/buttonClicks'
import Topic from './topic'
export default class Topics extends Component{
	state={activeIndex:0};
	activate(topic){
		this.setState({activeIndex:topic.index})
		this.scroll.scrollTo({x: topic.index*20*k, y:0, animated: true})
		buttonClicks({action:'choose topic', topic:topic})
	}
	render(){
		return (

			<View style={{width:320*k,}}>
						<ScrollView ref={el=>this.scroll=el} style={{padding:10}} horizontal={true} showsHorizontalScrollIndicator={false}>
					<Topic activate={this.activate.bind(this)} active={this.state.activeIndex===0} topic={{index:0,name:'For You'}}/>
					<Topic activate={this.activate.bind(this)} active={this.state.activeIndex===1} topic={{index:1,name:'Nearby'}}/>
					<Topic activate={this.activate.bind(this)} active={this.state.activeIndex===2} topic={{index:2 ,name:'Trending'}}/>
					<Topic activate={this.activate.bind(this)} active={this.state.activeIndex===3} topic={{index:3 ,name:'Dating'}}/>
					<Topic activate={this.activate.bind(this)} active={this.state.activeIndex===4} topic={{index:4 ,name:'Eating out'}}/>
					<Topic activate={this.activate.bind(this)} active={this.state.activeIndex===5} topic={{index:5 ,name:'Funny'}}/>
						</ScrollView></View> 

			)
	}

};
Object.assign(Topics.prototype, TimerMixin);