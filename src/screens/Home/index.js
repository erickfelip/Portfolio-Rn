import React, {useState} from "react";
import { SafeAreaView, View, Text, ScrollView, Animated} from "react-native";
import { Header, Container, Photo } from "./style";

export default function App() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0))
  return (
    <Container>
      <Header
      style={{height: scrollY.interpolate({
        inputRange:[10, 160, 185],
        outputRange:[140, 30, 0],
        extrapolate: 'clamp'
      }),
        opacity: scrollY.interpolate({
          inputRange: [1, 75, 170],
          outputRange: [1, 1, 0],
          extrapolate: 'clamp'
        })
      }}
      >
        <Photo
          style={{
            width: scrollY.interpolate({
              inputRange: [0, 120],
              outputRange: [120, 120],
              extrapolate: 'clamp'
            }),
          }}
          source={{
            uri: "https://avatars.githubusercontent.com/u/68874188?v=4",
          }}
          />
      </Header>
      <ScrollView
      scrollEventThrottle={16}
      onScroll={Animated.event([{
        nativeEvent: {
          contentOffset: { y: scrollY}
        },
      }],
      { useNativeDriver: false })}
      >
          <Text
          style={{fontSize: 200}}
          >
          👋 Hi, I’m @erickfelip

          👨‍💻 I’m currently learning javascript + react/react native.

          🤝 I’m looking to collaborate on front-end area.
          </Text> 
            <Text>
          👋 Hi, I’m @erickfelip

          👨‍💻 I’m currently learning javascript + react/react native.

          🤝 I’m looking to collaborate on front-end area.
          </Text>
          </ScrollView>
    </Container>

  );
}
