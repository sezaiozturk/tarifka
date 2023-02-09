import { View, Text, Alert, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './Categories.style'
import CategoriesCard from '../../components/Categories/CategoriesCard'
import useFetch from '../../hooks/useFetch'
import Lottie from 'lottie-react-native'

export default function Categories({navigation}) {
  const URL='https://www.themealdb.com/api/json/v1/1/categories.php'
  const{data,load,error}=useFetch(URL);
  const renderCategory=({item})=><CategoriesCard foodCategory={item.strCategory} foodImg={item.strCategoryThumb} navigation={navigation}/>

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
      <FlatList data={data.categories} renderItem={renderCategory}/>
    </View>
  )
}