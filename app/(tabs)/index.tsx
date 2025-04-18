import { useState } from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';

export default function App() {
  const [img, setImg] = useState(require("../../assets/images/biscoito.png"));

  return (
    <View style={styles.container}>
      <Image
        source={img}
        style={styles.img}
      />

      <Text style={styles.textoFrase}>" Olá mundo, Esta é minha primeira frase do biscoito. "</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: 230,
    height: 230
  },
  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30
  }
});
