import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// environment variables
import { API_URL } from '@env';

export default function App() {

  const [helloWorld, setHelloWorld] = useState('');

  const ping_hello_world = async () => {
    await axios.get(API_URL + '/hello')
      .then(res => {
        const data = res.data;
        setHelloWorld(data);
      })
      .catch(err => {
        console.log("Error: ", err);
        console.log(API_URL);
      });

  };

  // call hello world endpoint
  useEffect(() => {
    ping_hello_world();
    }, []);



  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <Text>{helloWorld}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
