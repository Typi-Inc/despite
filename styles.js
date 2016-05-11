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
    color:'rgb(120,120,120)',
    fontWeight:'500',
    fontSize:14,
  },
  menuImage:{
    height:24*k,
    width:7*k,
    marginLeft:3*k,
    marginRight:3*k
  },
  viewTitle:{
    fontSize:18
  }

});
export default styles