import { View, Text } from 'react-native';
import { Routes } from './src/routes/index'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}