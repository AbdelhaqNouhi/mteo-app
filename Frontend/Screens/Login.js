import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';

export default function Login() {
    const navigation = useNavigation();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const loginClient = async (e) => {
        e.preventDefault()

    }

  return (
    <View style={styles.container}>
      <Text>{errorMessage}</Text>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>My weather Now</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={loginClient}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'black'
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: 50
    },
    logo: {
      width: 100,
      height: 100,
    },
    logoText: {
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 10,
      color:'#FFF'
    },
    formContainer: {
      width: '80%',
    },
    input: {
      height: 40,
      backgroundColor: '#FFF',
      marginBottom: 20,
      padding: 10,
      color: '#000',
      borderRadius: 5,
    },
    buttonContainer: {
      backgroundColor: '#2980b9',
      paddingVertical: 15,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });