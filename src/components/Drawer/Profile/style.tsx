import { StyleSheet } from "react-native";


const ProfileStyle = StyleSheet.create({
    profileBox: {

    }
    ,
    imageBox: {
        width: 60,
        height: 60,
        borderRadius:6,
        overflow:"hidden"
    },
    image: {
        width: "100%", height: "100%", resizeMode: 'cover'
    },
    userNameStyle:{
        color:'white',
        fontWeight:'500',
        fontSize:18,
        margin:5,

    },
    titleStyle:{
        color:'white',
        // fontWeight:'500',
        fontSize:12,
        marginHorizontal:5,

    }

})

export default ProfileStyle;