/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, TextInput, TouchableHighlight } from 'react-native';
import Header from '../sections/Header';

const Contact = ({ navigation }) => {

  const [name, setName] = useState('Name');
  const [msg, setMessage] = useState('Message');
  const [email, setEmail] = useState('Email');

  const sendMessage = () => {
    Alert.alert(name, msg);
    console.log(`name: ${name} email:${email} message:${msg}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
         <Header message='Press to login' />
         <Text style={styles.heading}>Contact Us</Text>

        <TextInput
            style={styles.inputs}
            onChangeText={ text => setName(text)}
            value={name}
        />

        <TextInput
            style={styles.multiInput}
            onChangeText={ text => setMessage(text)}
            value={msg}
            multiline= {true}
            numberOfLines= {4}
        />

        <TextInput
            style={styles.inputs}
            onChangeText={ text => setEmail(text)}
            value={email}
        />

        <TouchableHighlight onPress={sendMessage} underlayColor='#31e981'>
            <Text style = {styles.buttons}>
                Send Message
            </Text>
        </TouchableHighlight>

    </View>
  );
};

Contact.navigationOptions = () => ({
  headerShown: false,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: '45%',
  },
  heading: {
    fontSize: 16,
    flex: 1,
  },
  inputs: {
    flex: 1,
    width: '80%',
    padding: 10,
  },
  multiInput: {
    flex: 2,
    width: '90%',
    paddingTop: 20,
  },
  buttons: {
    marginTop: 15,
    fontSize: 16,
  },
});

export default Contact;
