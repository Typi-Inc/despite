import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  TextInput,
  LayoutAnimation,
  TouchableOpacity,
  View
} =React;
import {openAnimation,keyboard} from '../animations'
import {buttonClicks} from '../../actions/buttonClicks'
export default class SearchInput extends Component{
  state={};
  _onFocus(){
    console.log('focusing')
    buttonClicks({action:'show black screen'})
    LayoutAnimation.configureNext(keyboard)
    this.input.setNativeProps({style:{width:245*k,backgroundColor:'white'}})
    this.cancelText.setNativeProps({style:{fontSize:15}})
  }
  cancel(arg){
    if(arg==='cancelButton'){
       this.input.blur()
    }else{
        buttonClicks({action:'hide black screen'})
       LayoutAnimation.configureNext(keyboard)
        this.input.setNativeProps({style:{width:300*k,backgroundColor:'rgb(238,238,238)'}})
        this.cancelText.setNativeProps({style:{fontSize:0.1}})
    }
  }
  render(){
    return (
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',}}>
      <TextInput ref={el=>this.input=el} autoCorrect={false} clearButtonMode={'while-editing'}
        style={{paddingLeft:10,marginTop:5,marginLeft:18*k,marginRight:5*k,backgroundColor:'rgb(238,238,238)',fontWeight:'900',
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
      <TouchableOpacity onPress={this.cancel.bind(this,'cancelButton')} 
      style={{padding:3,paddingLeft:0,}}>
        <Text style={{fontWeight:'500',fontSize:0.0001,marginRight:10*k,marginTop:4,color:'rgb(80,80,80)'}}
         ref={el=>this.cancelText=el}>Отмена</Text>
      </TouchableOpacity>


      </View>

      )
  }

};
Object.assign(SearchInput.prototype, TimerMixin);