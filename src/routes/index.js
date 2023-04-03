import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../pages/home';
import { Favorites } from '../pages/favorites';
import { Ionicons } from '@expo/vector-icons';


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
    <Tab.Screen 
    name="Receitas do Sat" 
    component={Home} 
    options={{ 
      tabBarIcon: ({ color, size, focused }) => {
        if(focused){
          return <Ionicons name="home" color="#000000" size={size}/>
        }
        return <Ionicons name="home-outline" color={color} size={size}/>
      }
     }}
    />
    <Tab.Screen 
    name="Minhas Favoritas" 
    component={Favorites} 
    />
  </Tab.Navigator>
  )
}