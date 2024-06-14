import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DestaquesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Destaques</Text>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Duna</Text>
        <Text style={styles.movieDescription}>uma épica aventura espacial que segue o jovem nobre Paul Atreides enquanto ele embarca em uma jornada para proteger o futuro de sua família e de seu povo em um planeta desértico hostil, conhecido como Arrakis.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Godzilla e Kong: O Novo Império</Text>
        <Text style={styles.movieDescription}>os antigos inimigos são convencidos a trabalhar juntos para deter uma nova ameaça escondida em nosso mundo, que pode colocar não só a nossa existência em risco, mas também a dos colossais titãs.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Spider-Man: No Way Home</Text>
        <Text style={styles.movieDescription}>o Homem-Aranha enfrenta um desafio como nunca antes, quando segredos de seu passado são desenterrados e ele é forçado a confrontar vilões de outras realidades. Com a ajuda de velhos amigos e aliados, ele luta para salvar o mundo e proteger aqueles que ama.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#272932',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  movie: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#E7ECEF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  movieDescription: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#333',
  },
});

export default DestaquesScreen;
