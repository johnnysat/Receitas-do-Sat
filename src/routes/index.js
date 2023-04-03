import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../pages/home';
import { Favorites } from '../pages/favorites';


const Tab = createBottomTabNavigator();

export function Routes() {
  return (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarHideOnKeyboard: true,
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#000000',

      tabBarStyle:{
        backgroundColor: "#fff"
      }
    }}>
    <Tab.Screen name="Receitas do Sat" component={Home} />
    <Tab.Screen name="Minhas Favoritas" component={Favorites} />
  </Tab.Navigator>
  )
}