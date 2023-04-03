import { StyleProp, ViewStyle } from "react-native";

export type DrawerTabType = {
    title: string;
    icon: React.ReactNode;
    page: React.ReactNode;
}
export type DrawerPropType = {
    tabs: Array<DrawerTabType>;
    style?: StyleProp<ViewStyle>;
}