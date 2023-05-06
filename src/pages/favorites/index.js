import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView} from 'react-native';
import { getFavorites } from '../../utils/storage';

export function Favorites() {
  const [receipes, setReceipes] = useState([]);

  useEffect(() => {
    async function getReceipes(){
      const result = await getFavorites("@appreceitas")
    }
    getReceipes();
  }, [])

  return(
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Minhas Receitas Favoritas!</Text>

    {receipes.length === 0 && (
      <Text>Você deveria adicionar alguma receita por aqui...</Text>
    )}
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f9ff',
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 36,
  },
  title: {
    color: "#000",
    fontWeight: 'bold',
    fontSize: 24,
  }
})
