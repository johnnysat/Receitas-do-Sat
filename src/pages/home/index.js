import { View, Text, StyleSheet, SafeAreaView} from 'react-native';

export function Home() {
  return(
  <SafeAreaView style={styles.container}>
    <Text>Página Home</Text>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F9FF',
    paddingTop: 36,
    paddingStart: 14,
    paddingEnd: 14,
  }
})
