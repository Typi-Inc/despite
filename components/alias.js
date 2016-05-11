import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  Image,
  PanResponder,
  Animated,
  TouchableOpacity,
  View
} =React;
export default class Alias extends Component{
	constructor(props){
	    super(props);

	    this.state = {
	    	open:false,
	        pan     : new Animated.ValueXY({x:250,y:400})   
	    };

	    this.panResponder = PanResponder.create({    
	        onStartShouldSetPanResponder : () => true,
	        onPanResponderMove           : Animated.event([null,{ 
	            dx : this.state.pan.x,
	            dy : this.state.pan.y
	        }]),
	        onPanResponderRelease        : (e, gesture) => {
	        	// Animated.spring(            
	         //   		 this.state.pan,         
	         //   		 {toValue:{x:0,y:0}}     
	       		// ).start();
	       		this.state.pan.setOffset({x: this.currentPanValue.x, y: this.currentPanValue.y});
 				this.state.pan.setValue({x: 0, y: 0});
	        } //Step 4
	    });
	}
	componentDidMount(){
		this.currentPanValue = {x: 0, y: 0};
		this.panListener = this.state.pan.addListener((value) => this.currentPanValue = value);

	}
	componentWillUnmount(){
		this.state.pan.removeListener(this.panListener);

	}
	show(){

	}
	hide(){

	}
	render(){
		this.anim= this.anim || new Animated.Value(0)
		return (

			<Animated.View 
				onPress={()=>console.log('touch')}
			style={{position:'absolute', 
			bottom:55,
			right:10,
			// ...this.state.pan.getLayout(),
			height:50*k,
			width:50*k,
			borderRadius:50*k/2,
			shadowOpacity:0.7,
			shadowOffset:{width:4,height:3}}}>
				
				<Image 
					source={{uri:'http://www.binarytradingforum.com/core/image.php?userid=27&dateline=1355305878'}}
					style={{
						height:50*k,
						width:50*k,
						borderRadius:50*k/2,
					}}
				/>
			</Animated.View>

			)
	}

};
Object.assign(Alias.prototype, TimerMixin);