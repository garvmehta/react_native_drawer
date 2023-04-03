import Drawer from './src/components/Drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerPropType, DrawerTabType } from './src/components/Drawer/model';
import Icons from 'react-native-vector-icons/AntDesign';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Home from './src/pages/home';
import Search from './src/pages/search';
import Notification from './src/pages/notification';
import Settings from './src/pages/settings';
import {StatusBar, View} from 'react-native';
const tabList: Array<DrawerTabType> = [
  {
    title: 'Home',
    icon: <Icons
      color={'white'}
      size={20}
      name="home"
    />,
    page: <Home />
  },
  {
    title: 'Search',
    icon: <Icons
      color={'white'}
      size={20}
      name="search1"
    />,
    page: <Search />
  },
  {
    title: 'Notifications',
    icon: <IonicIcons
      color={'white'}
      size={20}
      name="ios-notifications-outline"
    />,
    page: <Notification />
  },
  {
    title: 'Settings',
    icon: <FeatherIcons
      color={'white'}
      size={20}
      name="settings"
    />,
    page: <Settings />
  }

];
const App = () => {
  return (
    <>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
      <Drawer tabs={tabList} style={{paddingTop:StatusBar.currentHeight}} />
    </>

  );
};

export default App;
