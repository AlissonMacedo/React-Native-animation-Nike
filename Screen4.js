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

class Screen4 extends React.Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.container}
        onPress={() => this.props.navigation.navigate("Screen3")}
      >
        <Transition shared="paper2">
          <View style={styles.paper} />
        </Transition>

        <Transition shared="shoe2">
          <Image
            style={styles.shoe2}
            source={require("./assets/air-jordan-1.png")}
          />
        </Transition>
        <Transition appear="horizontal">
          <View style={styles.headerContainer}>
            <Text style={styles.header}>THE TEN</Text>
            <Text style={styles.subheader}>AIR JORDAN I</Text>
          </View>
        </Transition>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  headerContainer: {
    padding: 20,
    paddingTop: Dimensions.get("window").height * 0.5
  },
  header: {
    color: "#999",
    fontSize: 80,
    marginBottom: -14
  },
  subheader: {
    color: "#999",
    fontSize: 34,
    paddingTop: 10
  },
  paper: {
    backgroundColor: "#7159c1",
    position: "absolute",
    left: Dimensions.get("window").width * 0.25,
    top: Dimensions.get("window").height * 0.0 - 150,
    width: Dimensions.get("window").height * 0.6,
    height: Dimensions.get("window").height * 0.6,
    transform: [{ rotate: "-20deg" }],
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    borderRadius: Dimensions.get("window").height * 0.6
  },
  paper2: {
    width: 175,
    height: 295,
    flexDirection: "column",
    backgroundColor: "#2EB8D1",
    bottom: 0,
    right: 10,
    left: 50,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    borderRadius: 21,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 3
  },
  shoe: {
    width: 350,
    height: 240,
    position: "absolute",
    left: Dimensions.get("window").width * 0.05,
    top: Dimensions.get("window").height * 0.5 - 300,
    transform: [{ rotate: "-30deg" }]
  },
  shoe2: {
    width: 350,
    height: 240,
    position: "absolute",
    left: Dimensions.get("window").width * 0.05,
    top: Dimensions.get("window").height * 0.5 - 300,
    transform: [{ rotate: "-30deg" }]
  }
});

export default Screen4;
