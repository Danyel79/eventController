import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Eventitem.style';

const EventItem = ({ name, date, location }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    console.log("Navegando para detalhes do evento:", { name, date, location });
    navigation.navigate('EventDetalhe', { name, date, location });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {name}</Text>
      <Text style={styles.info}>📅 {date}</Text>
      <Text style={styles.info}>📍 {location}</Text>

      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Ver Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EventItem;