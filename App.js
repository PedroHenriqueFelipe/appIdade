import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default function App() {

  const [ano1, setA1] = useState('');
  const [ano2, setA2] = useState('');
 
  function subtracao(){
    const an1= parseFloat(ano1);
    const an2= parseFloat(ano2);
    const total=an2-an1;
    alert('Sua idade é '+total);
  }
  
  
  return (
    <View style={styles.container}>
          <Text style={styles.titulo}>A plicativo de calculo de idade</Text>
          
          <TextInput
          style={styles.campo}
          value={ano1}
          onChangeText={ setA1}
          placeholder="Digite o ano de nascimento"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.campo}
          value={ano2}
          onChangeText={setA2}
          placeholder="Digite o ano atual"
          keyboardType="numeric"
        />
    
        <TouchableOpacity style={styles.botao} onPress={subtracao}>
          <Text style={styles.textoBotao}>Idade</Text>
        </TouchableOpacity>
     </View>
     );
}
const styles = StyleSheet.create({
  container: {
    flex: 1},
    
    titulo:{
      textAlign: 'center',
      marginTop: 60,
      fontSize: 30,
    },
      
        campo:{
         backgroundColor: '#5F9EA0',
         borderRadius: 10,
         margin: 15,
         padding: 10,
         color: '#FFF',
         fontSize: 23,
        },

        botao:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#66CDAA',
    padding: 10,    
  },
  textoBotao:{
    color: '#FFF',
    fontSize: 25,
  }
});
