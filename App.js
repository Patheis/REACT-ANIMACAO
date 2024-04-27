
import React, { Component } from 'react';
import { Text, Animated, StyleSheet, View, TouchableOpacity } from 'react-native';

import Fatec from './components/fatec';

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      largura: new Animated.Value(150),
      altura: new Animated.Value(50),
      opacidade: new Animated.Value(0),
    }
    this.gerar = this.gerar.bind(this);

  }




  gerar() {
    Animated.sequence([
      Animated.timing(
        this.state.opacidade, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }
      ),
      Animated.timing(
        this.state.altura, {
        toValue: 600,
        duration: 500,
        useNativeDriver: false,
      }
      )
    ]).start();
  }

  descer(){
    Animated.sequence([
      Animated.timing(
        this.state.opacidade, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }
      ),
      Animated.timing(
        this.state.altura, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }
      )
    ]).start();

  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/*Trata o header*/}
        <View style={{
          height: 80,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: "#006400",
        }} >
          
          <TouchableOpacity onPress={this.gerar}>
            <Text style={{ fontSize: 25, color: '#ffff' }}>
              Subir
            </Text>
          </TouchableOpacity>
          
          

        </View>
        {/*Na linha abaixo trata de uma view com animação*/}
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Fatec />
          <Animated.View style={{
            justifyContent: "center",
            width: this.state.largura,
            height: this.state.altura,
            margin: 'auto',
            padding: 'auto', backgroundColor: "yellow",
            opacity: this.state.opacidade,
          }}>

            

          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },


});