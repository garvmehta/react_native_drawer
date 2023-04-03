import { Animated, StatusBar, StyleProp, View, ViewStyle } from 'react-native';
import MainScreenStyle from './style';
import Header from './Components/Header';
import { Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { memo } from 'react';
import { DrawerTabType } from '../model';
const Tab = createBottomTabNavigator();
type MainScreenPropsType = {
    activeTab: number;
    tabList: Array<DrawerTabType>
    // style:StyleProp<ViewStyle>
}
const scaleAnimation = new Animated.Value(1);
const radiusAnimation = new Animated.Value(0);
const moveAnimation = new Animated.Value(0);
const MainScreen = (props: MainScreenPropsType) => {
    const openDrawer = (isOpen: boolean) => {
        Animated.parallel([
            Animated.timing(scaleAnimation, {
                toValue: (isOpen) ? 1 : 0.94,
                duration: 200,
                useNativeDriver: true,

            }),
            Animated.timing(radiusAnimation, {
                toValue: (isOpen) ? 0 : 20,
                duration: 200,
                useNativeDriver: true
            }),
            Animated.timing(moveAnimation, {
                toValue: (isOpen) ? 0 : Dimensions.get('window').width * 0.5,
                duration: 200,
                useNativeDriver: true
            })
        ]).start();
    }

    const getActiveScreen = (activeTab: number) => {
            return props.tabList[activeTab].page;
    }
    return (<>
        
        <Animated.View style={[MainScreenStyle.container, { borderRadius: radiusAnimation, transform: [{ scale: scaleAnimation }, { translateX: moveAnimation }] }]}>
            <Header toggleDrawer={openDrawer} />
            <View style={{ paddingHorizontal: 16 }}>
                {
                    getActiveScreen(props.activeTab)
                }

            </View>
        </Animated.View>
        {/* <View style={[MainScreenStyle.container, { borderRadius: 20, transform: [{ scale: 0.9 }, { translateX: 200 }, {rotateZ:'deg'}] }]}>
            <Header toggleDrawer={openDrawer} />
            <View style={{ paddingHorizontal: 16 }}>
                {
                    getActiveScreen(props.activeTab)
                }

            </View>
        </View> */}
    </>)
}

export default memo(MainScreen);