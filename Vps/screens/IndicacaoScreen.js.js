import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IndicacaoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Indicações</Text>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Titanic</Text>
        <Text style={styles.movieDescription}>Um épico romance dirigido por James Cameron que narra a trágica história do naufrágio do RMS Titanic. Ambientado contra o pano de fundo da viagem inaugural do navio em 1912, o filme segue o romance proibido entre um passageiro de primeira classe e um artista pobre.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>O Poderoso Chefão</Text>
        <Text style={styles.movieDescription}>A saga de uma família mafiosa italiana nos Estados Unidos, liderada por Don Vito Corleone, o "Poderoso Chefão".</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Oxigenio</Text>
        <Text style={styles.movieDescription}>Retrata uma mulher despertando em uma unidade de armazenamento criogênico sem memória. Presa e lutando contra a falta de oxigênio, ela tenta descobrir sua identidade e escapar enquanto confronta revelações surpreendentes sobre seu passado e sua situação atual.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Cidade de Deus</Text>
        <Text style={styles.movieDescription}>A vida em uma favela do Rio de Janeiro ao longo de várias décadas, com foco nas histórias de dois jovens que seguem caminhos diferentes.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Forrest Gump</Text>
        <Text style={styles.movieDescription}>Um homem simples com um coração puro embarca em uma jornada extraordinária através de décadas de história americana, encontrando amor, aventura e desafios ao longo do caminho.</Text>
      </View>
      <View style={styles.movie}>
        <Text style={styles.movieTitle}>Clube da Luta</Text>
        <Text style={styles.movieDescription}>Um homem desiludido encontra um novo sentido para sua vida ao se envolver em violentas lutas clandestinas organizadas por um misterioso homem carismático.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: '#000',
  },
});

export default IndicacaoScreen;
