import React from "react";
import { TouchableOpacity, Text, Linking } from "react-native";
import { Container, CardImc, TextCards } from "./style";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";

export default function Imc({ navigation }) {
  return (
    <Container>
      <CardImc>
        <TextCards>
          IMC significa Índice de Massa Corporal e é um parâmetro utilizado para
          saber se o peso está de acordo com a altura, o que pode interferir
          diretamente na saúde e qualidade de vida da pessoa.
        </TextCards>
        <TextCards> Repositório</TextCards>
        <AntDesign
          onPress={() =>
            Linking.openURL(
              "https://github.com/erickfelip/calculadora-de-imc-react-native"
            )
          }
          name="github"
          size={50}
          color="black"
        />
      </CardImc>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="leftcircleo" size={34} color="white" />
      </TouchableOpacity>
    </Container>
  );
}
