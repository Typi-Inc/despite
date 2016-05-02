import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
import {veryFast,fast,keyboard} from '../animations'
import {buttonClicks,buttonClicks$} from '../../actions/buttonClicks'
var ImagePickerManager = require('NativeModules').ImagePickerManager;

let {
  AppRegistry,
  Component,
  Text,
  TextInput,
  Animated,
  ScrollView,
  DeviceEventEmitter,
  Dimensions,
  LayoutAnimation,
  Image,
  View,
  TouchableOpacity,
  StatusBarIOS
} =React;
var options = {
  title: null, // specify null or empty string to remove the title
  cancelButtonTitle: 'Cancel',
  takePhotoButtonTitle: 'Take Photo...', // specify null or empty string to remove this button
  chooseFromLibraryButtonTitle: 'Choose from Library...', // specify null or empty string to remove this button
  cameraType: 'back', // 'front' or 'back'
  mediaType: 'photo', // 'photo' or 'video'
  videoQuality: 'high', // 'low', 'medium', or 'high'
  durationLimit: 10, // video recording max time in seconds
  maxWidth: 100, // photos only
  maxHeight: 100, // photos only
  aspectX: 2, // android only - aspectX:aspectY, the cropping image's ratio of width to height
  aspectY: 1, // android only - aspectX:aspectY, the cropping image's ratio of width to height
  quality: 0.2, // 0 to 1, photos only
  angle: 0, // android only, photos only
  allowsEditing: false, // Built in functionality to resize/reposition the image after selection
  noData: true, // photos only - disables the base64 `data` field from being generated (greatly improves performance on large photos)
  storageOptions: { // if this key is provided, the image will get saved in the documents directory on ios, and the pictures directory on android (rather than a temporary directory)
    skipBackup: true, // ios only - image will NOT be backed up to icloud
    path: 'images' // ios only - will save image at /Documents/images rather than the root
  }
};
var RCTStatusBarManager = require('NativeModules').StatusBarManager;
export default class SlideUpInput extends Component{
	state={height:0*k,replyAction:false,statusBarHeight:0,text:'',disable:false};
	show(e){
    if(this.state.disable) return
		if(this.t){
			LayoutAnimation.configureNext(keyboard);
			this.t && this.t.setNativeProps({style:{bottom:e.endCoordinates.height}})
      
		}
		 // this.props.setBottom(this.addHeight)
 	 }

