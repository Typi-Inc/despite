import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  LayoutAnimation,
  Text,
  View,
  InteractionManager
} =React;
// import Rx from 'rxjs'
import {keyboard} from '../animations'
const LATITUDE_DELTA=0.0922
const LONGITUDE_DELTA=0.0521
var Slider = require('react-native-slider');
import MapView from 'react-native-maps';
export default class RestrictLocation extends Component{
	state={loading:false,disableRegion:false,showRestriction:true,value:500,radius:100,x:{latitude:43.24,
				    	longitude:76.9}};

	componentWillMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // var initialPosition = JSON.stringify(position);
        if(position){
        	this.setState({
        		
				x:{latitude: position.coords.latitude,
					longitude: position.coords.longitude}
       		 })
        	if(!this.state.currentRegion) this.setState({currentRegion: {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
					latitudeDelta: LATITUDE_DELTA,
					longitudeDelta: LONGITUDE_DELTA
				}},()=>{
					this.setState({disableRegion:true})
				})
			else{return;}
        }else{
        	this.setState({currentRegion:{...this.state.x,latitudeDelta: LATITUDE_DELTA,
					longitudeDelta: LONGITUDE_DELTA}})
        }
      },
      (error) => {
      		this.setState({currentRegion: {
					latitude: 43.24,
					longitude: 76.9,
					latitudeDelta: LATITUDE_DELTA,
					longitudeDelta: LONGITUDE_DELTA
				}})
      		alert('Пожалуйста, включите Location Services для Despite')
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    // this.watchID = navigator.geolocation.watchPosition((position) => {
      // this.setState({currentRegion: {
      //     latitude: position.coords.latitude,
      //     longitude: position.coords.longitude,
      //     latitudeDelta: LATITUDE_DELTA,
      //     longitudeDelta: LONGITUDE_DELTA,
      //   }});
    // });
  }

  componentWillUnmount(){
    // navigator.geolocation.clearWatch(this.watchID);
  }
  componentDidMount(){
  	InteractionManager.runAfterInteractions(()=>{
  		this.setState({loading:false})
  	})
  }
	render(){
		if(this.state.loading){
			return <View style={{flex:1,backgroundColor:'white'}}/>
		}
		// console.log(this.state.currentRegion)
		return (

			<View style={{backgroundColor:'white',flex:1}}>
				 

				<MapView
				onPress={(coord,point)=>{
					LayoutAnimation.configureNext(keyboard)
					this.setState({x:coord.nativeEvent.coordinate})
				}}
				 // onRegionChangeComplete={(reg)=>this.setState({currentRegion:reg})}
				// followUserLocation={true}
				showsUserLocation={true}
				// value={this.state.value}
				initialRegion={this.state.currentRegion}
				 style={{height:568*h,width:320*k,alignSelf:'center',flex:3}}
				    region={this.state.disableRegion?null:this.state.currentRegion}
				  >
				 <MapView.Circle  
				  	center={this.state.x}
				  	// strokeWidth={2}
				      radius={this.state.value}
				      strokeColor='red'

				      >
				     </MapView.Circle>
				     <MapView.Marker draggable
					    coordinate={this.state.x}
					    onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
					  />

					  
				  </MapView>


				<View style={{marginLeft: 10,position:'absolute',top:0,left:0,
						    marginRight: 25,width:250*k,
						    alignItems: 'stretch',backgroundColor:'rgba(230,230,230,0.1)',
						    justifyContent: 'center'}}>
			        <Slider
			          value={this.state.value}
			          minimumValue={500}
			          maximumValue={10000}
			          step={100}
			          onValueChange={(value) => this.setState({value})} />
			        <Text>Радиус {this.state.value} метров</Text>
			      </View>


			</View>

			)
	}

};
Object.assign(RestrictLocation.prototype, TimerMixin);

// {"coords":
// 	{"speed":-1,
// 	"longitude":76.92124749605412,
// 	"latitude":43.23480217994204,
// 	"accuracy":65,"heading":-1,"altitude":862.86767578125,
// 	"altitudeAccuracy":10},
// "timestamp":1462268194991.74}






