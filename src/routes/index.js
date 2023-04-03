import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../pages/home';

const Tab = createBottomTabNavigator();

export default Routes = () => (
  <Tab.Navigator>
    <Tab.Screen name="HomeTab" component={Home} />
  </Tab.Navigator>
)