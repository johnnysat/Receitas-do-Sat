import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'
import { Entypo, AntDesign, Feather } from '@expo/vector-icons'
import { Ingredients } from '../../components/ingredients'
import { Instructions } from '../../components/instructions'


export function Detail() {
  const route = useRoute()
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

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Pressable>
        <View style={styles.playIcon}>
          <AntDesign name={'playcircleo'} size={80} color="#FAFAFA" />
        </View>
        <Image
          source={{ uri: route.params.data.cover }}
          style={styles.image}
        />
      </Pressable>

      <View style={styles.headerDetails}>
        <View>
          <Text style={styles.title}>{route.params?.data.name}</Text>
          <Text style={styles.ingredientsText}>Ingredientes: {route.params?.data.total_ingredients}</Text>
        </View>
        <Pressable>
          <Feather name="share-2" size={24} color={'#121212'} />
        </Pressable>
      </View>

      <Ingredients />

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
  },
  playIcon: {
    position: 'absolute',
    zIndex: 9,
    top: 0, right: 0, bottom: 0, left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 14,
    color: "#000",
    marginBottom: 4,
  },
  ingredientsText: {
    fontSize: 16,
    marginBottom: 14,
  },
  headerDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  }


})
