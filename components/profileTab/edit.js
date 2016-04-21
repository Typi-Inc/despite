import TimerMixin from 'react-timer-mixin'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  View,
  Image,
  TouchableOpacity,
} =React;
var options = {
  title: 'Select Avatar', // specify null or empty string to remove the title
  cancelButtonTitle: 'Cancel',
  takePhotoButtonTitle: 'Take Photo...', // specify null or empty string to remove this button
  chooseFromLibraryButtonTitle: 'Choose from Library...', // specify null or empty string to remove this button
  cameraType: 'back', // 'front' or 'back'
  mediaType: 'photo', // 'photo' or 'video'
  videoQuality: 'high', // 'low', 'medium', or 'high'
  durationLimit: 10, // video recording max time in seconds
  maxWidth: 200, // photos only
  maxHeight: 200, // photos only
  quality: 0.2, // 0 to 1, photos only
  angle: 0, // android only, photos only
  allowsEditing: true, // Built in functionality to resize/reposition the image after selection
  noData: true, // photos only - disables the base64 `data` field from being generated (greatly improves performance on large photos)
  storageOptions: { // if this key is provided, the image will get saved in the documents directory on ios, and the pictures directory on android (rather than a temporary directory)
    skipBackup: true, // ios only - image will NOT be backed up to icloud
    path: 'images' // ios only - will save image at /Documents/images rather than the root
  }
};
var ImagePickerManager = require('NativeModules').ImagePickerManager;
export default class Edit extends Component{
	state={avatarSource:'source'};
	showPicker(){
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
		return (

			<View style={{flex:1,backgroundColor:'white'}}>

				<TouchableOpacity onPress={this.showPicker.bind(this)}>
					<Text style={{margin:10,fontSize:15}}> add photo</Text>
				</TouchableOpacity>


				<Image style={{alignSelf:'center',height:80,width:80,backgroundColor:'red'}} 
					source={this.state.avatarSource}/>


			</View>

			)
	}

};
Object.assign(Edit.prototype, TimerMixin);