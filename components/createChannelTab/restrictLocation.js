import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  View
} =React;
const LATITUDE_DELTA=0.0922
const LONGITUDE_DELTA=0.0521
var Slider = require('react-native-slider');
import MapView from 'react-native-maps';
export default class RestrictLocation extends Component{
	state={showRestriction:true,value:100,radius:100,x:{latitude:43.24,
				    	longitude:76.9}};
	componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // var initialPosition = JSON.stringify(position);
        if(position){
        	this.setState({
        		
				x:{latitude: position.coords.latitude,
					longitude: position.coords.longitude}
       		 })
        	this.setTimeout(()=>this.setState({currentRegion: {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
					latitudeDelta: LATITUDE_DELTA,
					longitudeDelta: LONGITUDE_DELTA
				},}),1000)
        }
        // this.setTimeout(()=>console.log(initialPosition,position.coords),500)
        // if(initialPosition&&initialPosition.coords.latitude>43) this.setState({initialPosition});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      this.setState({currentRegion: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }});
    });
  }

  componentWillUnmount(){
    navigator.geolocation.clearWatch(this.watchID);
  }
	render(){
		return (

			<View style={{backgroundColor:'white',flex:1}}>
				 

				<MapView
				// followUserLocation={true}
				showsUserLocation={true}
				// value={this.state.value}
				 style={{height:568*h,width:320*k,alignSelf:'center',flex:3}}
				    initialRegion={this.state.currentRegion}
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
					  >

					  </MapView.Marker>
					  <MapView.Callout>
						    <Text>hello</Text>
						  </MapView.Callout>
				  </MapView>


				<View style={{marginLeft: 10,position:'absolute',top:0,left:0,
						    marginRight: 25,width:250*k,
						    alignItems: 'stretch',backgroundColor:'rgba(230,230,230,0.1)',
						    justifyContent: 'center'}}>
			        <Slider
			          value={this.state.value}
			          minimumValue={100}
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






