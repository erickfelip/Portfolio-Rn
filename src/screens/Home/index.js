import React, { useState, useRef } from "react";
import { ScrollView, Animated, TouchableOpacity } from "react-native";
import {
  Header,
  Container,
  Photo,
  Cards,
  Text,
  Skills,
  Bio,
  Projects,
  TextProjects
} from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";
import { Linking } from "react-native";

export default function Home({ navigation }) {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header
          style={{
            height: scrollY.interpolate({
              inputRange: [0, 160, 185],
              outputRange: [140, 30, 0],
              extrapolate: "clamp",
            }),
            opacity: scrollY.interpolate({
              inputRange: [1, 75, 170],
              outputRange: [1, 1, 0],
              extrapolate: "clamp",
            }),
          }}
        >
          <Photo
            style={{
              width: scrollY.interpolate({
                inputRange: [0, 120],
                outputRange: [120, 120],
                extrapolate: "clamp",
              }),
            }}
            source={{
              uri: "https://avatars.githubusercontent.com/u/68874188?v=4",
            }}
          />
        </Header>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { y: scrollY },
                },
              },
            ],
            { useNativeDriver: false }
          )}
        >
          <Bio style={{ shadowColor: "white", elevation: 8 }}>
            <AntDesign
              style={{ alignContent: "center", justifyContent: "center" }}
              name="user"
              size={20}
              color="black"
            />
            <Text>
              Olá, meu nome é Erick Felipe, tenho 21 anos, sou graduando em
              ciências e tecnologia e desenvolvedor front-end, atualmente
              desenvolvo aplicações web e mobile com react e react native.
            </Text>
          </Bio>
          <Skills style={{ shadowColor: "white", elevation: 9 }}>
            <Text>Skills</Text>
            <AntDesign name="HTML" size={30} color="black" />
            <FontAwesome name="css3" size={30} color="black" />
            <Ionicons name="logo-javascript" size={30} color="black" />
            <FontAwesome5 name="react" size={30} color="black" />
            <FontAwesome name="git" size={30} color="black" />
          </Skills>

          <Projects style={{ shadowColor: "white", elevation: 9 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Projects")}>
              <TextProjects>Projetos</TextProjects>
            </TouchableOpacity>
          </Projects>

          <Cards style={{ shadowColor: "white", elevation: 9 }}>
            <Text>Contato</Text>
            <FontAwesome
              onPress={() => Linking.openURL("https://t.me/Erickfelipe44")}
              name="telegram"
              size={50}
              color="black"
            />
            <AntDesign
              onPress={() => Linking.openURL("https://github.com/erickfelip")}
              name="github"
              size={50}
              color="black"
            />
            <AntDesign
              onPress={() =>
                Linking.openURL(
                  "https://www.linkedin.com/in/erick-felipe-141311215/"
                )
              }
              name="linkedin-square"
              size={50}
              color="black"
            />
          </Cards>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}
