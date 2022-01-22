import styled from "styled-components";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Platform, Animated } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #1C1C1C;
  align-items: center;
  justify-content: center;
`;

export const Header = styled(Animated.View)`
  align-items: center;
  justify-content: center;
  padding-top: ${Platform.OS === "android" ? 60 : 120}px;
  background-color: #1C1C1C;
  height: ${RFPercentage(300)}px;
  width: 100%;
`;

export const Photo = styled(Animated.Image)`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  border-radius: 90px;
`;

export const Cards = styled.View`
  align-items:center;
  justify-content: center;
  flex-direction: row;
  background-color: white;
  margin-top: ${RFValue(40)}px;
  width: ${RFValue(300)}px;
  height: ${RFValue(200)}px;
  border-radius: 20px;
`;

export const Link = styled.View`
  width: ${RFValue(400)}px;
  height: ${RFValue(50)}px;
  background-color: green;
`;

export const Text = styled.Text`
font-size: 24px;
font-weight: bold;
`