// eslint-disable-next-line prettier/prettier
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import style from './style';
import { StatusBar } from 'react-native';
import Profile from './Profile';
import NavigationTab from './NavigationTabs';
import MainScreen from './MainScreen';
import { useState } from 'react';
import { DrawerPropType } from './model';

const Drawer = (props: DrawerPropType) => {
  const [active, setActive] = useState(0)
  return (
    <>
      {/* <StatusBar translucent={true} backgroundColor={'transparent'}/> */}
      <View style={{ flex: 1, position: 'relative' }}>
        <View
          style={[style.container]}
        >
          <Profile />
          <NavigationTab tabList={props.tabs} activeTab={active} setActiveTab={setActive} />
        </View>
        <MainScreen activeTab={active} tabList={props.tabs} />
      </View>
    </>

  );
}
export default Drawer