import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  InteractionManager,
  TouchableWithoutFeedback,
  LayoutAnimation,
  TouchableHighlight,LinkingIOS,
  View,Animated
} =React;
var Communications = require('react-native-communications');
const Incremental = require('Incremental');
const IncrementalGroup = require('IncrementalGroup');
const IncrementalPresenter = require('IncrementalPresenter');
import ParsedText from 'react-native-parsed-text'
import MessageProfile from './messageProfile'
import MessageButtons from './messageButtons'
// var WithProgress = require('react-native-image-progress');
// var ProgressBar = require('react-native-progress/Bar');
import {veryFast,openAnimation} from '../animations'
import {buttonClicks} from '../../actions/buttonClicks'
var shortenUrl = function(url,protocol,host,port,path,filename,ext,query,fragment) {
    // set url length limit
    console.log('here',url,protocol,host,port,path,filename,ext,query,fragment)
    var limit = 20,
	show_www = false;
    // remove brackets if URL inside them
    if ( url.charAt(0) == '(' && url.charAt( url.length-1 ) == ')' ) {
        url = url.slice(1,-1);
    }
    // add protocol if doesn't exist
    if ( !protocol ) {
        url = 'http://' + url;
    }
    // create new url to show
    var domain = show_www ? host : host.replace(/www\./gi, '');
    var visibleUrl = domain + (path || '/') + (filename || '') + (ext || '') + (query ? '?'+query : '') + (fragment || '');
    // shorten URL if bigger than limit
    if ( visibleUrl.length > limit && domain.length < limit ) {
        visibleUrl = visibleUrl.slice(0, domain.length + (limit - domain.length)) + '...';
    }
    return '' + visibleUrl + '';
};
let urlRegex = /\(?(?:(http|https|ftp):\/\/)?(?:((?:[^\W\s]|\.|-|[:]{1})+)@{1})?((?:www.)?(?:[^\W\s]|\.|-)+[\.][^\W\s]{2,4}|localhost(?=\/)|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d*))?([\/]?[^\s\?]*[\/]{1})*(?:\/?([^\s\n\?\[\]\{\}\#]*(?:(?=\.)){1}|[^\s\n\?\[\]\{\}\.\#]*)?([\.]{1}[^\s\?\#]*)?)?(?:\?{1}([^\s\n\#\[\]]*))?([\#][^\s\n]*)?\)?/gi;

export default class Message extends Component{
	constructor(props){
		super(props)
		this.state={loading:this.props.index>2?true:false,
			karma:Math.floor(Math.random()*1000),
			haveIRated:false,isSaved:false,
			lineCount:Math.floor(Math.random()*100)
		};
		this.handleUrlPress=this.handleUrlPress.bind(this)
		this.handlePhonePress=this.handlePhonePress.bind(this)
		this.handleNamePress=this.handleNamePress.bind(this)
		this.handleEmailPress=this.handleEmailPress.bind(this)
		this.renderText=this.renderText.bind(this)
	}

	navigateToImageViewer(){
		// buttonClicks({action:'navigation push', nav:'topNav',name:'imageViewer'})
		// Animated.spring(this.anim,{toValue:this.anim._value>0?0:1}).start()
		// this.image.setNativeProps({style:{position:'absolute',top:0,lef}})
	}
	

 handleUrlPress(url) {
 	if(url.substring(0,4)!=='http'){
    if(url[0]===' '){
      LinkingIOS.openURL('http://'+url.substring(1,url.length))
    }else{
      LinkingIOS.openURL('http://'+url)
    }
 		
 	}else{
 		LinkingIOS.openURL(url);
 	}
  }


  handlePhonePress(phone) {
    Communications.phonecall(phone, true)
  }

  handleNamePress(name) {
    alert(`Hello ${name}`);
  }

  handleEmailPress(email) {
    Communications.email([email],null,null,'Despite','hey, let us chat')
  }
  renderText(matchingString, matches) {
    // matches => ["[@michel:5455345]", "@michel", "5455345"]
    let url
    if(matchingString[0]===' '){
     url=matchingString.substring(1,matchingString.length)

    }else{
    	url=matchingString
    }
    if(url.length>20) return url.substring(0,20)+'...'
    return ' '+url;
  }
	render(){
		// var messageText = this.props.message.text;
		// messageText = messageText.replace(urlRegex, shortenUrl);

		this.anim=this.anim || new Animated.Value(0)
		// if(this.state.loading) return null
		return (		
    <TouchableWithoutFeedback onLongPress={()=>{
        buttonClicks({action:'messageActions',props:this.state})
    }}>	
			<View style={[s.container,{overflow:'hidden',backgroundColor:this.props.backgroundColor?'rgba(14,122,254,.1)':'white'}]}>					
					<View style={{margin:8,marginRight:0,marginLeft:4,marginBottom:12,
						borderColor:this.props.color,borderLeftWidth:2,
						paddingLeft:5,paddingBottom:0,paddingTop:0}}>

						<Incremental key={this.props.index}><View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:300*k}}>
							<MessageProfile profile={this.props.message.author}/>
							<MessageButtons index={this.props.index} karma={this.state.carma} haveIRated={this.state.haveIRated} isSaved={this.state.isSaved}/>
						</View></Incremental>
						<Incremental key={this.props.index+' '}><View style={{width:300*k,padding:4*k,}}><ParsedText 
						parse={
				            [
				              {type: 'url',style: styles.url, onPress: this.handleUrlPress,renderText:this.renderText},
				              {type: 'phone',style: styles.phone, onPress: this.handlePhonePress},
				              {type: 'email',style: styles.email, onPress: this.handleEmailPress},
				              {pattern: /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi,style: styles.url, onPress: this.handleUrlPress,renderText:this.renderText},
				              {pattern: /\B@[a-z0-9_-]+/gi, style: styles.username, onPress: this.handleNamePress},
				              {pattern: /#(\w+)/,style: styles.hashTag},
				            ]
				          }
							style={{fontSize:17,lineHeight:23}}> 
							{this.props.message.text}
						</ParsedText></View></Incremental>

				
						<View style={{flexDirection:'row',marginLeft:3*k,marginBottom:0,justifyContent:'space-between',width:300*k}}>
              <View style={{flexDirection:'row'}}>
  							<TouchableHighlight underlayColor={'rgb(120,120,120'} 
  							onPress={()=>{
  								// buttonClicks({action:'show image viewer'})
  								buttonClicks({action:'reply pressed',to:'Johnnrdino'})
  								}} style={{height:20,width:70,justifyContent:'flex-end'}}>
  							<Text style={s.smallGreyText}>Ответить</Text></TouchableHighlight>

  							<TouchableHighlight underlayColor={'rgb(120,120,120'} 
  								style={{height:20,width:130,justifyContent:'flex-end',marginLeft:10}}
  								 onPress={()=>buttonClicks({action:'navigation push',name:'line',nav:'channelNav',info:this.props})}>
  								<Text style={s.smallGreyText}>Разговор ({this.state.lineCount})</Text>
  							</TouchableHighlight>
              </View>
             

						</View>
					</View>
			</View>
    </TouchableWithoutFeedback>

			)
	}

};

Object.assign(Message.prototype, TimerMixin);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  url: {
    // color: 'rgb(14,122,254)',
    fontWeight:'bold'
  },

  email: {
    // color:'rgb(14,122,254)',
    fontWeight:'bold'

  },

  text: {
    color: 'black',
    fontSize: 15,
  },

  phone: {
    fontWeight:'bold'
    // color: 'rgb(14,122,254)',
  },

  name: {
    color: 'red',
  },

  username: {
    color: 'rgb(80,80,80)',
    fontSize:18,
    fontWeight: '500'
  },

  magicNumber: {
    fontSize: 15,
    color: 'pink',
  },

  hashTag: {
    fontStyle: 'italic',
  },

});





