import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, FlatList, StyleSheet } from 'react-native';

export default function BuscaScreen() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const fetchMovieInfo = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=f8dc2553&s=${query}`);
      const data = await response.json();
      if (data.Response === "False") {
        setError(data.Error);
        setMovies([]);
      } else {
        setMovies(data.Search || []);
        setError(null);
      }
    } catch (error) {
      console.error("Error fetching movie info:", error);
      setError("Erro ao buscar informações do filme. Por favor, tente novamente.");
      setMovies([]);
    }
  };

  const renderMovieItem = ({ item }) => (
    <View style={styles.movieItem}>
      <Image 
        style={styles.poster}
        source={{uri: item.Poster}}
        resizeMode="cover"
      />
      <Text style={styles.movieTitle}>{item.Title}</Text>
      <Text style={styles.movieGenre}>Gênero: {item.Type}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Busca de Filmes</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o título do filme"
        onChangeText={text => setQuery(text)}
        value={query}
      />
      <Button
        title="Buscar"
        onPress={fetchMovieInfo}
        color="#000"
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        style={styles.movieList}
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={item => item.imdbID}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#272932',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#E7ECEF',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    color: '#fff'
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  movieList: {
    width: '100%',
  },
  movieItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#8B4513',
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E7ECEF',
  },
  movieGenre: {
    color: '#E7ECEF',
  },
  poster: {
    width: 100,
    height: 150,
    marginBottom: 10,
  },
  Button: {
    backgroundColor: '#E7ECEF',
    color: '#fff'
  }
});
