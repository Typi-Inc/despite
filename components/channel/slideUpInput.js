import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
import {veryFast,fast,keyboard} from '../animations'
import {buttonClicks} from '../../actions/buttonClicks'
let {
  AppRegistry,
  Component,
  Text,
  TextInput,
  Animated,
  DeviceEventEmitter,
  Dimensions,
  LayoutAnimation,
  Image,
  View,
  TouchableOpacity,
  StatusBarIOS
} =React;
var RCTStatusBarManager = require('NativeModules').StatusBarManager;
export default class SlideUpInput extends Component{
	state={height:0*k,allCanSee:true,allCanAnswer:true,statusBarHeight:0,text:''};
	show(e){
		if(this.t){
			LayoutAnimation.configureNext(keyboard);
			this.t.setNativeProps({style:{bottom:e.endCoordinates.height}})
		}
		 // this.props.setBottom(this.addHeight)
 	 }
 	hide(){
 	  	if(this.t){
 	  		LayoutAnimation.configureNext(keyboard);
			this.t.setNativeProps({style:{bottom:0}})
 	  	}
 	  	this.props.setBottom(this.addHeight)
	  }
	getAddHeight(){
		return this.addHeight
	}
	componentWillMount(){
	  	this.windowHeight=Dimensions.get('window').height
	  	
	  	RCTStatusBarManager.getHeight(this.callMe.bind(this))
	  	 this._keyboardWillShowSubscription= DeviceEventEmitter.addListener('keyboardWillShow', this.show.bind(this));
	      this._keyboardWillHideSubscription= DeviceEventEmitter.addListener('keyboardWillHide', this.hide.bind(this));
	 
	  }
	  componentWillUnmount(){
	  	
	  	this._keyboardWillShowSubscription.remove()
	  	this._keyboardWillHideSubscription.remove()

	  }
	  callMe(e){
	  	this.setState({statusBarHeight:e.height})
	  }
	 
	render(){
		this.windowHeight=this.windowHeight || 568
		this.addHeight=this.addHeight || 0
		
		return (
          <View ref={el=>this.t=el} style={{position:'absolute',
          justifyContent:'flex-end',alignItems:'flex-end',bottom:0,left:0,width:320*k}}>
              <View ref={el=>this.main=el} 
              style={{backgroundColor:'white',marginBottom:0,
             	 height:Math.max(43*k, (12*k+this.state.height)),borderTopWidth:.5,
              	flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-end',
                borderColor:'rgb(180,180,180)',width:320*k,}}>
                  <TextInput
                    ref={el=>this.textInput=el}
                    style={{height: Math.max(30*k, this.state.height),marginLeft:7,flex:5,
                    fontSize:17,alignItems:'flex-end',
                      borderColor: '#BD10E0', borderLeftWidth:2,justifyContent:'flex-start',
                      alignSelf:'center',width:240*k,paddingLeft:10*k,paddingBottom:4*k}}
                    value={this.state.text}
                    onChange={(event) => {
                      // event.nativeEvent.text.length===0?this.submit.setNativeProps({style:{backgroundColor:'gray'}}):this.submit.setNativeProps({style:{backgroundColor:'#0084b4'}})
                      LayoutAnimation.configureNext(veryFast)
                        this.setState({
                          text: event.nativeEvent.text,
                          height: Math.min(event.nativeEvent.contentSize.height,129*k)
                        });
                       	this.addHeight=this.state.height<35*k?0:this.state.height-30*k
                        this.props.setBottom(this.addHeight)
                      }}
                    // clearButtonMode={'while-editing'}
                    multiline={true}
                    placeholder={'Начать разговор'}
                    />
                    {/\S/.test(this.state.text)?<Text onPress={()=>this.textInput.blur()} style={[s.blueText,{
                    	color:'#BD10E0',fontWeight:'600',flex:1,marginRight:5,//alignSelf:'center',
                    	fontSize:17,marginBottom:11*k,marginLeft:5*k}]}>Send</Text>:
                    	<TouchableOpacity onPress={()=>buttonClicks({action:'add',component:'hooks'})}><Text
                    	style={{
                    		color:'#BD10E0',fontWeight:'400',
                    		marginRight:10*k,fontSize:30*k,marginBottom:5*k,
                    	}}

                    	>+</Text></TouchableOpacity>

                    }
                  
                
              </View> 

              <View style={{backgroundColor:'blue'}} ref={el=>this.slide=el}/>
            

            </View>

			)
	}

};
Object.assign(SlideUpInput.prototype, TimerMixin);