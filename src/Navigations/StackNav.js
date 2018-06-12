
import { StackNavigator,DrawerNavigator} from 'react-navigation'

//import DrawerNav from './DrawerNav';

import MenuDetalhe from './MenuDetalhe'

import Login from '../Screens/Login';
import LoginFor from '../Screens/LoginFor';
import Home from '../Screens/Home';
import Pedidos from '../Screens/Pedidos';
import SelecionarPedido from '../Screens/SelecionarPedido';
import Historico from '../Screens/Historico';

const StackNav = StackNavigator({
  LoginScre:{
    screen: Login,
  },
  LoginFor:{
    screen: LoginFor,
    navigationOptions: ()=> ({
      title:'Cadastro',
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor: '#6200EE'
      }
    })
  },
  Home: {
    screen: Home,
    navigationOptions: ()=> ({
      title:'Pedidos',
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor: '#6200EE'
      }
    })
  },
  SelecionarPedido: {
    screen: SelecionarPedido,
    navigationOptions: ()=> ({
      title:'Seleciona Produto',
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor: '#6200EE'
      }
    })
  },
  Pedidos: {
    screen: Pedidos,
    navigationOptions: ()=> ({
      title:'Finaliza Compra',
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor: '#6200EE'
      }
    })
  },
});

export default DrawerNavi = DrawerNavigator({
  Home:{
    screen: StackNav
  },
  Historico :{
    screen: Historico
  }
});
