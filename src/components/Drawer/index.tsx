// eslint-disable-next-line prettier/prettier
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import style from './style';
import { StatusBar } from 'react-native';
import Profile from './Profile';
import NavigationTab from './NavigationTabs';
import MainScreen from './MainScreen';
const Drawer = () => {
  return (
    <>
      {/* <StatusBar translucent={true} backgroundColor={'transparent'}/> */}
      <View style={{flex:1, position:'relative'}}>
        <View
          style={[style.container]}
        >
          <Profile />
          <NavigationTab />
        </View>
        <MainScreen/>
      </View>
    </>

  );
}
export default Drawer