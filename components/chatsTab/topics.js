import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  View
} =React;
import {buttonClicks} from '../../actions/buttonClicks'
export default class Topics extends Component{
	state={activeIndex:0};
	activate(topic){
		this.setState({activeIndex:topic.index})
		this.scroll.scrollTo({x: topic.index*20*k, y:0, animated: true})
		buttonClicks({action:'choose topic', topic:topic})
	}
	scrollToTab(i){
		if(i>4) this.scroll.scrollTo({x:i*50*k, y:0, animated: true})
		else this.scroll.scrollTo({x:i*25*k, y:0, animated: true})
	}
	render(){
			// console.log('iam here ',this.props)

		return (

			<View style={{width:320*k,height:65,borderBottomWidth:.5,borderColor:'rgb(215,215,215)',justifyContent:'center'}}>
						<ScrollView ref={el=>this.scroll=el} style={{...center}} horizontal={true} 
							showsHorizontalScrollIndicator={false}>
					{this.props.tabs.map((tab, i) => {
				          return <TouchableWithoutFeedback key={tab} onPress={() => {
				          	this.scroll.scrollTo({x: i*25*k, y:0, animated: true})
				          	this.props.goToPage(i)}} >
								<Text  name={tab} style={{height:40,
									paddingTop:20,fontSize:15,
									color:this.props.activeTab===i?'black':'rgb(160,160,160)',
									marginLeft:5*k,marginRight:5*k,alignSelf:'center'}}> {tab}</Text>
							</TouchableWithoutFeedback>
				        })}
						</ScrollView></View> 

			)
	}

};
Object.assign(Topics.prototype, TimerMixin);