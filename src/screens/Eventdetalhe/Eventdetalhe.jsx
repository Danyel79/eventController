import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

const EventDetalhe = ({ route }) => {
  const { name, date, location } = route.params;

  const handlePress = () => {
    Alert.alert('🎉 Presença confirmada!', 'Você está dentro da Baguncinha ao Entardecer! 🔥');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{name}</Text>

        <Text style={styles.highlight}>
          🎉 Uma experiência única ao pôr do sol, com música vibrante, gente bonita e muita energia! 🔥✨
        </Text>

        <Text style={styles.section}>📅 Data do Evento:</Text>
        <Text style={styles.info}>{date}</Text>

        <Text style={styles.section}>📍 Local:</Text>
        <Text style={styles.info}>{location}</Text>

        <Text style={styles.footer}>
          Prepare-se para dançar, curtir e viver uma noite inesquecível. 💃🕺  
          Vista seu melhor sorriso, traga sua vibe e venha fazer parte da **Baguncinha ao Entardecer**!
        </Text>

        {/* Botão personalizado */}
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>✅ Confirmar Presença</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fcefee',
    padding: 24,
    alignItems: 'center',
    flexGrow: 1,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 380,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#e63946',
    textAlign: 'center',
    marginBottom: 16,
  },
  highlight: {
    fontSize: 16,
    color: '#6a1b9a',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  section: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 12,
  },
  info: {
    fontSize: 16,
    color: '#444',
    marginTop: 4,
    marginBottom: 10,
    textAlign: 'center',
  },
  footer: {
    marginTop: 20,
    fontSize: 16,
    color: '#2d3436',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EventDetalhe;
