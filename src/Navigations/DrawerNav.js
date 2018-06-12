import { DrawerNavigator} from 'react-navigation'

import Home from '../Screens/Home';
import Historico from '../Screens/Historico';

const DrawerNav = DrawerNavigator({

  Home:{
    screen: Home,
  },
  Historico:{
    screen: Historico,
  }
});
export default DrawerNav;
