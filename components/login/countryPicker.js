import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Animated,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  InteractionManager,
  ListView,
  Text,
  View
} =React;
import CountryRow from './countryRow'
import dismissKeyboard from 'dismissKeyboard'
import {registerNav$} from '../../actions/buttonClicks'
import {countries,firstLetters} from '../mock'
export default class CountryPicker extends Component{
	constructor(props){
		super(props)
		var getSectionData = (dataBlob, sectionID) => {
       	 	return dataBlob[sectionID];
    	}
   		 var getRowData = (dataBlob, sectionID, rowID) => {
    	    return dataBlob[sectionID + ':' + rowID];
   		}
	    this.state= {
	        loaded : false,
	        notFound:false,
	        foundCountries:[],
	        dataSource : new ListView.DataSource({
	            getSectionData          : getSectionData,
	            getRowData              : getRowData,
	            rowHasChanged           : (row1, row2) => row1 !== row2,
	            sectionHeaderHasChanged : (s1, s2) => s1 !== s2
	        })
	    }
	}
	getData(){
		let length = countries.length,
            dataBlob = {},
            sectionIDs = [],
            rowIDs = [],
            i,
            j;
       	for (i = 0; i < 25; i++) {
       		sectionIDs.push(i)
       		dataBlob[`${i}`]=firstLetters[i]
       		rowIDs[i]=[] 
       	}
       	for (i = 0; i < length; i++) {
       		for (j = 0; j < 25; j++) {
       			if(countries[i].name[0]===dataBlob[`${j}`]){
       				rowIDs[j].push(countries[i].name)
       				dataBlob[`${j}:${rowIDs[j][rowIDs[j].indexOf(countries[i].name)]}`]=countries[i]
       			}
       		}
       	}
       	 this.setState({
            dataSource : this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
        	loaded:true
        });
	}
	
	componentWillUnmount(){
		this.registerNavSubscription.unsubscribe()
	}
	componentDidMount(){
		this.getData()
		this.registerNavSubscription=registerNav$.subscribe((x)=>{
			if(x.action==='focus start'){
				Animated.timing(this.anim,{toValue:1,duration:1}).start()
				this.setState({notFound:false})
			}else if(x.action==='cancel'){
				Animated.timing(this.anim,{toValue:0,duration:1}).start()
			}else if(x.action='searchText'){
				this.text=x.text
				let found=this.getCountriesByText(x.text)
				this.scroll&&this.scroll.scrollTo({x:0,y:0,animated:false})
				console.log(found.notFound)
				this.setState({foundCountries:found.result,notFound:found.notFound})
			}else{
				return
			}
		})
	}
	getCountriesByText(text){
		if(text==='') {
			this.searchResults && this.searchResults.setNativeProps({style:{height:0}})
			return {result:[],notFound:false}
		}
		this.searchResults && this.searchResults.setNativeProps({style:{height:500*k}})

		let country
		result=[]
		for (country of countries){
			if(country.name.indexOf(text)>-1){
				result.push(country)
			}
		}
		if(result===[]){
			this.back.setNativeProps({style:{backgroundColor:'white'}})
		}
		// console.log(result)
		return result.length>0?{result:result,notFound:false}:{result:result,notFound:true}
	}
	render(){
		this.text=this.text || ''
		this.anim=this.anim || new Animated.Value(0)

		if(!this.state.loaded) return <View style={{flex:1,backgroundColor:'green'}}/>
		return (
            <View style={{flex:1}}>
                
                <ListView
                	automaticallyAdjustContentInsets={true}
                	removeClippedSubviews={true}
                    dataSource = {this.state.dataSource}
                    style      = {{backgroundColor:'white'}}
                    renderRow  = {this.renderRow.bind(this)}
                    renderSectionHeader = {this.renderSectionHeader.bind(this)}
                />
                <Animated.View ref={e=>this.back=e} style={{position:'absolute',flex:1,alignSelf:'center',
                	height:568*h-70,width:320*k,
                	top:0,
                	left:this.anim.interpolate({inputRange:[0,1],outputRange:[-320*k,0]}),
                	backgroundColor:this.state.foundCountries.length>0?'white':this.state.notFound?'white':'rgba(0,0,0,0.5)'
            	}}>	
            	<View ref={e=>this.searchResults=e} style={{width:320*k,height:0,}}>
            		<ScrollView keyboardShouldPersistTaps={true} scrollEventThrottle={1000} onScroll={(e)=>{
            			dismissKeyboard()
            		}}
            		 ref={e=>this.scroll=e} automaticallyAdjustContentInsets={true}
            		contentContainerStyle={{paddingTop:10,paddingBottom:20*k,backgroundColor:'white'}}>
            			{
            				this.state.foundCountries.map((rowData,i)=>
            					<CountryRow key={i} rowData={rowData}
								/>)
            			}


            		</ScrollView>


            		</View>
                </Animated.View>
            </View>
        );
	}
	renderRow(rowData,sectionID,rowId){
		// console.log(rowData)
		return <CountryRow key={rowData.name} rowData={rowData} />
	}
	renderSectionHeader(section){
		return <View key={section} style={{overflow:'hidden',padding:10,backgroundColor:'rgb(245,245,245)'}}>
		<Text style={{fontWeight:'bold',fontSize:16}}>{section}</Text></View>
	}


};

Object.assign(CountryPicker.prototype, TimerMixin);