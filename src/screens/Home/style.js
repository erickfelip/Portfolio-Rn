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
  height: ${RFPercentage(300)}px;
  border-radius: 10px;
  width: 100%;
`;

export const Photo = styled(Animated.Image)`
  margin-bottom: ${RFValue(40)}px;
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  border-radius: 90px;
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
  border-radius: 20px;
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
  border-radius: 20px;
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
  border-radius: 20px;
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
  border-radius: 20px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 20px;
`;

export const TextProjects = styled.Text`
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 26px;
`;