// tslint:disable-next-line: import-name
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

const Header = ({message}) => {

  const [loggedIn, isLoggedIn] = useState(false);
  const display = isLoggedIn ? `User logged:${loggedIn}` : message;
  const toggleUser = () => {
    return !isLoggedIn;
  }
  return (
        <View style={styles.headStyle}>
            <Image
                style={styles.logoStyle}
                source={require('./img/logo.png')}

            />
            <Text style={styles.headText} onPress={toggleUser}>{display}</Text>
        </View>
  );
};

Header.propTypes = {
  message: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  headText: {
    textAlign: 'right',
    color: '#ffffff',
    fontSize: 20,
    flex: 1,
  },
  headStyle: {
    paddingTop: 30,
    paddingRight: 10,
    backgroundColor: '#1273DE',
    flex:1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#000000',
  },
  logoStyle:{
    flex: 1,
    width: undefined,
    height:undefined,
    flexWrap: 'wrap',
  },
});

export default Header;
