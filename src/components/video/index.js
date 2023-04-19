import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function VideoView( {handleClose, videoUrl} ) {
  return(
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.returnButton} onPress={handleClose}>
        <Feather name="arrow-left" size={24} color="#FFF" />
        <Text style={styles.returnText}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  returnButton: {
    width: '100%',
    backgroundColor: '#4CbE6C',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 14,
  },
  returnText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: 500,
    marginLeft: 14,
  }
})