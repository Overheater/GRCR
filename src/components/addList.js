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
  TextInput
} from 'react-native';
import  { TabNavigator,StatusBar,navigationOptions } from 'react-navigation';
import localStorage from '../services/localStorage';
export default class AddList extends Component {
    constructor(props)
    {
      super(props);
      this.state = { text: '',listnum:0};
    }

    static navigationOptions = {
      title: 'add a List',
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
        <Content>
          <Text>
            add a list by using the text input
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <TextInput
            style={{width: 200,height: 55, borderBottomColor: Platform.OS === 'ios' ? 'black' : null, borderBottomWidth: Platform.OS === 'ios' ? 1 : null}}
            placeholder='Input your list name here'
            value={this.state.text}
            onChangeText={(intext) => this.setState({text:intext})}
            onSubmitEditing={()=>localStorage.addList(listnum,text)}
            />
          </FooterTab>
        </Footer>
        </Container>
        );
        }
        }