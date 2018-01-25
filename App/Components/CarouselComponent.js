/*
*
* React Native Demo app for Lecture 3B.
* Debugging and Third Party Components
*
* CS47SI
* Jan, 2017
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Metrics } from '../Themes'

import Carousel from 'react-native-snap-carousel';
import SliderEntry from './SliderEntry'
import { slideHeight, sliderWidth, itemWidth } from './Styles/SliderEntry.style';
import * as Entries from '../Static/Entries'

export default class CarouselComponent extends React.Component {

  _renderItem ({item, index}) {
      return (
          <SliderEntry
            data={item}
            even={(index + 1) % 2 === 0}
          />
      );
  }

  render() {

    return (
      <View style={{ height: slideHeight }}>
        <Carousel
          data={Entries.ENTRIES1}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </View>
    );
  }

}
