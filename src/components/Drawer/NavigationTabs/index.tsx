import {useState} from 'react';
import Tabs from "./Components/Tabs";
import { Pressable, View } from "react-native";
import NavigationTabStyle from "./style";
import { TabType, TabsPropType } from "./Components/model";
import Icons from 'react-native-vector-icons/AntDesign';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather';

const TabList: Array<TabType> = [{
    title: 'home',
    icon: <Icons
        color={'white'}
        size={20}
        name="home"
    />
},
{
    title: 'Search',
    icon: <Icons
        color={'white'}
        size={20}
        name="search1"
    />
},

{
    title: 'Notifications',
    icon: <IonicIcons
        color={'white'}
        size={20}
        name="ios-notifications-outline"
    />
},
{
    title: 'Settings',
    icon: <FeatherIcons
        color={'white'}
        size={20}
        name="settings"
    />
}

]

const NavigationTab = () => {
    const [active, setActive]= useState(0)
    return (
        <View style={NavigationTabStyle.navBox}>
            {
                TabList.map((item, index) => {
                    return (
                        <Pressable key={index} onPress={()=>{
                            console.log(index);
                            setActive(index);
                        }}>
                            <Tabs  title={item.title} icon={item.icon} active={(index==active)?true:false} />

                        </Pressable>
                    )
                })
            }

        </View>
    )
}
export default NavigationTab;