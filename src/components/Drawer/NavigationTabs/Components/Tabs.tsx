import { memo, useMemo } from 'react';
import { View, Text } from "react-native";
import Icons from 'react-native-vector-icons/AntDesign';
import tabsStyle from "./style";
import { TabsPropType } from "./model";
const { tabContainer, textStyle } = tabsStyle;



const Tabs = (props: TabsPropType) => {
    const {title, icon, active} = props;
    console.log('render',title);
    // const { title, icon, active } = useMemo(() => {
    //     return props;
    // }, [{...props}])
    return (
        
        <>
            <View style={[tabContainer,{backgroundColor:(active)?'rgba(255,255,255,0.4)':'transparent'}]}>
                <Text style={{ paddingHorizontal: 8 }}>
                    {icon}
                    {/* <Icons
                    name={'home'}
                    size={20}
                    color={'white'}
                    /> */}
                </Text>
                <Text style={textStyle}>
                    {title}
                </Text>
            </View>
        </>
    )
}

export default memo(Tabs);