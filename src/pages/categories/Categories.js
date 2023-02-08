import { View, Text, Alert, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import styles from './Categories.style'
import CategoriesCard from '../../components/Categories/CategoriesCard'
import useFetch from '../../hooks/useFetch'

export default function Categories({navigation}) {
  const URL='https://www.themealdb.com/api/json/v1/1/categories.php'
  const{data,load,error}=useFetch(URL);
  const renderCategory=({item})=><CategoriesCard foodCategory={item.strCategory} foodImg={item.strCategoryThumb} navigation={navigation}/>
  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategory}/>
    </View>
  )
}