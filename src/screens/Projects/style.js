import styled from "styled-components";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.default};
  align-items: center;
  justify-content: center;
`;

export const CardsProject = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: ${RFValue(300)}px;
  height: ${RFValue(80)}px;
  margin-top: ${RFValue(20)}px;
  margin-bottom: ${RFValue(15)}px;
  border-radius: ${RFValue(20)}px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${RFValue(20)}px;
`;

export const TextCards = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: ${RFValue(20)}px;
`;
