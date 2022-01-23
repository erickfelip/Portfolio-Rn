import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { Container, CardsProject, Text} from './style'
import { AntDesign } from '@expo/vector-icons'; 

export default function Projects(props) {
  return (
    <Container>
      <ScrollView>
      <CardsProject>
        </CardsProject>
        <CardsProject>
        </CardsProject>
        <CardsProject>
        </CardsProject>
        <CardsProject>
        </CardsProject>
      <TouchableOpacity 
      style={{alignItems:"center"}}
      onPress={() => props.navigation.goBack()}>
      <AntDesign 
      name="leftcircleo" size={34} color="white" />  
      </TouchableOpacity>
        </ScrollView>
    </Container>
  );
}
