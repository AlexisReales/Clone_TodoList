import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { styles } from './styles'

export default function Header() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../../../assets/Logo.png')} />
      </View>
    );
  }