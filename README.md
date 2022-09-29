<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Projeto base para criação de microsserviço Node com o Nest usando TypeScript</p>


## Descrição

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

Antes de mais nada, certifique-se que você tem o NodeJS, Git e VS Code instalados.

## Pré-requisito

Faça o [download](https://www.postman.com/) do Postman para testar as requisições.

Certifique-se que você tem o NodeJS, Git e VS Code instalados. [Aqui](https://danvitoriano.medium.com/preparando-ambiente-para-usar-nodejs-e-javascript-para-desenvolvimento-a17725028e24) tem um tutorial para cada sistema operacional.

Em seguida, faça a instalação do Nest usando o terminal da sua máquina:

```bash
npm i -g @nestjs/cli
```

## Clone

Faça o clone deste projeto usando o comando:

```bash
$ git clone https://github.com/danvitoriano/fast-forward-final.git
```

## Instalação do projeto

Entre na pasta do projeto após o clone e faça a instalação do projeto:

```bash
$ cd fast-forward-final
$ npm install
```

## Rodando a aplicação

```bash
# development
$ npm run start

# watch mode (prefira esse)
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Informações adicionais

1. Criando no projeto Nest do zero:

- Digitar o comando  `**nest new projeto-ame**`

- Na mensagem “Which package manager would you ❤️ to use?” escolha **npm** ou **yarn** (para escolher o yarn, você precisa tê-lo instalado antes)

- Digitar os comandos `**cd projeto-ame`** e logo após `**npm run start:dev**`

- Seu projeto está pronto 🙂

2. Criando um novo recurso no projeto Nest

```bash
$ nest generate nomeRecurso
```

3. Para utilizar as coleções de requisições, faça a importação do arquivo `fast-forward-final.postman_collection.json` dentro do Postamn.

4. Para persistir os dados no banco de dados MongoDB utilizando o Mongoose, salve suas alterações, suba para o seu repositório e altere para a branch `integracao-mongo`.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
