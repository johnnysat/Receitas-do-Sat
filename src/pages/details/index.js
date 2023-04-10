import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'

export function Detail() {
  const route= useRoute() 
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.data ? route.params?.data.name : "Detalhes da Receita",
      headerRight: () => (
        <Pressable onPress={() => console.log('testando')}>
          <Entypo 
          name="heart"
          size={28}
          color="#FF4141"
          />
        </Pressable>
      )
    })
  }, [navigation, route.params?.data])

  return(
  <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
    <Pressable>
      <Image 
        source={{uri: route.params.data.cover}}
        style={styles.image}
      />
    </Pressable>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F9FF',
    paddingTop: 14,
    paddingEnd: 14,
    paddingStart: 14,
  },
  image: {
    height: 200,
    borderRadius: 14,
    width: '100%',
  }

})
