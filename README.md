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
- currency-formatter: utilizada para formatar dinheiro
- date-fns: utilizada para formatar datas
- expo-font: utilizada para incluir fontes externas no app
- @react-navigation: utilizada para generenciar a navegação entre telas no app

## API
Foi utilizada a mockapi.io para geração da API, sendo utilizado as seguintes rotas:

#### GET /transactions
Que retorna um array de objetos da seguinte forma:
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
Que esperar receber no body um objeto da seguinte forma:
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