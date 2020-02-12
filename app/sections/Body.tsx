/* eslint-disable no-undef */
// tslint:disable-next-line: import-name
import React from 'react';
import { StyleSheet, Image } from 'react-native';

const Body = () => {
  return (
        <Image
            style={styles.bodyImage}
            source={require('./img/poc.jpg')}
        />
  );
};

const styles = StyleSheet.create({
  bodyImage:{
    width: undefined,
    height: undefined,
    flex:8,
  },
});

export default Body;
