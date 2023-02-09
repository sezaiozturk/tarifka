import { View, Text, FlatList ,ScrollView,Image,TouchableOpacity,ActivityIndicator ,Linking} from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch'
import styles from './Details.style'
import Lottie from 'lottie-react-native'

export default function Details({route}) {
  const {foodId}=route.params;
  const URL=`https://www.themealdb.com/api/json/v1/1/lookup.php?%20i=${foodId}`
  const{data,load,error}=useFetch(URL);
  const detail=data.meals;

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

  async function handleOpenYoutube(){
    const supported=await Linking.canOpenURL(detail[0].strYoutube);
    if(supported){
      await Linking.openURL(detail[0].strYoutube);
    }
  }
  return (
    <ScrollView style={styles.container}>
      <Image source={{uri:detail[0].strMealThumb}}  style={styles.image}/>
      <Text style={styles.title}>{detail[0].strMeal}</Text>
      <Text style={styles.subTitle}>{detail[0].strArea}</Text>
      <View style={styles.line}/>
      <View style={styles.innerContainer}>
        <Text style={styles.description}>{detail[0].strInstructions}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleOpenYoutube}>
        <Text style={styles.buttonTitle}>Watch on Youtube</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}