import { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Vibration
} from 'react-native';
import { fortuneMessages } from '../../data/fortuneMessages';
import { Audio } from "expo-av";

export default function App() {
  const [img, setImg] = useState(require("../../assets/images/biscoito.png"));
  const [textoFrase, setTextoFrase] = useState("");

  const [podeQuebrar, setPodeQuebrar] = useState(true);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const bounceAnim = useRef(new Animated.Value(1)).current;

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  async function playSound() {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/sounds/quebra-biscoito.mp3"),
        { shouldPlay: true }
      );
      // descarrega o som depois que tocar para liberar memória
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          sound.unloadAsync();
        }
      });
    } catch (error) {
      console.error("Erro ao tocar som:", error);
    }
  }

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
    if (!podeQuebrar) return; // impede que continue se já está em processo
    setPodeQuebrar(false);    // bloqueia múltiplos toques

    playSound();
    animateBounce();
    Vibration.vibrate()

    let numeroAleatorio = Math.floor(Math.random() * fortuneMessages.length);

    setTextoFrase('"' + fortuneMessages[numeroAleatorio] + '"');
    setImg(require("../../assets/images/biscoitoAberto.png"));

    fadeAnim.setValue(0);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    // Cancela timeout anterior, se existir
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Cria novo timeout e guarda referência
    timeoutRef.current = setTimeout(() => {
      reiniciar();
    }, 18000);

  }

  function reiniciar() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Cancela ao reiniciar manualmente também
    }

    setImg(require("../../assets/images/biscoito.png"));
    setTextoFrase("");
    setPodeQuebrar(true);
  }

  return (
    <View style={styles.container}>
      <Image
        source={img}
        style={styles.img}
      />

      <Animated.Text style={[styles.textoFrase, { opacity: fadeAnim }]}>{textoFrase}</Animated.Text>

      <Animated.View style={{ transform: [{ scale: bounceAnim }] }}>
        <TouchableOpacity
          style={styles.botao}
          onPress={quebraBiscoito}
          disabled={!podeQuebrar}
        >
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>

      <TouchableOpacity style={[styles.botao, { marginTop: 15 }]} onPress={reiniciar}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Reiniciar biscoito</Text>
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
