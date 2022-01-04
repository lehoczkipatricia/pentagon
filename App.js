/*
* File: App.js
* Author: Lehoczki Patricia
* Copyright: 2021, Lehoczki Patricia
* Group: Szoft II N
* Date: 2022-01-04
-----------------
* Last Modified Date: 2022-01-04
* Last Modified by: Lehoczki Patricia
* Github: https://github.com/lehoczkipatricia/pentagon
* Licenc: MIT
*/

import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';


export default class App extends Component {
  
  state = {
    text: 0,
    input: '',
    side: 0,
    inputValue2: 0,
    calcu: 0
    
  }

  onButtonPressed = function() { this.setState({ text:this.state.side })}
  _handleTextChange = side => { this.setState({ side }); 
  };

  
  calc = function() {
    var y = Math.sqrt(5)
    var x = Math.pow(this.state.side, 2) * Math.sqrt(25+10*y);
    var calcu = x/4;
    this.setState({ text: calcu})}
  

  render() {
    console.log('Ez a program a pentagon területét számolja ki, inputként megadott oldalszámmal. Készítette: Lehoczki Patrícia 2022.01.04.')
    return (
      
      <View style={styles.container}>
        <Text style={styles.title}>Pentagon terület számoló</Text>
        <Text>Írd be az oldalt:</Text>
        <TextInput

          value={this.state.side}
          keyboardType = 'numeric'
          onChangeText={this._handleTextChange}
          style={{ width: 200, height: 44, padding: 8 }}
        />

        <Button title='Kiszámol' onPress={this.calc.bind(this)}/>

        <Text style={styles.paragraph}>
          A pentagon területe: {this.state.text} 
        </Text>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  title: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },

});