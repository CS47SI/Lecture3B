/*
*
* React Native Demo app for Lecture 3B.
* Debugging and Third Party Components
*
* CS47SI
* Jan, 2017
*/

import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Metrics, Colors } from '../Themes'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default class IconsComponent extends React.Component {

  static propTypes = {
      onClick: PropTypes.func
  };

  _onPressButton = (name) => {
    if (this.props.onClick) {
      this.props.onClick(name);
    }
  }

  render() {

    return (
        <View style={styles.iconsContainer}>

          <TouchableOpacity onPress={() => {this._onPressButton("camera")}}>
            <FontAwesome style={styles.icon}
              name="camera"
              size={Metrics.icons.medium}
              color={Colors.steel} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {this._onPressButton("text-width")}}>
            <FontAwesome style={styles.icon}
              name="text-width"
              size={Metrics.icons.medium}
              color={Colors.steel} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {this._onPressButton("hand-spock-o")}}>
            <FontAwesome style={styles.icon}
              name="hand-spock-o"
              size={Metrics.icons.medium}
              color={Colors.steel} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {this._onPressButton("cookie")}}>
            <MaterialCommunityIcons style={styles.icon}
              name="cookie"
              size={Metrics.icons.medium}
              color={Colors.steel} />
          </TouchableOpacity>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  icon: {
    padding: Metrics.marginHorizontal,
    marginTop: Metrics.marginVertical
  }
});
