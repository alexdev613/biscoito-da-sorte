import { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { fortuneMessages } from '../../data/fortuneMessages';

export default function App() {
  const [img, setImg] = useState(require("../../assets/images/biscoito.png"));
  const [textoFrase, setTextoFrase] = useState("Testando a frase do biscoito");

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const bounceAnim = useRef(new Animated.Value(1)).current;

  function animateBounce() {
    bounceAnim.setValue(1);
    Animated.sequence([
      Animated.timing(bounceAnim, {
        toValue: 1.1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(bounceAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(bounceAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }

  function quebraBiscoito() {
    animateBounce();

    let numeroAleatorio = Math.floor(Math.random() * fortuneMessages.length);

    setTextoFrase('"' + fortuneMessages[numeroAleatorio] + '"');
    setImg(require("../../assets/images/biscoitoAberto.png"));

    fadeAnim.setValue(0);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      reiniciar();
    }, 18000);

  }

  function reiniciar() {
    setImg(require("../../assets/images/biscoito.png"));
    setTextoFrase("");
  }

  return (
    <View style={styles.container}>
      <Image
        source={img}
        style={styles.img}
      />

      <Animated.Text style={[styles.textoFrase, { opacity: fadeAnim }]}>{textoFrase}</Animated.Text>

      <Animated.View style={{ transform: [{ scale: bounceAnim }] }}>
        <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>

      <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: "#121212" }]} onPress={reiniciar}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: "#121212" }]}>Reiniciar biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
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
    margin: 30,
    fontStyle: "italic",
    textAlign: "center"
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: "#dd7b22",
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#dd7b22"
  }
});
