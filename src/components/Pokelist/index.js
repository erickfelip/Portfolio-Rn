import React from "react";
import { TouchableOpacity, Linking } from "react-native";
import { Container, CardPokelist, TextCards } from "./style";
import { AntDesign } from "@expo/vector-icons";

export default function Pokelist({ navigation }) {
  return (
    <Container>
      <CardPokelist>
        <TextCards>
          O Desafio consiste em, consumir os dados da API https://pokeapi.co/
          para coletar os 151 primeiros pokemons.
        </TextCards>
        <TextCards> Repositório</TextCards>
        <AntDesign
          onPress={() =>
            Linking.openURL(
              "https://github.com/erickfelip/Pokelist-CDADistribuidora"
            )
          }
          name="github"
          size={50}
          color="black"
        />
      </CardPokelist>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="leftcircleo" size={34} color="white" />
      </TouchableOpacity>
    </Container>
  );
}
