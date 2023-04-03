export type DrawerTabType = {
    title: string;
    icon: React.ReactNode;
    page: React.ReactNode;
}
export type DrawerPropType = {
    tabs: Array<DrawerTabType>;
}