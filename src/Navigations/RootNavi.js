import { StackNavigator} from 'react-navigation'
import DrawerNav from 'DrawerNav';

import Home from '../Screens/Home';
import Pedidos from '../Screens/Pedidos';

export default RootNavScree = StackNavigator({
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
  root:{
    screen: DrawerNav,
  },

});
