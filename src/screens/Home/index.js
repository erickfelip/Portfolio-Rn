import React, {useState} from "react";
import { ScrollView, Animated} from "react-native";
import { Header, Container, Photo, Cards, Text} from "./style";
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import {Linking } from 'react-native'

export default function App() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0))
  return (
    <SafeAreaView
    style={{ flex: 1}}>
    <Container>
      <Header
      style={{height: scrollY.interpolate({
        inputRange:[0, 160, 185],
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
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={Animated.event([{
        nativeEvent: {
          contentOffset: { y: scrollY}
        },
      }],
      { useNativeDriver: false })}
      >
        <Cards
        style={{shadowColor: 'white',
        elevation: 8}}
        >
          </Cards>
          <Cards
          style={{shadowColor: 'white',
          elevation: 9}}>
          </Cards>
          <Cards
          style={{shadowColor: 'white',
          elevation: 9}}>
          </Cards>
          <Cards
          style={{shadowColor: 'white',
          elevation: 9}}>
            <Text>Contact Me: 
            </Text>
            <FontAwesome
            onPress = {() => Linking.openURL('https://t.me/Erickfelipe44')}
            name="telegram" size={50} color="black" />
            <AntDesign 
            onPress = {() => Linking.openURL('https://github.com/erickfelip')}
            name="github" size={50} color="black" />
            <AntDesign 
            onPress= {() => Linking.openURL('https://www.linkedin.com/in/erick-felipe-141311215/')}
            name="linkedin-square" size={50} color="black" />
          </Cards>
          </ScrollView>
    </Container>
    </SafeAreaView>

  );
}
