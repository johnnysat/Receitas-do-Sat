import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../pages/home'
import { Detail } from '../pages/details'
import { Search } from '../pages/search'

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: "Detalhes da Receita"
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: "Veja o que encontramos"
        }}
      />
    </Stack.Navigator>
  )
}