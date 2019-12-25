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
        <Transition shared="card">
          <View style={styles.card} />
        </Transition>

        <Transition shared="shoe">
          <Image
            style={styles.shoe}
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
  card: {
    backgroundColor: "#7159c1",
    left: Dimensions.get("window").width * 0.25,
    top: Dimensions.get("window").height * 0.0 - 150,
    width: Dimensions.get("window").height * 0.6,
    height: Dimensions.get("window").height * 0.6,
    transform: [{ rotate: "-20deg" }],
    borderRadius: Dimensions.get("window").height * 0.6
  },

  shoe: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").width * 0.5,
    left: Dimensions.get("window").width * 0.05 - 30,
    top: Dimensions.get("window").height * 0.1 - 400,
    transform: [{ rotate: "-30deg" }]
  }
});

export default Screen4;
