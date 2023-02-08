import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e3e3e3',
        marginHorizontal:5,
        marginVertical:10,
        padding:10,
        flexDirection:'row',
        borderBottomLeftRadius:55,
        borderTopLeftRadius:55,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        borderWidth:1,
        borderColor:'gray',
        alignItems:'center'
    },
    title:{
        fontSize:18,
        fontWeight:'400',
        justifyContent:'center',
        marginLeft:20,
    },
    img:{
        width:100,
        height:75,
        borderRadius:50,
        resizeMode:'contain'
    }
})