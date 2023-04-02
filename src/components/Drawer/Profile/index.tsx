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
                        source={{ uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' }}
                    />
                </View>
                <Text style={ProfileStyle.userNameStyle}>Garv Mehta</Text>
                <Text style={ProfileStyle.titleStyle}>Application Developer</Text>
            </View>
        </>
    );
}
export default Profile;