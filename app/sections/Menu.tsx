/* eslint-disable react/prop-types */
// tslint:disable-next-line: import-name
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const onPress = () => {
  console.log('Button pressed');
}

const Menu = ({ navigation }) => {
  return (
        <View style={styles.container}>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonStyles} onPress={() => navigation.navigate('CardList')}>
                    <Text style={styles.buttonText}>CARDS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
                    <Text style={styles.buttonText}>BLOG</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyles} onPress={() => navigation.navigate('Contact')}>
                    <Text style={styles.buttonText}>CONTACT</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
                    <Text style={styles.buttonText}>QUIZ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
                    <Text style={styles.buttonText}>ABOUT</Text>
                </TouchableOpacity>
            </View>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:6,
    backgroundColor: '#1273DE',
  },
  buttonRow: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ffffff',
    borderBottomWidth: 1,
  },
  buttonStyles:{
    backgroundColor: '#1273DE',
    height: '50%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default Menu;
