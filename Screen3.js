import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView
} from "react-native";

import Avatar from "./assets/avatar-app.png";
import { Transition } from "react-navigation-fluid-transitions";
import { Ionicons } from "@expo/vector-icons";

class Screen3 extends React.Component {
  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Ionicons name="md-menu" size={32} color="black" />
            <Image
              source={Avatar}
              style={{ width: 30, height: 30, borderRadius: 15 }}
            />
          </View>
          <ScrollView>
            <Text style={styles.TitlePage}>Expore</Text>
            <View style={styles.menuhorizontal}>
              <Text style={styles.fontmenuhorizontalActive}>Nike</Text>
              <Text style={styles.fontmenuhorizontalNoActive}>Adidas</Text>
              <Text style={styles.fontmenuhorizontalNoActive}>Converse</Text>
              <Text style={styles.fontmenuhorizontalNoActive}>Vans</Text>
            </View>

            <ScrollView
              style={{ paddingLeft: 10 }}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              <TouchableOpacity
                style={{ width: 175, height: 295 }}
                activeOpacity={1}
                onPress={() => this.props.navigation.navigate("Screen4")}
              >
                <Transition shared="card">
                  <View style={styles.card}></View>
                </Transition>
                <Text style={styles.titleCard}>01</Text>
                <Transition shared="shoe">
                  <Image
                    style={styles.shoe}
                    source={require("./assets/air-jordan-1.png")}
                  />
                </Transition>
                <Text style={styles.titleCard2}>Nike Air Vapor</Text>
                <Text style={styles.PriceCard}>R$ 350</Text>
                <TouchableOpacity style={styles.buttonadd}>
                  <Text style={{ color: "#7159c1", fontSize: 20 }}>+</Text>
                </TouchableOpacity>
              </TouchableOpacity>
              <View
                style={{
                  widht: 40,
                  height: 100,
                  position: "absolute",
                  backgroundColor: "#7159c1"
                }}
              />
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.props.navigation.navigate("Screen5")}
              >
                <Transition shared="card2">
                  <View style={styles.card2}></View>
                </Transition>
                <Text style={styles.titleCard}>01</Text>
                <Transition shared="shoe2">
                  <Image
                    style={styles.shoe2}
                    source={require("./assets/air-jordan-1.png")}
                  />
                </Transition>
                <Text style={styles.titleCard2}>Nike Air Vapor</Text>
                <Text style={styles.PriceCard}>R$ 350</Text>
                <TouchableOpacity style={styles.buttonadd}>
                  <Text style={{ color: "#7159c1", fontSize: 20 }}>+</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </ScrollView>
            <View style={styles.cardMiddle}>
              <View>
                <Text>Nike Air Vapor</Text>
                <Text>R$ 350</Text>
              </View>
              <Image
                style={styles.shoeCardMiddle}
                source={require("./assets/air-jordan-1.png")}
              />
            </View>
          </ScrollView>
          <View style={styles.bottomMenu}>
            <Ionicons
              name="
              md-home"
              size={32}
              color="black"
            />
            <Ionicons name="md-home" size={32} color="black" />
            <Ionicons name="md-person" size={32} color="black" />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#999",
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    backgroundColor: "#7159c1",
    paddingLeft: 10,
    paddingRight: 10
  },
  TitlePage: {
    color: "#333",
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 30,
    paddingTop: 30
  },
  menuhorizontal: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 20
  },
  fontmenuhorizontalActive: {
    color: "#333",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10
  },
  fontmenuhorizontalNoActive: {
    color: "#ddd",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10
  },
  ScrollView: {
    maxHeight: 300,
    backgroundColor: "#876",
    margin: 10,
    flexGrow: 1
  },
  card: {
    width: Dimensions.get("window").width * 0.05 - 30,
    height: Dimensions.get("window").height - 380,
    backgroundColor: "#7159c1",
    borderRadius: 20,
    marginLeft: 0,
    textAlign: "left",
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    justifyContent: "flex-start",
    paddingTop: 0,
    paddingLeft: 10
  },
  shoe: {
    width: 185,
    height: 125,
    marginTop: 10,
    marginLeft: -12,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 1
  },
  paper2: {
    width: 175,
    height: 295,
    flexDirection: "column",
    backgroundColor: "#2EB8D1",
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
  },
  titleCard: {
    color: "#FFF",
    fontSize: 40,
    textAlign: "left",
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10
  },
  titleCard2: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 10,
    marginTop: 10
  },
  PriceCard: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 10
  },
  buttonadd: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFF",
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 5,
    borderRadius: 3
  },
  card2: {
    flex: 1,
    width: 150,
    height: 500
  },
  card3: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    width: 150,
    height: 500,
    paddingBottom: 20
  },
  cardMiddle: {
    backgroundColor: "#2345",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    height: 134,
    marginTop: 30
  },
  shoeCardMiddle: {
    width: 200,
    height: 140,
    marginTop: -45,
    marginRight: 20,
    transform: [{ rotate: "-20deg" }]
  },
  bottomMenu: {
    minHeight: 40,
    backgroundColor: "#FFF",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  card2: {
    width: Dimensions.get("window").width * 0.05 - 30,
    height: Dimensions.get("window").height - 380,
    backgroundColor: "#2EB8D1",
    borderRadius: 20,
    textAlign: "left",
    position: "absolute",
    paddingLeft: 30,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    justifyContent: "flex-start"
  },
  shoe2: {
    width: 185,
    height: 125,
    marginTop: 10,
    marginLeft: -12,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 1
  }
});

export default Screen3;
