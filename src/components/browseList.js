import React, { Component } from 'react';
import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  Card,
  CardItem,
  FooterTab,
  Header,
  Icon,
  Left,
  Right,
  Title
} from 'native-base';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import  { TabNavigator,StatusBar,navigationOptions } from 'react-navigation';
export default class BrowseList extends Component {
    static navigationOptions = {
      title: 'Lists',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
    render(){
        return(
          <Container>
            <Text>item page</Text>
        </Container>
        );
        }
        }