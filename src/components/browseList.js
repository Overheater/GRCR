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
      title: 'all lists',
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
            <Text>all lists are shown here</Text>
        </Container>
        );
        }
        }