import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import EventItem from '../../components/Eventitem';
import { styles } from './EventList.Style';


const EventListScreen = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const formatTimestamp = ({ seconds, nanoseconds })=> {
    // Converte para milissegundos (timestamp Unix usa milissegundos no JS)
    const milliseconds = seconds * 1000 + Math.floor(nanoseconds / 1_000_000);
    const date = new Date(milliseconds);
  
    // Formata os componentes da data
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // meses são 0-11
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    return `${day}/${month}/${year} às ${hours}:${minutes}`;
  }

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'eventos'));
        console.log("Eventos obtidos:", querySnapshot.docs);
        const eventsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setEvents(eventsData);
      } catch (error) {
        console.error("Erro ao buscar eventos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);
  useEffect(() => {
   console.log("Eventos:", events);
  }, [events]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#555" />
        <Text>Carregando eventos...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={events}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <EventItem
          name={item.name}
          date={formatTimestamp(item.date)}
          location={item.endereco}
        />
      )}
      ListEmptyComponent={<Text style={styles.center}>Nenhum evento encontrado.</Text>}
    />
  );
};

export default EventListScreen;
