Para rodar a aplicação, primeiro baixe o o repositório.
nele contém duas pastas, uma com o front-end e outra com o back-end.
depois que o repositório baixado abra a pasta rais do projeto no terminal,
primeiro vamos instalar e rodar a parte do back-end.
```
cd organization-api
bundle install
rails db:create
rails db:migrate
rails s
```
Com isso a parte do back-end devera estar rodando se tudo estiver de acordo com o usuário e senha do banco de dados.

agora em outro terminal aberto partindo da pasta rais do repositório

```
cd organization-app
npm install
npm run dev
```
com isso a aplicação toda estara rodando

para rodar os testes unitários, na pasta relacionada ao back end
```
bundle exec rspec .
```

Banco de dados

A aplicação tem apenas duas tabelas
Company:
name

Employee
name
email
picture
company_id
manager_id

As requisições são requisições graphql
