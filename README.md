# InfnetFood 🍔

App de pedidos e delivery desenvolvido em React Native com Expo. Projeto final do curso de Desenvolvimento Mobile com React Native no Instituto Infnet.

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [Expo CLI](https://docs.expo.dev/get-started/installation/) instalado
- Aplicativo **Expo Go** instalado no celular

---

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/gustavomoliveira/InfnetFood.git
cd InfnetFood
npm install
```

---

## Como executar

```bash
npx expo start --tunnel
```

Escaneie o QR Code exibido no terminal com o aplicativo Expo Go.

> O parâmetro `--tunnel` é necessário caso o celular e o computador não estejam na mesma rede local.

---

## Acesso ao app

O app usa autenticação mockada. Use as credenciais abaixo para fazer login:

- **E-mail:** teste@email.com
- **Senha:** 123456

---

## Funcionalidades

### Autenticação
- Tela de login com validação de campos
- Animação Lottie de boas-vindas ao carregar a tela
- Fade in animado nos elementos da tela
- Divisão entre área pública (login) e área logada (app completo)

<img width="660" height="1434" alt="IMG_0711" src="https://github.com/user-attachments/assets/6e395da8-3302-4203-b39f-7c006e382e09" />

### Home — Categorias
- Listagem de categorias de refeições com imagens carregadas via API externa (TheMealDB)
- Categorias sem imagem disponível exibem imagem de fallback

<img width="660" height="1434" alt="IMG_0695" src="https://github.com/user-attachments/assets/befdc98e-2e6f-4cfc-a071-87ed5457e793" />

### Produtos
- Listagem de produtos filtrados por categoria selecionada
- Imagens carregadas via API externa com fallback

<img width="660" height="1434" alt="IMG_0696" src="https://github.com/user-attachments/assets/89b34e57-2049-472d-9d20-3914de0db094" />

### Detalhes do Produto
- Informações completas do produto
- Seleção de quantidade
- Adição ao carrinho com feedback visual temporário de confirmação

<img width="660" height="1434" alt="IMG_0697" src="https://github.com/user-attachments/assets/057c97c6-b48d-4b95-9900-edc5000f6ad1" />

### Carrinho
- Listagem de itens adicionados com controle de quantidade
- Remoção de itens individuais
- Cálculo do total em tempo real
- Validação: não permite finalizar pedido com carrinho vazio

<img width="660" height="1434" alt="IMG_0698" src="https://github.com/user-attachments/assets/be0f294f-d37c-41cc-875e-e2fe3fa49790" />

### Checkout
- Revisão dos dados de entrega do usuário
- Seleção da forma de pagamento
- Validação de campos obrigatórios
- Notificação local ao confirmar o pedido

<img width="660" height="1434" alt="IMG_0699" src="https://github.com/user-attachments/assets/3504bd83-01ea-4186-9458-6fc7e80722f6" />

### Confirmação de Pedido
- Animação Lottie de entregador ao confirmar o pedido
- Efeito de entrada com fade e escala animados

<img width="660" height="1434" alt="IMG_0712" src="https://github.com/user-attachments/assets/dc1b83f2-8932-4b71-b0a5-a2d1917f6f01" />

### Histórico de Pedidos
- Lista de pedidos anteriores (mockados)
- Pedidos finalizados no app são adicionados ao histórico em tempo real
- Status com cores distintas: Entregue (verde), A caminho (azul), Preparando (laranja)

<img width="660" height="1434" alt="IMG_0701" src="https://github.com/user-attachments/assets/8c47d7c6-d7d3-45e0-90ba-4cf27fb03dea" />

### Restaurantes
- Listagem de 10 restaurantes no Centro do Rio de Janeiro
- Abertura da localização diretamente no Google Maps
- Tela de detalhes com informações do restaurante

<img width="660" height="1434" alt="IMG_0702" src="https://github.com/user-attachments/assets/fa8e83a6-30e9-450f-941a-3878daae9b19" />
<img width="660" height="1434" alt="IMG_0703" src="https://github.com/user-attachments/assets/079c3d9c-ae08-4fd9-b74c-0c8b5f2e70a0" />
<img width="660" height="1434" alt="IMG_0704" src="https://github.com/user-attachments/assets/0df719ef-27e9-490e-9faf-e90b72d8e8d9" />

### Perfil
- Informações do usuário logado
- Toggle para alternar entre tema claro e escuro

<img width="660" height="1434" alt="IMG_0705" src="https://github.com/user-attachments/assets/2164ec3a-27b6-4abb-92a9-ef3f04adc42d" />

---

## Tema

O app suporta tema claro e escuro, alternado diretamente na tela de Perfil. A preferência é aplicada em todas as telas em tempo real.


https://github.com/user-attachments/assets/bd78ae9b-4858-49e0-9f49-a23d540c4260


---

## API Externa

O app consome a [TheMealDB API](https://www.themealdb.com/) para buscar imagens dos pratos e categorias. A API é gratuita e não requer autenticação.

---

## Dependências principais

| Biblioteca | Uso |
|---|---|
| `@react-navigation/native` | Navegação entre telas |
| `@react-navigation/native-stack` | Navegação em pilha |
| `@react-navigation/bottom-tabs` | Navegação por abas |
| `@expo/vector-icons` | Ícones nas abas de navegação |
| `@react-native-picker/picker` | Seleção de forma de pagamento |
| `expo-notifications` | Notificações locais |
| `lottie-react-native` | Animações Lottie na tela de login e confirmação de pedido |
| `react-native-webview` | Suporte a WebView |

---

## Estrutura de pastas

```
InfnetFood/
├── App.js
├── index.js
├── constants/
│   └── theme.js
├── contexts/
│   ├── UserContext.jsx
│   ├── CarrinhoContext.jsx
│   ├── ImagensContext.jsx
│   ├── PedidosContext.jsx
│   └── ThemeContext.js
├── data/
│   ├── usuario.js
│   ├── categorias.js
│   ├── produtos.js
│   ├── restaurantes.js
│   ├── pedidos.js
│   └── pagamentos.js
├── hooks/
│   ├── useFetch.js
│   └── UseFetchMultiplo.jsx
├── components/
│   └── Card.jsx
├── navigation/
│   ├── _index.js
│   ├── TabNavigator.jsx
│   ├── HomeStackNavigator.jsx
│   ├── RestaurantesStackNavigator.jsx
│   └── CarrinhoStackNavigator.jsx
└── screens/
    ├── _index.js
    ├── LoginScreen.jsx
    ├── HomeScreen.jsx
    ├── ProdutosScreen.jsx
    ├── DetalhesProdutoScreen.jsx
    ├── CarrinhoScreen.jsx
    ├── CheckoutScreen.jsx
    ├── SucessoScreen.jsx
    ├── PerfilScreen.jsx
    ├── PedidosScreen.jsx
    ├── RestaurantesScreen.jsx
    └── DetalhesRestauranteScreen.jsx
```

---

## Prints da aplicação

As telas abaixo refletem o fluxo inicial de desenvolvimento de funcionalidades do app sem aplicação de estilização. Algumas funcionalidades foram incrementadas a medida que a aplicação foi crescendo em escopo.

## Tela de Login

<img width="2346" height="2448" alt="CleanShot 2026-03-30 at 17 17 19@2x" src="https://github.com/user-attachments/assets/7263cf2b-7d3e-4d3e-ba7e-91dd8f2300fe" />
<img width="1674" height="778" alt="CleanShot 2026-03-30 at 17 14 39@2x" src="https://github.com/user-attachments/assets/84f10d29-d4d5-4876-af2a-42236906fd64" />

## Tela de Home

<img width="1350" height="1128" alt="CleanShot 2026-03-30 at 17 29 22@2x" src="https://github.com/user-attachments/assets/56b6dedd-e8aa-43f2-8dea-ae0a68b44a8a" />
<img width="2078" height="874" alt="CleanShot 2026-03-30 at 17 28 58@2x" src="https://github.com/user-attachments/assets/15fddac1-8eda-4b87-a037-57d44f3f06fa" />

## Tela de Produtos, Detalhes e Carrinho

<img width="2624" height="1034" alt="CleanShot 2026-04-01 at 13 39 16@2x" src="https://github.com/user-attachments/assets/b5cac59e-7546-483c-85d6-559f62617ce1" />
<img width="2372" height="1572" alt="CleanShot 2026-04-01 at 13 38 41@2x" src="https://github.com/user-attachments/assets/1c609710-fe68-4deb-b25f-4a8b3fb70ea3" />
<img width="1758" height="2026" alt="CleanShot 2026-04-01 at 13 37 34@2x" src="https://github.com/user-attachments/assets/2707a1fa-7f16-4b80-ab8c-02d9c9dcb642" />
<img width="2042" height="1654" alt="CleanShot 2026-04-01 at 13 37 06@2x" src="https://github.com/user-attachments/assets/7246c1b2-2c8e-48a5-aa89-12d8b8de4592" />
<img width="2000" height="1446" alt="CleanShot 2026-04-01 at 13 36 38@2x" src="https://github.com/user-attachments/assets/862a80a0-98db-415e-9ccf-05318b2a78bf" />
<img width="2714" height="1996" alt="CleanShot 2026-04-01 at 15 10 31@2x" src="https://github.com/user-attachments/assets/8a9ba536-96c3-42a5-ae41-fdf8e8ceedd5" />
<img width="1744" height="878" alt="CleanShot 2026-04-01 at 15 10 03@2x" src="https://github.com/user-attachments/assets/41199075-4146-4c1b-8de7-c704d7756a6f" />

## Tela de Perfil

<img width="1616" height="866" alt="CleanShot 2026-04-01 at 15 25 09@2x" src="https://github.com/user-attachments/assets/bd052a83-c02b-4b28-8190-f5d1638fd9e7" />
<img width="1282" height="1028" alt="CleanShot 2026-04-01 at 15 24 47@2x" src="https://github.com/user-attachments/assets/4cf9e95a-b55e-462c-8ab9-b61292fed9ee" />
<img width="1542" height="922" alt="CleanShot 2026-04-01 at 15 24 25@2x" src="https://github.com/user-attachments/assets/f1b9ae13-9bf2-42aa-90f7-32de95c13edb" />
<img width="2016" height="1342" alt="CleanShot 2026-04-01 at 15 24 04@2x" src="https://github.com/user-attachments/assets/ecdee2b1-ab81-4771-9ac5-cd95fb3afa06" />

## Tela de Pedidos

<img width="2980" height="756" alt="CleanShot 2026-04-01 at 18 46 46@2x" src="https://github.com/user-attachments/assets/0f175e1c-8798-44f3-b333-be32078ca44c" />
<img width="1676" height="968" alt="CleanShot 2026-04-01 at 18 47 09@2x" src="https://github.com/user-attachments/assets/d63fe358-55e8-42d9-ae7a-ec86eafb4d8e" />
<img width="1462" height="1440" alt="CleanShot 2026-04-01 at 18 47 28@2x" src="https://github.com/user-attachments/assets/375d9b06-b185-48a9-9774-b22264cfc0a0" />

## Mapa Simulado

<img width="2356" height="1796" alt="CleanShot 2026-04-02 at 16 47 22@2x" src="https://github.com/user-attachments/assets/3881e90e-9f49-43dc-acaa-a210307c11ff" />
<img width="2346" height="1028" alt="CleanShot 2026-04-02 at 16 47 01@2x" src="https://github.com/user-attachments/assets/38744559-edb0-441f-9107-a73328e23d8d" />
<img width="3276" height="778" alt="CleanShot 2026-04-02 at 16 46 20@2x" src="https://github.com/user-attachments/assets/0299a72b-2082-4a96-b919-20b3a04aabdf" />

## Tela de Detalhes do Restaurante

<img width="1806" height="916" alt="CleanShot 2026-04-02 at 16 48 10@2x" src="https://github.com/user-attachments/assets/f84483ea-e6b3-4fa1-9630-f85aaf598e17" />

## Tela de Checkout

<img width="1772" height="3034" alt="CleanShot 2026-04-02 at 19 16 41@2x" src="https://github.com/user-attachments/assets/6baa5e49-624a-44de-9ead-716447fa7bf0" />
<img width="2718" height="2252" alt="CleanShot 2026-04-02 at 19 14 47@2x" src="https://github.com/user-attachments/assets/647af40a-40e7-4876-aa7d-6329e107778a" />
<img width="1776" height="814" alt="CleanShot 2026-04-02 at 19 13 54@2x" src="https://github.com/user-attachments/assets/9e2e3843-bf18-4911-a3db-593abe5be62e" />
<img width="1444" height="460" alt="CleanShot 2026-04-02 at 19 13 31@2x" src="https://github.com/user-attachments/assets/ba196ad5-b9f9-4e25-8bc4-44416276bd6a" />

## Fluxo de Autenticação

<img width="1636" height="1400" alt="CleanShot 2026-04-04 at 14 11 48@2x" src="https://github.com/user-attachments/assets/f3b8efcb-1dd5-4e8a-a253-e85ccddd071a" />
<img width="2234" height="2640" alt="CleanShot 2026-04-04 at 14 11 28@2x" src="https://github.com/user-attachments/assets/12f3ada2-5a3c-4ca5-bd51-cfa874262e79" />
<img width="1596" height="906" alt="CleanShot 2026-04-04 at 14 10 39@2x" src="https://github.com/user-attachments/assets/54ce7f52-3928-4f48-8e9f-576862c6f360" />

## Notificações Simuladas

<img width="1772" height="3978" alt="CleanShot 2026-04-04 at 17 06 33@2x" src="https://github.com/user-attachments/assets/3d9769cd-c914-4f2e-b98a-3275651304ac" />
<img width="1704" height="1904" alt="CleanShot 2026-04-04 at 17 05 47@2x" src="https://github.com/user-attachments/assets/621b3c7f-1194-4443-ad97-ba231e2df10f" />

## Integração com API Externa

<img width="2354" height="2526" alt="CleanShot 2026-04-05 at 17 07 26@2x" src="https://github.com/user-attachments/assets/e60d7f7a-36b5-4563-83cf-90b6501fde7e" />
<img width="2354" height="2178" alt="CleanShot 2026-04-05 at 17 06 27@2x" src="https://github.com/user-attachments/assets/2d421fdf-3c98-4b4e-aecd-e29ea083668f" />
<img width="2348" height="2006" alt="CleanShot 2026-04-05 at 17 05 35@2x" src="https://github.com/user-attachments/assets/aa9c058c-f388-46b3-91ce-95890aeb801b" />
<img width="1756" height="2064" alt="CleanShot 2026-04-05 at 17 05 04@2x" src="https://github.com/user-attachments/assets/233df90c-a4e6-437d-bfd6-424fdb92f2d8" />
<img width="2360" height="1124" alt="CleanShot 2026-04-05 at 17 04 30@2x" src="https://github.com/user-attachments/assets/2195b4e9-09f4-49bd-acde-2058a4a34eea" />
<img width="1804" height="2380" alt="CleanShot 2026-04-05 at 17 04 12@2x" src="https://github.com/user-attachments/assets/ef1e3f93-2389-4065-9a08-3e91a2561c88" />
