import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'

export function Detail() {
  const route= useRoute() 
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.data ? route.params?.data.name : "Detalhes da Receita"
    })
  }, [navigation, route.params?.data])

  return(
  <View style={styles.container}>
    <Text>Página Details!</Text>
    <Text>{route.params?.data.name}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  }
})
