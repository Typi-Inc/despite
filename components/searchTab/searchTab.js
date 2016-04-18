import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import s from '../../styles'
import React from 'react-native'; 
let {
  AppRegistry,
  Component,
  Text,
  ScrollView,
  TouchableOpacity,
  View
} =React;
import Topic from './topic'
export default class SearchTab extends Component{
	state={};
	render(){
		return (

			<View style={{flex:1}}>
				<ScrollView contentContainerStyle={{marginTop:10}}>

					{['Здоровье','Интересное','Обо всем','Для женщин','Дизайн','Мода','Мой босс','Секретики','Путешествия','Куда сходить?','Места','Строительство','Что рядом?','Стрижка','Женская мода','Домашние животные',
					'Архитектура','Исскуство','Машина','Знаменитости','Подарки','Коллекции','Мотоциклы','Куда сводить девушку?','Истории','Фотографы','Продукты','Татухи','Тэйлор Свифт','Цитаты','Спорт','Хозяйтсвенные',
					'Свадьба','Любовь','Технологии','Индустрия','Наука','Шутки',].map((topic)=>{

						return <Topic topic={topic}/>
					})}




				</ScrollView>



			</View>

			)
	}

};
Object.assign(SearchTab.prototype, TimerMixin);