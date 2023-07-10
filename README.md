# Personal Finances App

## Requisitos
- Node.js
- npm ou Yarn
- Expo

## Instalação 

Se estiver utilizando npm, executar o comando:
```
npm install
```

Se estiver utilizando Yarn, executar o comando:
```
yarn
```

## Utilização 

Se estiver utilizando npm, executar o comando:
```
npm start
```

Se estiver utilizando Yarn, executar o comando:
```
yarn start
```

## Bibliotecas
Libs utilizadas que valem ser mencionadas:
- axios: utilizada para chamadas à API
- currency-formatter: utilizada para formatação de dinheiro
- date-fns: utilizada para formatação de datas
- expo-font: utilizada para incluir fontes externas no app
- @react-navigation: utilizada para generenciar a navegação entre telas no app

## API
Com uso da mockapi.io para geração da API, foram criadas as seguintes rotas:

#### GET /transactions
Retorna um array de objetos com a seguinte forma:
```
{
    id: Object ID,
    name: string,
    value: string,
    operation: string,
    category: string,
    date: Date
}
```
#### POST /transactions
Esperar receber no body da requisição um objeto com a seguinte forma:
```
{
    name: string,
    value: string,
    operation: string,
    category: string,
    date: Date
}
```

## Licença
[MIT](https://choosealicense.com/licenses/mit/)