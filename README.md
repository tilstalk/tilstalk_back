# TILStack Backend

Este é o backend do projeto TILStack, desenvolvido com Node.js e utilizando o MongoDB como banco de dados. O TILStack é uma aplicação para compartilhar pequenos aprendizados diários (Today I Learned - TIL).

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript do lado do servidor.
- [MongoDB](https://www.mongodb.com/) - Banco de dados NoSQL orientado a documentos.

## Como Instalar

Certifique-se de ter o Node.js e o MongoDB instalados. Clone o repositório e execute os seguintes comandos:

```bash
# Instale as dependências
npm install

# Inicie o servidor
npm start
```

O servidor estará em execução em `http://localhost:3000`.

## Configuração do Banco de Dados

Certifique-se de ter um servidor MongoDB em execução ou configure a conexão no arquivo `.env`. Você pode criar um arquivo `.env` na raiz do projeto com as seguintes configurações:

```env
MONGO_URI=sua_url_do_mongodb
```

Substitua `sua_url_do_mongodb` pela URL de conexão adequada ao seu ambiente.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
tilstalk_back/
|-- src/
|   |-- controllers/
|   |-- models/
|   |-- routes/
|   |-- ...
|-- index.js
|-- .env
|-- ...
```

- `src/controllers`: Controladores para manipular lógica de negócios.
- `src/models`: Modelos para interação com o banco de dados.
- `src/routes`: Rotas da aplicação.

## Contribuindo

Sinta-se à vontade para contribuir com melhorias. Abra uma issue para discussões ou envie um pull request.

```

Adapte conforme necessário para refletir a estrutura real do seu projeto e adicione ou modifique informações relevantes conforme a evolução do projeto. Certifique-se de manter a documentação atualizada à medida que você faz alterações significativas no código.
