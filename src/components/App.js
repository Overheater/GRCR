/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {TabNavigator,TabBarBottom, StackNavigator,NavigationAction} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from '../Styles/Styles';
import BrowseList from './browseList';
import ListView from './listView';
import AddItem from './addItem';
import AddList from './addList';
import localStorage from '../services/localStorage';


const SingleList = StackNavigator({
  List: { screen: ListView },
  Search: { screen: AddItem },
})
const MultiList = StackNavigator({
  List: { screen: BrowseList },
  Search: { screen: AddList },
})
const RootTab = TabNavigator({
  BrowseLists: {
    screen: MultiList
},
SingleList: {
    screen: SingleList
}
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'BrowseLists') {
        iconName = `ios-paper-outline`;
      } else if (routeName === 'SingleList') {
        iconName = `ios-list-box-outline`;
      }
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
}
);
export default class App extends Component {
  render() {
    return (
      <RootTab/>
    );
  }
}
