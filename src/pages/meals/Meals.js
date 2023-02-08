import { View, Text, TouchableWithoutFeedback, FlatList } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch';
import styles from './Meals.style'
import MealsCard from '../../components/MealsCard';

export default function Meals({navigation,route}) {
  const {foodCategory}=route.params;
  const URL=`https://www.themealdb.com/api/json/v1/1/filter.php?c=${foodCategory}`
  const {data,load,error}=useFetch(URL);
  const renderMeal=({item})=>
    <MealsCard 
      foodName={item.strMeal}
      foodId={item.idMeal}
      foodImage={item.strMealThumb}
      navigation={navigation}/>
  return (
    <View style={styles.container}>
        <FlatList data={data.meals} renderItem={renderMeal}/>
    </View>
  )
}