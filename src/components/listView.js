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
export default class ListView extends Component {
    static navigationOptions = {
      title: ' single Lists',
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
            <Text>list of groceries goes here</Text>
        </Container>
        );
        }
        }