import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

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
        <Text></Text>
      </View>
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
    bottom: 0,
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
  }
})