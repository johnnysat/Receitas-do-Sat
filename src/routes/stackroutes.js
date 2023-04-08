import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../pages/home'
import { Detail } from '../pages/details'
import { Search } from '../pages/search'

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return(
    <StackNavigator>
      <Stack.Screen name="home" component={Home}/>
      <Stack.Screen name="detail" component={Detail}/>
      <Stack.Screen name="search" component={Search}/>
    </StackNavigator>
  )
}