import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import categories from './src/pages/categories';
import meals from './src/pages/meals';
import details from './src/pages/details';

export default function Router() {
  const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTintColor:'orange'}}>
        <Stack.Screen name='CategoriesScreen' component={categories} options={{headerTitle:'Categories'}}/>
        <Stack.Screen name='MealsScreen' component={meals} options={{headerTitle:'Meals'}}/>
        <Stack.Screen name='DetailsScreen' component={details} options={{headerTitle:'Detail'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}