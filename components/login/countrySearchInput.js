import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
  View
} =React;
import {keyboard} from '../animations'
import {registerNav} from '../../actions/buttonClicks'
export default class CountrySearchInput extends Component{
	state={};
  _onFocus(){
    console.log('focusing')
    registerNav({action:'focus start'})
    LayoutAnimation.configureNext(keyboard)
    this.input.setNativeProps({style:{width:225*k,backgroundColor:'white'}})
    this.cancelText.setNativeProps({style:{fontSize:15}})
  }
  cancel(arg){
    if(arg==='cancelButton'){
        registerNav({action:'cancel'})
        if(this.state.text!==''){
           registerNav({action:'searchText',text:''})
          this.setState({text:''})}

       this.input.blur()
    }else{

       LayoutAnimation.configureNext(keyboard)
        this.input.setNativeProps({style:{width:270*k,backgroundColor:'rgb(238,238,238)'}})
        this.cancelText.setNativeProps({style:{fontSize:0.001}})
    }
  }
	render(){
		return (
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',}}>


			<TextInput autoCorrect={false} ref={(e)=>this.input=e} clearButtonMode={'while-editing'}
				style={{paddingLeft:10,marginTop:5,marginLeft:35,backgroundColor:'rgb(240,240,240)',
					width:270*k,height:35,borderRadius:5,marginRight:5}}
			   	value={this.state.text}
          onFocus={this._onFocus.bind(this)}
                onBlur={this.cancel.bind(this)}
                placeholder={'Find your country'}
                placeholderTextColor={'rgb(140,140,140)'}
                onChange={(event) => {
                  // event.nativeEvent.text.length===0?this.submit.setNativeProps({style:{backgroundColor:'gray'}}):this.submit.setNativeProps({style:{backgroundColor:'#0084b4'}})
                  registerNav({action:'searchText',text:event.nativeEvent.text})
                  this.setState({
                      text: event.nativeEvent.text,})
                    
                  }}
      
      
			/>
       <TouchableOpacity onPress={this.cancel.bind(this,'cancelButton')} 
      style={{padding:3,paddingLeft:0,}}>
        <Text style={{fontWeight:'500',fontSize:0.01,marginRight:6*k,marginTop:4,}}
         ref={el=>this.cancelText=el}>Cancel</Text>
      </TouchableOpacity>
      </View>

			)
	}

};
Object.assign(CountrySearchInput.prototype, TimerMixin);