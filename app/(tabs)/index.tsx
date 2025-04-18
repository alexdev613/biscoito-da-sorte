import { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [img, setImg] = useState(require("../../assets/images/biscoito.png"));
  const [textoFrase, setTextoFrase] = useState("Testando a frase do biscoito");

  const fortuneMessages = [
    "Aquele que salva uma vida, salva o mundo inteiro. – Talmud, Sanhedrin 37a",
    "Não seja sábio aos seus próprios olhos. – Provérbios 3:7",
    "Onde não há homens, esforce-se para ser um. – Pirkei Avot 2:5",
    "Mais vale uma boa ação do que mil boas intenções.",
    "O silêncio é uma cerca para a sabedoria. – Pirkei Avot 3:13",
    "O mundo se sustenta sobre três pilares: a Torá, o serviço divino e os atos de bondade. – Pirkei Avot 1:2",
    "Se eu não for por mim, quem será por mim? Mas se eu for apenas por mim, o que sou? – Hillel, Pirkei Avot 1:14",
    "A verdadeira riqueza não está no que você tem, mas no que você compartilha.",
    "Mesmo a menor luz brilha intensamente na escuridão. – Provérbio Chassídico",
    "Seja como o discípulo de Aarão: ame a paz, busque a paz, ame as criaturas e aproxime-as da Torá. – Pirkei Avot 1:12",
    "A inveja, o desejo e a busca por honra tiram o homem deste mundo. – Pirkei Avot 4:21",
    "O mundo inteiro é uma ponte estreita, e o mais importante é não ter medo. – Rabi Nachman de Breslov",
    "A bênção recai sobre aquilo que está escondido dos olhos. – Talmud Bavli",
    "Toda pessoa deve carregar dois papéis no bolso: um que diz ‘Sou pó e cinza’ e outro que diz ‘Por minha causa o mundo foi criado’.",
    "A bondade é a linguagem que os surdos podem ouvir e os cegos podem ver.",
    "Faça do estudo uma prática constante, e das palavras, atos concretos.",
    "Cada alma é uma chama única que ilumina o mundo de forma especial.",
    "חַי Chai – viva com propósito, ame com coragem, sirva com alegria."
  ];

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * fortuneMessages.length);

    setTextoFrase('"' + fortuneMessages[numeroAleatorio] + '"');
    setImg(require("../../assets/images/biscoitoAberto.png"));

    setTimeout(() => {
      reiniciar();
    }, 18000); // 18 segundos
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

      <Text style={styles.textoFrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito }>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: "#121212" } ]} onPress={ reiniciar }>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: "#121212"} ]}>Reiniciar biscoito</Text>
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
