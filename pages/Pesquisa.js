import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Alert} from 'react-native';


export default function Pesquisa(){
  function pesquisarMoto(){
    Alert.alert('Atenção','O evento está sendo atualizado aguarde um momento. Obrigado!.')
  }
  
   return(
      <View style={estilo.container}>
       <Text style={estilo.titulo}>Qual Moto Você tem interesse?</Text>
        <TextInput 
        placeholder='Digite uma Moto.'
        style={estilo.textInput}
        />
        
        <TouchableOpacity style={estilo.botao} onPress={()=> pesquisarMoto()}>
            <Text style={estilo.textoBotao} >Pesquisar</Text>
        </TouchableOpacity>
  
        <StatusBar style="auto" />
      </View>
   );   
  }
  
  const estilo = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#e9c46a',
        alignItems: 'center',
        justifyContent: 'center',
      },
      textInput:{
        borderColor:'#e76f51',
        fontSize:20,
        width:'80%',
        height:30,
        borderWidth:2,
        borderRadius:8,
        marginTop:30,
        paddingHorizontal:10
      },
      botao:{
        backgroundColor:"#f4a261",
        marginTop:15,
        padding:10,
        borderRadius:15,
        width:'80%',
        justifyContent:'center',
        alignItems:'center'
      },
      textoBotao:{
        fontSize: 18,
        fontWeight: '700',
        color:'#2a9d8f'
      },
      titulo:{
        fontSize:30,
        color:"#2a9d8f"
      }
    });