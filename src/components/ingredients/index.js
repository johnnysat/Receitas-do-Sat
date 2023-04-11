import { View, Text, StyleSheet } from 'react-native'

export function Ingredients() {
  return(
    <View style={styles.container}>
      <Text style={styles.ingredientName}>Massa de Pizza</Text>
      <Text>100mg</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 4,
  },
  ingredientName: {
    fontWeight: 500,
    fontSize: 16,
  }
})