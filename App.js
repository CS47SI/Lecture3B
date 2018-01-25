/*
*
* App.js of React Native Demo app for Lecture 3B.
* Debugging and Third Party Components
*
* CS47SI
* Jan, 2017
*/

import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import CarouselComponent from './App/Components/CarouselComponent'

import * as Animatable from 'react-native-animatable';
import IconsComponent from './App/Components/IconsComponent'
import { material } from 'react-native-typography'


export default class App extends React.Component {

  state = {
    buttonValue: "Press a button above!"
  }

  buttonPressed = (name) => {
    console.log(`Button Pressed... ${name}`);
    this.setState({ buttonValue: name });
  }

  render() {

    const { buttonValue } = this.state;

    return (
      <View style={styles.container}>

          <CarouselComponent/>

          <Text style={material.display1}>Regular 34</Text>
          <Text style={material.headline}>Regular 24</Text>
          <Text style={material.title}>Medium 20</Text>
          <Text style={material.subheading}>Regular 16</Text>
          <Text style={material.body2}>Medium 14</Text>
          <Text style={material.body1}>Regular 14</Text>
          <Text style={material.caption}>Regular 12</Text>
          <Text style={material.button}>Medium 14</Text>

          <IconsComponent onClick={this.buttonPressed} />
          <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite">{buttonValue}</Animatable.Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
