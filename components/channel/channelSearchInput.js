import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  TextInput,
  View
} =React;
import {buttonClicks} from '../../actions/buttonClicks'
export default class ChannelSearchInput extends Component{
	state={};
	render(){
		return (

			<TextInput autoCorrect={false}
				style={{paddingLeft:10,marginTop:5,marginLeft:35,backgroundColor:'rgb(240,240,240)',
					width:250*k,height:33,borderRadius:5,}}
			   	value={this.state.text}
                onFocus={()=>{buttonClicks({action:'searchInput is focused'})}}
                onBlur={()=>buttonClicks({action:'searchInput is blurred'})}
                placeholder={'#'+this.props.info.title}
                placeholderTextColor={'rgb(140,140,140)'}
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