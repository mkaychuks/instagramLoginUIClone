import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";

import InputField from "../components/InputButton";
import Button from "../components/Button";

const InstagramLogin = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/Instagram_logo.png")}
      />
      <InputField placeholder={"Phone number, email or username"} />
      <InputField placeholder={"Password"} secureTextEntry={true} />
      <Button />
      <View style={styles.subtitle}>
        <Text style={styles.loginHelp}>Forgot your login details?&nbsp;</Text>
        <Text style={styles.getHelp}>Get help logging in</Text>
      </View>
      <View style={styles.options}>
        <View style={styles.spacer}></View>
        <Text style={styles.option}>OR</Text>
        <View style={styles.spacer}></View>
      </View>
      <Pressable style={styles.facebookButton}>
        <Text style={styles.facebook}>Log in with Facebook</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 50,
    resizeMode: "contain",
    margin: 8,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  loginHelp: {
    fontSize: 10,
    fontWeight: "200",
    color: "#808080",
  },
  getHelp: {
    fontSize: 10,
    fontWeight: "600",
  },
  options: {
    flexDirection: "row",
    width: 280,
    margin: 8,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  spacer: {
    backgroundColor: "#808080",
    width: 120,
    height: 1,
  },
  facebook: {
    color: "#4267B2",
    fontWeight: "bold",
    fontSize: 13,
  },
  facebookButton: {
    margin: 10,
  },
});

export default InstagramLogin;
