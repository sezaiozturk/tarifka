import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        margin:10,
        height:190,
        borderRadius:10,
        alignItems:'flex-end',
        justifyContent:'flex-end'
    },
    name:{
        fontSize:25,
        color:'white',
        fontWeight:'bold',
    },
    opacityContainer:{
        height:50,
        backgroundColor:'black',
        opacity:0.5,
        position:'absolute',
        left:0,
        right:0,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    image:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        borderRadius:10
    },
    nameContainer:{
        flexDirection:'row',
        flex:1,
        height:50,
        justifyContent:'flex-end',
        alignItems:'center',
        paddingRight:10
    }
})