import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ContatoScreen() {
  // Informações de contato e descrição
  const informacoes = {
    contato: {
      email: "landimr9des@gmail.com",
      telefone: "(19)9919321932",
      endereco: "Rua Anèsia Venturini Zani, 62, Jaguariúna, São Paulo"
    },
    descricao: "Cinema na Mão é um site que oferece busca de filmes com uma interface simples e amigável. Os usuários podem encontrar uma ampla variedade de filmes, filtrar por diferentes critérios e acessar sinopses detalhadas, avaliações de usuários e críticas especializadas para tomar decisões informadas sobre o que assistir. É uma plataforma conveniente para explorar e desfrutar do entretenimento cinematográfico."
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato / Quem Somos</Text>
      <Text style={styles.subtitle}>Entre em contato:</Text>
      <Text style={styles.info}>Email: {informacoes.contato.email}</Text>
      <Text style={styles.info}>Telefone: {informacoes.contato.telefone}</Text>
      <Text style={styles.info}>Endereço: {informacoes.contato.endereco}</Text>
      <Text style={styles.description}>{informacoes.descricao}</Text>
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
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#fff',
  },
  info: {
    fontSize: 16,
    marginTop: 5,
    color: '#fff',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#fff',
  },
});
