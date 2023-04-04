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
    backgroundColor: '#4CBE6C',
    alignSelf: "flex-start",
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 32,
  }
})