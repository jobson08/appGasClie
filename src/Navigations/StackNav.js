import { StackNavigator} from 'react-navigation'

import Login from '../Screens/Login';
import LoginFor from '../Screens/LoginFor';
import Home from '../Screens/Home';
import Pedidos from '../Screens/Pedidos';

export default StackScreen = StackNavigator({
  LoginScre:{
    screen: Login
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
  Home:{
    screen: Home,
    navigationOptions: ()=> ({
      title:'Home',
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor: '#6200EE'
      }
  })
  },
  Pedidos: {
    screen: Pedidos,
    navigationOptions: ()=> ({
      title:'Pedidos',
      headerTintColor: 'white',
      headerStyle:{
      backgroundColor: '#6200EE'
      }
    })
  }
});
