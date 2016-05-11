import TimerMixin from 'react-timer-mixin'
import React from 'react-native';
let {
  AppRegistry,
  Component,
  Text,
  TouchableOpacity,
  View
} =React;
import {registerNav,chooseCountry,next$} from '../../actions/buttonClicks'
import connect from '../../rx-state/connect'
import bindAction from '../../rx-state/bindAction'
import registrationActions from '../../actions/registration'
import state$ from '../../state'

class Next extends Component{
	state={phone:undefined};
	goNext(){

		if (this.props.name==='phoneEnter') {
      const phoneNumber = this.props.user.get('country_code') + this.props.user.get('phone_number')
      // console.log(phoneNumber)
      this.props.verifyPhoneNumber({ user: { phone_number: phoneNumber } })
			registerNav({action:'navigation push',title:phoneNumber,name:'codeEnter'})
		}

    if (this.props.name==='codeEnter') {
      const params = {
        user: {
          // phone_number: this.props.user.get('country_code') + this.props.user.get('phone_number'),
          phone_number: "+77471113457",
          code: this.props.user.get('code')
        }
      }
      this.props.verifyCode(params)
    }
	}
	componentWillUnmount(){
		this.nextSubscription.unsubscribe()
	}
	componentDidMount(){
		this.nextSubscription=next$.subscribe((x)=>{
			// if(x.action==='getPhone'){
			// 	this.setState({phone:x.phone})
			// }
		})
	}
	render(){
		// console.log(this.props.type)
		// let buttonName;
		// if(this.props.type='create channel'){
		// 	buttonName='Создать'
		// }else if(this.props.type='ok'){
		// 	buttonName='Ok'
		// }
		return (
			<TouchableOpacity
        onPress={this.goNext.bind(this)}
				style={{...center,left:10*k,backgroundColor:'black',marginTop:8,marginRight:15*k,
				padding:9,paddingTop:5,paddingBottom:5,borderRadius:3,
				borderColor:'black',borderWidth:1}}
      >
				<Text style={{ fontSize:15,color:'white',fontWeight:'500' }}>Next</Text>
			</TouchableOpacity>
		)
	}

};
Object.assign(Next.prototype, TimerMixin);

export default connect(state$, state => ({
  user: state.get('registering_user'),
  verifyPhoneNumber: bindAction(registrationActions.verifyPhoneNumber$),
  verifyCode: bindAction(registrationActions.verifyCode$)
}))(Next)
