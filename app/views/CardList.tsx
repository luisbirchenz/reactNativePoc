/* eslint-disable react/react-in-jsx-scope */

import React from 'react';
import { StyleSheet, View, Image, Text, FlatList } from 'react-native';

const users = [
  {
    name: 'Luis',
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    description: 'Java',
  },
  {
    name: 'Walter',
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    description: 'Manager',
  },
  {
    name: 'Simon',
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    description: 'Angular',
  },
  {
    name: 'Ale',
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    description: 'React',
  },
];

const CardListItem = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source = {{ uri: data.avatar }}
          style = {styles.img} />
        <View style={styles.info}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.name}>{data.description}</Text>
        </View>
      </View>
      <View style={styles.cardBorder}></View>
    </View>
    
  );
};

const getItem = ({ item }) => {
  return(<CardListItem data={item} />);
};

const CardList = () => {
  return (
    <FlatList
      data={users}
      keyExtractor={(item, index) => item.name}
      renderItem={getItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    border: 2.5,
    borderColor: 'white',
  },
  profile: {
    flexDirection: 'row',
    flex:1,
    backgroundColor: '#1273DE',
  },
  img: {
    width: 100,
    height: 100,
    margin: 5,
  },
  info: {
    flexDirection: 'column',
    flex: 1,
    height: 100,
  },
  name: {
    fontSize: 16,
    color: 'white',
    padding: 10,
  },
  cardBorder: {
    height: 1,
    backgroundColor: 'white',
  },
});

export default CardList;
