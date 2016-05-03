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
	// activate(topic){
	// 	this.setState({activeIndex:topic.index})
	// 	this.scroll.scrollTo({x: topic.index*20*k, y:0, animated: true})
	// 	buttonClicks({action:'choose topic', topic:topic})
	// }
	scrollToTab(i){
		// if(i>3 && i<5) this.scroll.scrollTo({x:i*50, y:0, animated: true})
		// else if(i>4)  this.scroll.scrollTo({x:i*60, y:0, animated: true})
		//else
		 let lengthOfTopicsBefore=0;
		 this.props.tabs.map((topic,index)=>{
		 	if(index>i) return;
		 	else if(i<1) {
		 		lengthOfTopicsBefore=0
		 		return
		 	}
		 	lengthOfTopicsBefore+=topic.length
		 })
		 this.scroll.scrollTo({x:Math.min(lengthOfTopicsBefore*i*2,this.scrollWidth-315*k), y:0, animated: true})
	}
	render(){
		this.scrollWidth=this.scrollWidth || 320*k

		return (

			<View style={{width:320*k,height:70,borderBottomWidth:.5,borderColor:'rgb(215,215,215)',justifyContent:'center'}}>
						<ScrollView ref={el=>this.scroll=el} contentContainerStyle={{...center,paddingTop:14}} 
						scrollEventThrottle={1000}
						onScroll={e=>{
							this.scrollWidth=e.nativeEvent.contentSize.width
						}}
						horizontal={true} 
							showsHorizontalScrollIndicator={false}>
					{this.props.tabs.map((tab, i) => {
				          return <TouchableWithoutFeedback key={tab} onPress={() => {
				          	// this.scroll.scrollTo({x: i*25, y:0, animated: true})
				          	this.props.goToPage(i)
				          	// this.scrollToTab(i)
				          }} >
								<Text  name={tab} style={{height:40,
									paddingTop:20,fontSize:15,fontWeight:this.props.activeTab===i?'500':'400',
									color:this.props.activeTab===i?'black':'rgb(160,160,160)',
									marginLeft:5*k,marginRight:5*k,alignSelf:'center'}}>  {tab} </Text>
							</TouchableWithoutFeedback>
				        })}
						</ScrollView></View> 

			)
	}

};
Object.assign(Topics.prototype, TimerMixin);