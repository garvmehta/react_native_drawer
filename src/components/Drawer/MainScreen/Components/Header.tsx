import { useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import Icons from 'react-native-vector-icons/Feather'
type HeaderProps = {
    toggleDrawer: (isOpen: boolean) => void
}
const Header = (props: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <View style={style.container}>
                <TouchableOpacity
                    onPress={() => {
                        props.toggleDrawer(isOpen);
                        setIsOpen(!isOpen);
                    }}>
                    {(!isOpen) ?
                        <Icons
                            name="menu"
                            color={'black'}
                            size={30}

                        /> :
                        <View
                            style={{ transform: [{ rotate: '45deg' }], width: 35 }}
                        >
                            <Icons
                                name="plus"
                                color={'black'}
                                size={35}

                            />
                        </View>
                    }
                </TouchableOpacity>

            </View>
        </>
    )
}
const style = StyleSheet.create({
    container: {
        width: "100%",
        padding: 16,
    }
})
export default Header;