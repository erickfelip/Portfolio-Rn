import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.default};
  align-items: center;
  justify-content: center;
`;
export const CardPokelist = styled.View`
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: ${RFValue(320)}px;
  height: ${RFValue(300)}px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const TextCards = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 20px;
`;
