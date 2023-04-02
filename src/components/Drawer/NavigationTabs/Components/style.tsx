import { StyleSheet } from "react-native";

const tabsStyle = StyleSheet.create({
    tabContainer:{
        display:'flex',
        flexDirection:'row',
        padding:8,
        borderRadius:8,
        marginVertical:8
    },
    textStyle:{
        color:'white',
        fontSize:16,
        textTransform:'capitalize'
    }
});

export default tabsStyle;