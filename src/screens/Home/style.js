import styled from "styled-components";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Platform, Animated } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: grey;
`;

export const Header = styled(Animated.View)`
 align-items: center;
  justify-content: center;
  padding-top: ${Platform.OS === "android" ? 60 : 120}px;
  background-color: grey;
  width: 100%;
  height: ${RFPercentage(20)}px;
`;

export const Photo = styled(Animated.Image)`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  border-radius: 90px;
`;
