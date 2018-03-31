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
import Styles from '../Styles/Styles';
import BrowseList from './browseList';
import ListView from './listView';
import AddItem from './addItem';

const RootBrowse = StackNavigator({
  BrowseLists: {
      screen: browseList
  },
  SingleList: {
      screen: RootTab
  }
})
const RootTab = TabNavigator({
  List: { screen: listView },
  Search: { screen: addItem },
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'List') {
        iconName = `md-paper`;
      } else if (routeName === 'Search') {
        iconName = `ios-search`;
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
      <RootBrowse/>
    );
  }
}
