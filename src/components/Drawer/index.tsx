// eslint-disable-next-line prettier/prettier
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import style from './style';
import { StatusBar } from 'react-native';
import Profile from './Profile';
import NavigationTab from './NavigationTabs';
const Drawer = () => {
  return (
    <>
      {/* <StatusBar translucent={true} backgroundColor={'transparent'}/> */}
      <View
      style={[style.container]}
      >
        <Profile/>
        <NavigationTab/>
      </View>
    </>

  );
}
export default Drawer