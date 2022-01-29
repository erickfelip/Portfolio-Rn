import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { Container, CardsProject, Text, TextCards } from "./style";
import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

export default function Projects({ navigation }) {
  return (
    <Container>
      <ScrollView>
        <CardsProject style={{ shadowColor: "white", elevation: 8 }}>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => navigation.navigate("Imc")}
          >
            <Entypo name="calculator" size={34} color="black" />
            <TextCards> IMC CALCULATOR</TextCards>
          </TouchableOpacity>
        </CardsProject>

        <CardsProject style={{ shadowColor: "white", elevation: 8 }}>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => navigation.navigate("Pokelist")}
          >
            <MaterialCommunityIcons name="pokeball" size={34} color="black" />
            <TextCards> POKELIST</TextCards>
          </TouchableOpacity>
        </CardsProject>

        <CardsProject style={{ shadowColor: "white", elevation: 8 }}>
          <FontAwesome5 name="bitcoin" size={34} color="black" />
          <TextCards> CRYPTOCURRENCY TRACKER</TextCards>
        </CardsProject>

        <CardsProject style={{ shadowColor: "white", elevation: 8 }}>
          <AntDesign name="form" size={24} color="black" />
          <TextCards> FORM</TextCards>
        </CardsProject>

        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="leftcircleo" size={34} color="white" />
        </TouchableOpacity>
        
      </ScrollView>
    </Container>
  );
}
