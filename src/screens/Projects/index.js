import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Projects(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Projetos</Text>

      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text style={styles.link}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 64,
    color: "#fff",
    margin: 24
  },
  link: {
    fontSize: 36,
    color: "#fff",
    textDecorationLine: "underline"
  }
});
