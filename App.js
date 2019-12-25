import React, { Component } from "react";
import * as Font from "expo-font";
import { Animated, Easing } from "react-native";
import { FluidNavigator } from "react-navigation-fluid-transitions";

import Screen4 from "./Screen4";
import Screen3 from "./Screen3";

import Screen5 from "./Screen5";
import Screen6 from "./Screen6";

const transitionConfig = {
  duration: 800,
  timing: Animated.timing,
  easing: Easing.easing
};

const Navigator = FluidNavigator({ Screen3, Screen4 }, { transitionConfig });

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { fontLoaded: false };
  }

  render() {
    return <Navigator />;
  }
}
