import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions
} from "react-native";
import { Transition } from "react-navigation-fluid-transitions";

// import { Container } from './styles';

export default function Screen6({ navigation }) {
  function myCustomTransitionFunction({ transitionInfo }) {
    const { progress, start, end } = transitionInfo;
    const scaleInterpolation = progress.interpolate({
      inputRange: [0, start, end, 1],
      outputRange: [88, 80, 1, 1]
    });
    return { transform: [{ scale: scaleInterpolation }] };
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.goBack()}
    >
      <Text>Screen6</Text>
      <Transition appear={myCustomTransitionFunction} shared="paper">
        <View style={styles.paper} />
      </Transition>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#CCC",
    justifyContent: "center",
    alignItems: "center"
  },

  paper: {
    backgroundColor: "#7159c1",
    width: 200,
    height: 200
  }
});
