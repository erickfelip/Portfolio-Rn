import styled from "styled-components";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Platform, Animated } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.default};
  align-items: center;
  justify-content: center;
`;

export const Header = styled(Animated.View)`
  align-items: center;
  justify-content: center;
  padding-top: ${Platform.OS === "android" ? 60 : 100}px;
  background-color: ${({ theme }) => theme.colors.default};
  height: ${RFValue(300)}px;
  width: 100%;
`;

export const Photo = styled(Animated.Image)`
  margin-bottom: ${RFValue(40)}px;
  width: ${RFValue(100)}px;
  height: ${RFValue(120)}px;
  border-radius: ${RFValue(90)}px;
`;

export const Bio = styled.View`
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: ${RFValue(300)}px;
  height: ${RFValue(180)}px;
  margin-top: ${RFValue(20)}px;
  margin-bottom: ${RFValue(15)}px;
  border-radius: ${RFValue(20)}px;
`;

export const Skills = styled.View`
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: ${RFValue(300)}px;
  height: ${RFValue(180)}px;
  margin-top: ${RFValue(20)}px;
  margin-bottom: ${RFValue(15)}px;
  border-radius: ${RFValue(15)}px;
`;

export const Projects = styled.View`
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: ${RFValue(300)}px;
  height: ${RFValue(180)}px;
  margin-top: ${RFValue(20)}px;
  margin-bottom: ${RFValue(15)}px;
  border-radius: ${RFValue(15)}px;
`;

export const Cards = styled.View`
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: ${RFValue(300)}px;
  height: ${RFValue(180)}px;
  margin-top: ${RFValue(20)}px;
  margin-bottom: ${RFValue(15)}px;
  border-radius: ${RFValue(15)}px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${RFValue(18)}px;
`;

export const TextProjects = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px
`;