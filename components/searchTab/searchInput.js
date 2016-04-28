import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  TextInput,
  LayoutAnimation,
  View
} =React;
import {openAnimation,keyboard} from '../animations'
import {buttonClicks} from '../../actions/buttonClicks'
export default class SearchInput extends Component{
  state={};
  _onFocus(){
    buttonClicks({action:'show black screen'})
    LayoutAnimation.configureNext(keyboard)
    this.input.setNativeProps({style:{width:245*k}})
    this.cancelText.setNativeProps({style:{fontSize:16}})
  }
  cancel(){
    buttonClicks({action:'hide black screen'})
    LayoutAnimation.configureNext(keyboard)
    this.input.setNativeProps({style:{width:300*k}})
    this.cancelText.setNativeProps({style:{fontSize:0.1}})
    this.input.blur()

  }
  render(){
    return (
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <TextInput ref={el=>this.input=el} autoCorrect={false} clearButtonMode={'while-editing'}
        style={{paddingLeft:10,marginTop:5,marginLeft:10*k,marginRight:10*k,backgroundColor:'rgb(240,240,240)',fontWeight:'900',
          width:300*k,height:40,borderRadius:5}}
          // value={this.state.text}
            onBlur={this.cancel.bind(this)}
            onFocus={this._onFocus.bind(this)}
                placeholder={'Поиск'}
                placeholderTextColor={'rgb(140,140,140)'}
                onChange={(event) => {
                  // event.nativeEvent.text.length===0?this.submit.setNativeProps({style:{backgroundColor:'gray'}}):this.submit.setNativeProps({style:{backgroundColor:'#0084b4'}})
                    this.setState({
                      text: event.nativeEvent.text,})
                    
                  }}
      
      
      />
      <Text onPress={this.cancel.bind(this)} style={{fontWeight:'500',fontSize:0.1,marginRight:7*k,marginTop:4,color:'rgb(80,80,80)'}} ref={el=>this.cancelText=el}>Cancel</Text>


      </View>

      )
  }

};
Object.assign(SearchInput.prototype, TimerMixin);