import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let UIManager = require('NativeModules').UIManager;

let {
  AppRegistry,
  Component,
  Text,
  Animated,
  TouchableOpacity,
  ScrollView,
  InteractionManager,
  Image,
  SegmentedControlIOS,
  View
} =React;
import Switcher from './switcher'
import {buttonClicks,buttonClicks$} from '../../actions/buttonClicks'
export default class Profile extends Component{
	state={};
	showEdit(){
		buttonClicks({name:'edit',action:'navigation push',nav:'profileNav',title:'Edit',info:{what:'going to edit'}})
	}
	showSettings(){
		buttonClicks({name:'settings',action:'navigation push',nav:'profileNav',title:'Settings',info:{what:'going to edit'}})
	}
	componentDidMount(){
		if(this.segmentedControl){
			this.handle = React.findNodeHandle(this.segmentedControl);
		}
	}
	componentWillMount(){
		this.buttonClicksSubscription=buttonClicks$.subscribe((x)=>{
			if(x.action==='create border'){
				if (this.action && this.action!==x.action){
					Animated.timing(this.anim,{toValue:0,duration:200}).start()
				}

			}else if(x.action==='delete border'){
				if (this.action && this.action!==x.action){
						Animated.timing(this.anim,{toValue:1,duration:200}).start()
				}
				

			}
			this.action=x.action
		})
	}
	componentWillUnmount(){
		this.buttonClicksSubscription.unsubscribe()
	}
	render(){
		console.log('profile is rerendering')
		this.anim=this.anim || new Animated.Value(0)
		this.py=this.py||0
		return (

			<View style={{flex:1}}>
				<Animated.View style={{
					borderBottomWidth:this.anim.interpolate({inputRange:[0,1],outputRange:[0.5,0]}),
					borderColor:'rgb(215,215,215)'}}/>
				<ScrollView ref={el=>this.scroll=el} scrollEventThrottle={200}
				removeClippedSubviews={true}
				 onScroll={(e)=>{
						UIManager.measure(this.handle,(x,y,w,h,px,py)=>{
							this.py=py
							if(py>78&&py<83){
								buttonClicks({action:'delete border'})
							}else{
								buttonClicks({action:'create border'})
							}
						})
					}}

				 stickyHeaderIndices={[1]} >

					<View style={{backgroundColor:'white',flexDirection:'row',height:100*k,width:320*k,padding:10,alignItems:'center',}}>
						<Image source={{uri:'http://www.binarytradingforum.com/core/image.php?userid=27&dateline=1355305878'}} 
								style={{borderRadius:5*k,width:65*k,height:65*k}}/>
						<View style={{margin:10,width:150*k,}}>
							<Text style={{fontSize:16,fontWeight:'bold',color:'rgb(80,80,80)'}}>Johnnrdino</Text>
							<Text style={{fontSize:14,fontWeight:'500',color:'rgb(80,80,80)',marginTop:5}}>Karma: 456</Text>
						</View>
						<TouchableOpacity onPress={this.showEdit.bind(this)} style={{...center,left:10*k,padding:14,paddingTop:7,paddingBottom:7,borderRadius:5*k,borderColor:'black',borderWidth:1}}>
							<Text>Edit</Text>
						</TouchableOpacity>

					</View>
					<View style={{paddingTop:10,paddingBottom:10,borderBottomWidth:1,borderColor:'rgb(230,230,230)',backgroundColor:'white'}}>
						<SegmentedControlIOS ref={el=>this.segmentedControl=el} values={['My channels', 'History', 'Saved']} 
						   tintColor={'black'} selectedIndex={0} style={{height:32,backgroundColor:'white',margin:10*k,marginBottom:0,marginTop:0}}
						   onValueChange={(e)=>{
						   		if(this.py>70 && this.py<83) this.scroll && this.scroll.scrollTo({x:0,y:100,animated:false})
						   		if (e==='My channels') {
						   			this.switcher.changeNum(0)
						   		}else if(e==='History'){
						   			this.switcher.changeNum(1)
						   		}else if(e==='Saved'){
						   			this.switcher.changeNum(2)
						   		}
						   }}
						   />	
					   </View>


					<Switcher ref={el=>this.switcher=el}/>


				</ScrollView>

			</View>

			)
	}

};
Object.assign(Profile.prototype, TimerMixin);