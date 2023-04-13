import { View, Text, StyleSheet } from 'react-native'

export function Instructions({ data, index }) {
  return(
    <View style={styles.container}>
      <Text style={styles.instructionsId}>{data.id} - </Text>
      <Text style={styles.instructionsText}>{data.text}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
    marginBottom: 14,
  },
  instructionsId: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  instructionsText: {
    paddingTop: 8,
    width: '90%',
  }
})