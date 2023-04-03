import {useState} from 'react';
import Tabs from "./Components/Tabs";
import { Pressable, View } from "react-native";
import NavigationTabStyle from "./style";

import {  DrawerTabType } from '../model';

type NavigationTabPropsType = {
    activeTab :number;
    setActiveTab:(index:number)=>any;
    tabList:Array<DrawerTabType>;
}

const NavigationTab = (props:NavigationTabPropsType) => {
    const {activeTab, setActiveTab, tabList} = props;
    return (
        <View style={NavigationTabStyle.navBox}>
            {
                tabList.map((item, index) => {
                    return (
                        <Pressable key={index} onPress={()=>{
                            console.log(index);
                            setActiveTab(index);
                        }}>
                            <Tabs  title={item.title} icon={item.icon} active={(index==activeTab)?true:false} />

                        </Pressable>
                    )
                })
            }

        </View>
    )
}
export default NavigationTab;