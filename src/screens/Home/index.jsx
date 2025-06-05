import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../../context/AppContext';
import { styles } from './Home.styles';

const Home = () => {
    const navigation = useNavigation();
    const { participantes } = useContext(AppContext);
    const [lotacao, setLotacao] = useState(2);
    const vagas = lotacao - participantes.length;
    const isLotado = participantes.length >= lotacao;


    const goToAddParticipante = () => {
        navigation.navigate('AddParticipante');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Baguncinha ao entardecer - 🔊🔥 O evento do ano!!! 🎵🔊</Text>
            <Text style={styles.count}>
                Participantes cadastrados: {participantes.length} Participantes confirmados para o grande dia
                {/* Seja bem-vindo(a) à nossa festa! */}
            </Text>
            <Text style={styles.count}>
                Vagas disponíveis: {vagas}
            </Text>

            {!isLotado && (
                <TouchableOpacity disabled={isLotado} style={styles.btn} onPress={goToAddParticipante}>
                    <Ionicons name="add" size={32} color="#fff" />
                </TouchableOpacity>
            )}

        </View>
    );
};

export default Home;