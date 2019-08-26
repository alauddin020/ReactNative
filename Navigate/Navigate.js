import React from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
} from 'react-navigation';
import {Ionicons} from 'react-native-vector-icons';

import HomeScreen from '../Component/Home';
import SettingsScreen from '../Component/Setting';
import DetailsScreen from '../Component/Details';
import ProfileScreen from '../Component/Profile';
const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen ,
    Details:DetailsScreen ,
    Profile:ProfileScreen ,
    Settings:SettingsScreen ,
},
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = "ios-home";
                } else if (routeName === 'Settings') {
                    iconName = "ios-menu";
                }else if (routeName === 'Details') {
                    iconName = "ios-book";
                }else if (routeName === 'Profile') {
                    iconName = "ios-person";
                }
                return <IconComponent name={iconName} size={25} color={tintColor}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#42f44b',
            inactiveTintColor: 'gray',
        }
    }
);

export default createAppContainer(TabNavigator);