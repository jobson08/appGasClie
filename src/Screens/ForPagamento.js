import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';
import Colors from '../Styles/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Container, Content, Header, Left, Right, Icon } from 'native-base';

class ForPagamento extends Component {
  render() {
    return (
      <Container>
      <StatusBar
      backgroundColor={Colors.ColorStatubar}
      animated={true}
      />
        <Header style ={styles.headerStyle}>
          <Right>
            <FontAwesome name="angle-left" onPress={()=> this.props.navigation.navigate('Home')}
            style={{color: 'white', fontSize:40, marginRight: 375}}
           />
          </Right>
        </Header>

      </Container>
    );
  }
}
export default ForPagamento;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerStyle: {
    borderBottomColor: '#757575',
  }
});
