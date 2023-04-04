import {View, Text, StyleSheet } from 'react-native'

export function Logo () {
  return (
    <View style={styles.logoArea}>
      <Text>Receitas do Sat</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logoArea: {
    backgroundColor: '#4CBE6C'
  }
})