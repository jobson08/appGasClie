
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import Colors from '../Styles/Colors';

import { Card, CardItem, Container, Content, Left, Right, Body, Button, Icon } from 'native-base';


import CardProduto from '../Components/CardProduto'

export default class SelecionarPedido extends Component {
  render() {
    return (
      <Container style={styles.container}>

      <ScrollView>
        <Content style={styles.styleContent}>
  <Card>
    <CardItem>
    <View>
      <Image style={styles.imagens} source={require("../img/botijao-kg.jpg")}/>
    </View>
    </CardItem>
    <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11 h ago</Text>
              </Right>
  </CardItem>
</Card>

<Card>
  <CardItem>
  <View>
    <Image style={styles.imagens} source={require("../img/agua-g.jpg")}/>
  </View>
  </CardItem>
  <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11 h ago</Text>
            </Right>
</CardItem>
</Card>
<TouchableOpacity
        style={styles.button}
        onPress={()=> this.props.navigation.navigate('Pedidos')}>
        <Text style={styles.buttonText}> Finalizar Pedido </Text>
</TouchableOpacity>
  </Content>

  </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D5D5D5",
  },
  styleContent:{
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
imagens:{
  height: 150,
  width: 300,
  flex: 1
},
nomeProduto:{
fontSize: 16,
fontWeight: 'bold'
},
textValor:{
  fontSize: 14,
  fontWeight: 'bold',
  color: '#c4402f'
},
descricaoProduto:{
  fontSize: 14,
  fontWeight: 'bold',
  color: '#c4402f'
},
button: {
  height: 45,
  backgroundColor: Colors.BtnVerde,
  alignSelf: 'stretch',
  marginTop: 10,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
  borderWidth: 1,
  borderColor: Colors.Branco,
  flexDirection: 'row',
},
buttonText: {
  color: Colors.Branco,
  fontSize: 25,
  fontWeight: 'bold',
},

});
