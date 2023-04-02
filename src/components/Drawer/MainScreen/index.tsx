import { Animated, View } from 'react-native';
import MainScreenStyle from './style';
import Header from './Components/Header';
import { Dimensions } from 'react-native';

const MainScreen = () => {
    // borderRadius:10,
    //     transform:[{scale:0.8}, {translateX:Dimensions.get('window').width * 0.5}]
    const scaleAnimation = new Animated.Value(1);
    const radiusAnimation = new Animated.Value(0);
    const moveAnimation = new Animated.Value(0);
    const openDrawer = (isOpen:boolean) => {
        Animated.parallel([
            Animated.timing(scaleAnimation, {
                toValue: (isOpen)?1: 0.8,
                duration: 400,
                useNativeDriver: true
            }),
            Animated.timing(radiusAnimation, {
                toValue: (isOpen)?0: 20,
                duration: 400,
                useNativeDriver: true
            }),
            Animated.timing(moveAnimation, {
                toValue: (isOpen)?0:Dimensions.get('window').width *  0.5,
                duration: 400,
                useNativeDriver: true
            })
        ]).start();
    }
    return (<>
        <Animated.View style={[MainScreenStyle.container, { borderRadius: radiusAnimation, transform: [{ scale: scaleAnimation }, { translateX: moveAnimation }] }]}>
            <Header  toggleDrawer={openDrawer} />
        </Animated.View>
    </>)
}
export default MainScreen;