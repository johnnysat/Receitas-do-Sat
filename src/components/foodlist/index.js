import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export function FoodList({ data }) {
  return(
    <TouchableOpacity activeOpacity={0.8} style={styles.card}>
      <Image 
      source={{uri: data.cover }}
      style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.about}>{data.total_ingredients} Ingredientes | {data.time} Min</Text>
      </View>
      <LinearGradient 
        style={styles.gradient}
        colors={['transparent', 'rgba(0, 0, 0, 0.70)', 'rgba(0, 0, 0, 0.95)']}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 14,
  },
  image: {
    width: '100%',
    height: 150, 
    borderRadius: 14,
  },
  info: {
    position: 'absolute',
    bottom: 14,
    left: 14,
    zIndex: 99,
  },
  name: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  about: {
    color: '#fff',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '55%',
    borderRadius: 14,
    zIndex: 1,
    backgroundColor: 'transparent'
  }
})