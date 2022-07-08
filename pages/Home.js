import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet,ImageBackground} from 'react-native';


export default function Home(){
    return(
        <View style={styles.container}>
      <ImageBackground  style={styles.img} source={require('../assets/telainicial.gif')}>
        </ImageBackground>
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
    img:{
      width:400,
      height: 600
    }
  });