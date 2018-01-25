import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Unsplash, { toJson } from 'unsplash-js/native';
import AppConfig from './App/Config/AppConfig'
import { material } from 'react-native-typography'

import CarouselComponent from './App/Components/CarouselComponent'

const unsplash = new Unsplash({
  applicationId: AppConfig.appId,
  secret: AppConfig.secretKey,
  callbackUrl: AppConfig.callbackUrl,
  bearerToken: '18e21651ed762f1abed497b5a8b4b3f5704a7c6e55d63bc423b48e5153c9eaa7'
});

export default class App extends React.Component {

  state =  {
    entries: [{title:'Hello!'},{title:'World!'}]
  }

  componentDidMount() {

    //this.getPhotos();
  }

  getPhotos = () => {
    unsplash.users.photos("vorosbenisop", 1, 10, "popular", false)
    .then(toJson)
    .then(json => {

      console.log(json);
    });
  }

  render() {

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
