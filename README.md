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
- Divisão entre área pública (login) e área logada (app completo)

  ![BAAC19B8-2490-4C4B-86B9-B8691294D2A8_4_5005_c](https://github.com/user-attachments/assets/ad6562d5-e146-44c4-bf74-0b61b4f13a0e)


### Home — Categorias
- Listagem de categorias de refeições com imagens carregadas via API externa (TheMealDB)
- Categorias sem imagem disponível exibem imagem de fallback

### Produtos
- Listagem de produtos filtrados por categoria selecionada
- Imagens carregadas via API externa com fallback

### Detalhes do Produto
- Informações completas do produto
- Seleção de quantidade
- Adição ao carrinho com feedback visual temporário de confirmação

### Carrinho
- Listagem de itens adicionados com controle de quantidade
- Remoção de itens individuais
- Cálculo do total em tempo real
- Validação: não permite finalizar pedido com carrinho vazio

### Checkout
- Revisão dos dados de entrega do usuário
- Seleção da forma de pagamento
- Validação de campos obrigatórios
- Notificação local ao confirmar o pedido

### Histórico de Pedidos
- Lista de pedidos anteriores (mockados)
- Pedidos finalizados no app são adicionados ao histórico em tempo real
- Status com cores distintas: Entregue (verde), A caminho (azul), Preparando (laranja)

### Restaurantes
- Listagem de 10 restaurantes no Centro do Rio de Janeiro
- Abertura da localização diretamente no Google Maps
- Tela de detalhes com informações do restaurante

### Perfil
- Informações do usuário logado
- Toggle para alternar entre tema claro e escuro

---

## Tema

O app suporta tema claro e escuro, alternado diretamente na tela de Perfil. A preferência é aplicada em todas as telas em tempo real.

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
