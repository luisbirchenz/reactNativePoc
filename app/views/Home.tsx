/* eslint-disable react/prop-types */
// tslint:disable-next-line: import-name
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../sections/Header';
import Body from '../sections/Body';
import Menu from '../sections/Menu';

const Home = ({ navigation }) => {
  return (
        <View style={styles.container}>
            <Header message='Press to login' />
            <Body />
            <Menu navigation = { navigation }/>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});

Home.navigationOptions = () => ({
  headerShown: false,
});

export default Home;
