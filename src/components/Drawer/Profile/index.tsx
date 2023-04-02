import { View, Text, Image } from 'react-native';
import ProfileStyle from './style';

const Profile = () => {
    return (
        <>
            <View>
                <View
                style={ProfileStyle.imageBox}
                >
                    <Image
                        style={ProfileStyle.image}
                        source={{ uri: 'https://avatars.githubusercontent.com/u/63910721?v=4' }}
                    />
                </View>
                <Text style={ProfileStyle.userNameStyle}>Garv Mehta</Text>
                <Text style={ProfileStyle.titleStyle}>React Native Developer</Text>
            </View>
        </>
    );
}
export default Profile;