import React, {useState} from "react";
import { Box, Container } from "./style";
import { TextInput, Text, Button } from "react-native";
import * as Speech from 'expo-speech';

export default function Home() {
 const [ text, setText] = useState('Mundo bate novo recorde diário com 3,79 milhões de casos de Covid')

 function speak(){
     Speech.speak(text,{
         language: 'pt-BR'
     })
 }

  return (
    <Container>
      <Box>
          <TextInput 
          onChangeText={e => setText (e)}
          placeholder=" Digite algo..."></TextInput>
        <Button 
        title="Falar"
        onPress={speak}
        > 
        </Button>
      </Box>
    </Container>
  );
}
