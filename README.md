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

> *(adicionar prints aqui)*
