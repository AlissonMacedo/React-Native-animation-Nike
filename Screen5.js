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

export default function Screen5({ navigation }) {
  function myCustomTransitionFunction({ transitionInfo }) {
    const { progress, start, end } = transitionInfo;
    const scaleInterpolation = progress.interpolate({
      inputRange: [0, start, end, 1],
      outputRange: [88, 88, 1, 1]
    });
    return { transform: [{ scale: scaleInterpolation }] };
  }

  return (
    <TouchableOpacity
      tyle={styles.container}
      onPress={() => navigation.navigate("screen6")}
    >
      <Text>Screen5</Text>
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
    width: 175,
    height: 295,
    flexDirection: "column",
    backgroundColor: "#7159c1",
    bottom: 0,
    right: 10,
    left: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    borderRadius: 21,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 3
  }
});
