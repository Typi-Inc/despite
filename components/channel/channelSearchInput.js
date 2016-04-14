import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  TextInput,
  View
} =React;
export default class ChannelSearchInput extends Component{
	state={};
	render(){
		return (

			<TextInput
				style={{paddingLeft:10,marginTop:5,marginLeft:35,backgroundColor:'rgb(230,230,230)',
					width:250*k,height:33,borderRadius:5,borderColor:'rgb(230,230,230)',borderWidth:1}}
			   	value={this.state.text}
                onFocus={()=>{console.log('focusing second')}}
                placeholder={'#'+this.props.info.title}
                placeholderTextColor={'rgb(120,120,120)'}
                onChange={(event) => {
                  // event.nativeEvent.text.length===0?this.submit.setNativeProps({style:{backgroundColor:'gray'}}):this.submit.setNativeProps({style:{backgroundColor:'#0084b4'}})
                    this.setState({
                      text: event.nativeEvent.text,})
                    
                  }}
			/>

			)
	}

};
Object.assign(ChannelSearchInput.prototype, TimerMixin);