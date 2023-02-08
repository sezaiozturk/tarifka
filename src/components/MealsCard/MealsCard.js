import { View ,TouchableWithoutFeedback, Image, Text} from "react-native";
import styles from './MealsCard.style'

const MealsCard=({foodName,foodId,foodImage,navigation})=>{
    return(
        <TouchableWithoutFeedback onPress={()=>navigation.navigate('DetailsScreen',{foodId})}>
            <View style={styles.container}>
                <Image  style={styles.image}source={{uri:foodImage}}/>
                <View style={styles.opacityContainer}/>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{foodName}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default MealsCard;