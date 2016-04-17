'use strict';
import React, {
  StyleSheet,
} from 'react-native';
let Dimensions = require('Dimensions');
let windowSize = Dimensions.get('window');
const k=windowSize.width/320
const h=windowSize.height/568
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  smallGreyText:{
    color:'gray',
    fontWeight:'500',
    fontSize:13,
  },
  menuImage:{
    height:20*k,
    width:5*k,
    marginLeft:3*k,
    marginRight:3*k
  },
  viewTitle:{
    fontSize:18
  }

});
export default styles