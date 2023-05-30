# teste_signo
Desenvolvimento de processo seletivo.

O desafio consiste em implementar uma aplicação Web utilizando o framework  NodeJS + Express, e um banco de dados relacional SQLite, MySQL ou Postgres, a partir de uma modelagem de dados inicial desnormalizada, que deve ser normalizada para a implementação da solução.

 Vai criar uma aplicação de cadastro de pedidos de compra, a partir de uma modelagem inicial, com as seguintes funcionalidades:

CRUD de clientes.

CRUD de produtos.

CRUD de pedidos de compra, com status (Em Aberto, Pago ou Cancelado).

Cada CRUD:

deve ser filtrável e ordenável por qualquer campo, e possuir paginação de 20 itens.

deve possuir formulários para criação e atualização de seus itens.

deve permitir a exclusão de qualquer item de sua lista, importante conter uma mensagem de confirmação.

Barra de navegação entre os CRUDs.

Links para os outros CRUDs nas listagens (Ex: link para o detalhe do cliente da compra na lista de pedidos de compra)

Modelo de dados

A modelagem inicial para a implementação solução é a seguinte:


Deve alterar esta modelagem para que a mesma cumpra com as três primeiras formas normais.

Além disso, a implementação deste modelo em um banco de dados relacional deve ser realizada levando em consideração os seguintes requisitos:

O banco de dados deve ser criado utilizando Migrations do framework Laravel, e também utilizar Seeds e Factorys para popular as informações no banco de dados. Se o seu projeto for em NodeJS solicitamos o uso do ORM Sequelize para a criação das migrations.
Implementação das validações necessárias na camada que julgar melhor.

Tecnologias  utilizadas.

HTML,

CSS,

Javascript,

NodeJS+Express,

Postgresql,



