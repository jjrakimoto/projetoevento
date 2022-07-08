import React, {useState,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import Api from '../pages/Api';


export default function Motos(){
const[nomeMoto,setNomeMoto] = useState([]);

async function getMoto(){
  try{
    const resultado = await Api.get(`/selecmoto`);
    return resultado.data
  }catch(error){
    console.log(error)
    return []
  }
}

useEffect(() => {
  Api.get(`/`).then(response => {
    setNomeMoto(response.data);
  });
},[]);

return (
  <View style={estilo.container}>

    <Text style={estilo.titulo}>Lista de Motos</Text>

    <FlatList
      data={dadosMotos}
      keyExtractor={dadosMotos => dadosMotos.id}
      renderItem={({ item }) =>
        <TouchableOpacity>
          <View style={estilo.grupoMotos}>

            <Text style={estilo.textoBotaMoto}>{item.moto}</Text>
            <Text style={estilo.textoBotaoValor}>{item.valor}</Text>

          </View>
        </TouchableOpacity>

      }
    />

    <StatusBar style="auto" />
  </View>
);
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9c46a',
  },
  titulo: {
    fontSize: 30,
    color: "#2a9d8f",
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  grupoMotos: {
    backgroundColor: '#2a9d8f',
    margin: 15,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotaoMoto: {
    fontSize: 20
  },
  textoBotaoValor: {
    fontSize: 20
  }
});