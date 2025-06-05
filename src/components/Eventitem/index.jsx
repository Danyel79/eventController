import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './Eventitem.style';

const EventItem = ({ name, date, location }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.info}>📅 {date}</Text>
      <Text style={styles.info}>📍 {location}</Text>
    </View>
  );
};

export default EventItem;