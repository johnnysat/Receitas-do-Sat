import {View, Text, StyleSheet } from 'react-native'

export function Logo () {
  return (
    <View style={styles.logoArea}>
      <Text style={styles.logo}>Receitas do Sat</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logoArea: {
    backgroundColor: '#4CBE6C',
    alignSelf: "flex-start",
    padding: 8,
    paddingLeft: 12,
    paddingRight: 20,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 32,
  },
  logo:{
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  }
})