 	hide(){
      if(this.state.disable) return
 	  	if(this.t){
 	  		LayoutAnimation.configureNext(keyboard);
		    this.t &&	this.t.setNativeProps({style:{bottom:0}})
 	  	}
 	  	this.props.setBottom(this.addHeight)
	  }
  showMentions(){
    LayoutAnimation.configureNext(keyboard);
    this.mentions && this.mentions.setNativeProps({style:{height:220-this.state.height}})
  }
  hideMenitions(){
    LayoutAnimation.configureNext(keyboard);
    this.mentions && this.mentions.setNativeProps({style:{height:0}})
  }
	getAddHeight(){
		return this.addHeight
	}
	componentWillMount(){
	  	this.windowHeight=Dimensions.get('window').height
	  	this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{
        if(x.action==='searchInput is focused') {
          this.hide()
          this.setState({disable:true})}
        else if(x.action==='searchInput is blurred') this.setState({disable:false})
        else if (x.action==='reply pressed') this.reply(x.to)
        else if (x.action==='unsubscribe'){
          this.buttonClicksSubscription && this.buttonClicksSubscription.unsubscribe()
          this._keyboardWillShowSubscription&&this._keyboardWillShowSubscription.remove()
        this._keyboardWillHideSubscription&&this._keyboardWillHideSubscription.remove()
         }
      })
	  	RCTStatusBarManager.getHeight(this.callMe.bind(this))
	  	 this._keyboardWillShowSubscription= DeviceEventEmitter.addListener('keyboardWillShow', this.show.bind(this));
	      this._keyboardWillHideSubscription= DeviceEventEmitter.addListener('keyboardWillHide', this.hide.bind(this));
	 
	  }
	  componentWillUnmount(){
	  	this.buttonClicksSubscription.unsubscribe()
	  	this._keyboardWillShowSubscription.remove()
	  	this._keyboardWillHideSubscription.remove()

	  }
	  callMe(e){
	  	this.setState({statusBarHeight:e.height})
	  }
	 reply(to){
    this.setState({text:'@'+to+':',replyAction:true})
    this.textInput && this.textInput.focus()
   }
   showPicker(){
     // buttonClicks({action:'add',component:'hooks'})
    ImagePickerManager.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePickerManager Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {

        // You can display the image using either data:
        // const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

        // uri (on iOS)
        const source = {uri: response.uri.replace('file://', ''), isStatic: true};
        // uri (on android)
        // const source = {uri: response.uri, isStatic: true};

        this.setState({
          avatarSource: source
        });

      }
    });

   }
	render(){
		this.windowHeight=this.windowHeight || 568
		this.addHeight=this.addHeight || 0
		
		return (
          <View ref={el=>this.t=el} style={{position:'absolute',
          justifyContent:'flex-end',alignItems:'flex-end',bottom:0,left:0,width:320*k}}>
            <View ref={el=>this.mentions=el} style={{width:320*k,height:0,backgroundColor:'black'}}>
              <ScrollView>
                <Text style={{color:'white',fontSize:15,fontWeight:'500',margin:7}}>hello</Text>
                <Text style={{color:'white',fontSize:15,fontWeight:'500',margin:7}}>hello</Text>
                <Text style={{color:'white',fontSize:15,fontWeight:'500',margin:7}}>hello</Text>
                <Text style={{color:'white',fontSize:15,fontWeight:'500',margin:7}}>hello</Text>
                <Text style={{color:'white',fontSize:15,fontWeight:'500',margin:7}}>hello</Text>
                <Text style={{color:'white',fontSize:15,fontWeight:'500',margin:7}}>hello</Text>
                <Text style={{color:'white',fontSize:15,fontWeight:'500',margin:7}}>buy</Text>
                <Text style={{color:'white',fontSize:15,fontWeight:'500',margin:7}}>buy</Text>
                <Text style={{color:'white',fontSize:15,fontWeight:'500',margin:7}}>buy</Text>
                <Text style={{color:'white',fontSize:15,fontWeight:'500',margin:7}}>bslk</Text>
                <Text style={{color:'white',fontSize:15,fontWeight:'500',margin:7}}>hello</Text>
                <Text style={{color:'white',fontSize:15,fontWeight:'500',margin:7}}>ds</Text>
              </ScrollView>
            </View>
              <View ref={el=>this.main=el} 
              style={{backgroundColor:'white',marginBottom:0,
             	 height:Math.max(43*k, (12*k+this.state.height)),borderTopWidth:0.5,
              	flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-end',
                borderColor:'rgb(150,150,150)',width:320*k,}}>
                  <TextInput
                  keyboardType={'twitter'}
                  // keyboardAppearance={'dark'}
                    ref={el=>this.textInput=el}
                    style={{height: Math.max(30*k, this.state.height),marginLeft:7,flex:5,
                    fontSize:17,alignItems:'flex-end',
                      // borderColor: '#BD10E0', borderLeftWidth:2,
                      justifyContent:'flex-start',
                      alignSelf:'center',width:240*k,paddingLeft:2*k,paddingBottom:4*k}}
                    value={this.state.text}
                    onChange={(event) => {
                      // event.nativeEvent.text.length===0?this.submit.setNativeProps({style:{backgroundColor:'gray'}}):this.submit.setNativeProps({style:{backgroundColor:'#0084b4'}})
                      // LayoutAnimation.configureNext(veryFast)
                        this.setState({
                          text: event.nativeEvent.text,
                          replyAction:false,
                          height: Math.min(event.nativeEvent.contentSize.height,129*k)
                        });
                        if(/@[a-zA-Z0-9]*$/.test(this.state.text)) this.showMentions()
                        else if(this.state.text[this.state.text.length-1]||this.state.text.length===0) this.hideMenitions()
                       	this.addHeight=this.state.height<35*k?0:this.state.height-30*k
                        this.props.setBottom(this.addHeight)
                      }}
                    // clearButtonMode={'while-editing'}
                    multiline={true}
                    placeholder={'Начать разговор'}
                    placeholderTextColor={'rgb(160,160,160)'}
                    />
                    <TouchableOpacity style={{marginRight:5}} onPress={()=>this.textInput.blur()} >
                        <Text style={{
                    	color:/\S/.test(this.state.text) && !this.state.replyAction?'rgb(14,122,254)':'rgb(160,160,160)',fontWeight:'500',flex:1,marginRight:5,//alignSelf:'center',
                    	fontSize:17,marginBottom:11*k,marginLeft:5*k}}>Send</Text></TouchableOpacity>
                    	               
              </View> 

              <View style={{backgroundColor:'blue'}} ref={el=>this.slide=el}/>
            

            </View>

			)
	}

};
// buttonClicks({action:'add',component:'hooks'})
Object.assign(SlideUpInput.prototype, TimerMixin);