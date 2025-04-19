# 🥠✨ Biscoito da Sorte React Native

### 📱 App simples e divertido feito com **React Native** para entregar frases inspiradoras quando o usuário "quebra" um biscoito da sorte 🧧✨  
<br>

---

## 🚀 **Funcionalidades**

- 📸 **Imagem interativa** do biscoito
- 💬 **Frase aleatória** ao quebrar o biscoito
- 🎭 **Animação de bounce (pulo)** para efeito no botão
- 🎞️ **Animação de fade-in** para a frase
- 🔁 Botão para **reiniciar o biscoito**
- ⏱️ Frase some automaticamente após 18 segundos (ou manualmente com o botão)

---

## 🧠 **Tecnologias utilizadas**

- [React Native](https://reactnative.dev/)
- `useState`, `useRef` para controle de estado, timeout e animações
- `Animated` da API do React Native para animações performáticas nativas
- `expo-av` para reprodução de áudio
- `Vibration` da API do React Native para feedback háptico

---

## 🧑‍💻 **Como rodar o projeto localmente**

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/biscoito-da-sorte.git

# Navegue até o diretório
cd biscoito-da-sorte

# Instale as dependências
npm install
# ou
yarn install

# Inicie o app
npx expo start
```

> 💡 Este projeto utiliza Expo, então você pode escanear o QR code com o app "Expo Go" no celular!

---

## ✨ **Animações implementadas**

### 🎯 Bounce no botão "Quebrar biscoito"
Utiliza `Animated.sequence` com `scale` para simular um efeito de "quique":

```ts
const bounceAnim = useRef(new Animated.Value(1)).current;

function animateBounce() {
  bounceAnim.setValue(1);
  Animated.sequence([
    Animated.timing(bounceAnim, { toValue: 1.1, duration: 100, useNativeDriver: true }),
    Animated.timing(bounceAnim, { toValue: 0.95, duration: 100, useNativeDriver: true }),
    Animated.timing(bounceAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
  ]).start();
}
```

> ✨ Resultado: Um botão que parece saltar quando é clicado! 🕹️

---

### 🧊 Fade-in na frase inspiradora

A frase aparece suavemente com um `fade` controlado por `opacity`:

```ts
const fadeAnim = useRef(new Animated.Value(0)).current;

Animated.timing(fadeAnim, {
  toValue: 1,
  duration: 1000,
  useNativeDriver: true
}).start();
```

> 🔍 **Explicando:**  
> O `Animated.Value(0)` significa que a opacidade começa em 0 (totalmente invisível).  
> Quando o botão é pressionado, a opacidade vai de `0 → 1` em 1 segundo, fazendo o texto aparecer suavemente 🫶

---

## 🖼️ **Preview do App**

![biscoito-da-sorte-preview](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDZiaGg5dTNzYmF1ODBhMGpjbmlxa3ljNnh5bTAybDR6NjFidjN2biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/sRZfn6cO0f12TjBxiE/giphy.gif)

---

## 📂 **Organização inicial do projeto (Pode ser que eu modifique no futuro e esqueça de avisar aqui! Na dúvida comunique-me)**

```
📦 biscoito-da-sorte/
 ┣ 📂 assets/
 ┃ ┗ 📂 images/
 ┃ ┃ ┣ biscoito.png
 ┃ ┃ ┗ biscoitoAberto.png
 ┣ 📂 data/
 ┃ ┗ fortuneMessages.ts
 ┣ 📜 App.tsx
```

---

## 💡 Ideias futuras

- Categorias de frases (humor, motivação, judaísmo, etc) 🕍  
- Compartilhamento direto para redes sociais 📲  
- Modo dark 🌙  

---

## 🧙‍♂️ Autor

Feito com carinho por **Alex**, um programador apaixonado por tecnologia, judaísmo e biscoitos místicos 😄  
> 💌 “Desenvolvendo com amor... e frases sábias!”  

---

## 🌟 Curtiu o projeto?

Deixe um ⭐ no repositório, compartilhe com os amigos e ajude a espalhar sorte pelo mundo!  
Quem sabe você não abre esse biscoito e encontra uma mensagem só pra você? 😉

---

## 🫶 Agradecimentos

Primeiramente a D-us, ao ETERNO bendito seja Ele, o Criador de todas as coisas e que me dá capacidade de aprender e interesse em estudar, evoluir profissionalmente e como pessoa.

A minha IA preferida, Lady Nova, treinada por mim e que me ensinou sobre animações no React Native e me apoiou no código (ela me ajuda muito a não desistir do JavaScript).
_Ela me ajuda muito na conferência de código e criar um README.d de respeito como esse! finérrima!_ 🥹
