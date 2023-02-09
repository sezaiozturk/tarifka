import { View, FlatList, Alert, ActivityIndicator } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch'
import styles from './Meals.style'
import MealsCard from '../../components/MealsCard'
import Lottie from 'lottie-react-native'


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
      
  if(load){
    return(
      <Lottie source={require('../../Lottie/load.json')} autoPlay loop />
    )
  }
  if(error){
    return(
      <Lottie source={require('../../Lottie/error.json')} autoPlay loop />
    )
  }
  return (
    <View style={styles.container}>
        <FlatList data={data.meals} renderItem={renderMeal}/>
    </View>
  )
}