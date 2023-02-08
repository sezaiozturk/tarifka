import { View, Text, Image,TouchableWithoutFeedback, Alert } from 'react-native'
import styles from './CategoriesCard.style'


const categoriesCard=({foodCategory,foodImg,navigation})=>{
    return(
        <TouchableWithoutFeedback onPress={()=>navigation.navigate('MealsScreen',{foodCategory})}>
            <View style={styles.container} >
                <Image style={styles.img} source={{uri:foodImg}}/>
                <Text style={styles.title} >{foodCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default categoriesCard;