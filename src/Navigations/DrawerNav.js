import { DrawerNavigator} from 'react-navigation'

import Login from '../Screens/Login';
import LoginFor from '../Screens/LoginFor';
import Home from '../Screens/Home';
import Pedidos from '../Screens/Pedidos';

export default DrawerScreen = DrawerNavigator({
  LoginFor:{
    screen: LoginFor
  },
  Home:{
    screen: Home
  },
  Pedidos: {
    screen: Pedidos
  }
});
