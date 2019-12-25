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

class Screen1 extends React.Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.container}
        onPress={() => this.props.navigation.navigate("screen2")}
      >
        <Transition shared="paper">
          <View style={styles.paper} />
        </Transition>
        <Transition appear="horizontal">
          <View style={styles.headerContainer}>
            <Text style={styles.header}>THE TEN</Text>
            <Text style={styles.subheader}>AIR JORDAN I</Text>
          </View>
        </Transition>
        <Transition shared="shoe">
          <Image
            style={styles.shoe}
            source={require("./assets/air-jordan-1.png")}
          />
        </Transition>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C14534"
  },
  headerContainer: {
    padding: 20,
    paddingTop: Dimensions.get("window").height * 0.1
  },
  header: {
    color: "#FFF",
    fontSize: 80,
    marginBottom: -14
  },
  subheader: {
    color: "#FFF",
    fontSize: 34,
    paddingTop: 10
  },
  paper: {
    backgroundColor: "#7159c1",
    position: "absolute",
    left: 10,
    top: Dimensions.get("window").height * 0.5 - 150,
    width: Dimensions.get("window").width * 0.65,
    height: Dimensions.get("window").height * 0.45,
    transform: [{ rotate: "-20deg" }],
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4
  },
  shoe: {
    width: 350,
    height: 240,
    position: "absolute",
    left: Dimensions.get("window").width * 0.2,
    top: Dimensions.get("window").height * 0.5 - 160,
    transform: [{ rotate: "35deg" }]
  }
});

export default Screen1;
