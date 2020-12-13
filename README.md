# capangular.bancocap

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.


## Challenge - Legacy POC (Grupo) - Banco Cap

Um sistema bancário deverá ser desenvolvido obedecendo às seguintes regras:

**Login**

A tela de login deverá conter os seguintes campos: E-mail e Senha;
Um link para a tela de cadastro de usuário deverá ser criado e mais dois campos, além dos campos informados acima, deverão ser relacionados no formulário: Nome e Data de Nascimento;
Um link para o “esqueci a minha senha” deverá ser criado;
Um check-box com a possibilidade de “manter-se conectado” deverá ser criado;
Ao clicar no botão de “login”, o usuário deverá ser direcionado para uma tela Home;
Exibir um erro caso QUALQUER campo não seja preenchido.

Esqueci minha senha

Construir um formulário com um campo: E-mail
Ao clicar no botão de “Reenviar a senha”, redirecionar o usuário para a tela de Login.
Exibir um erro caso QUALQUER campo não seja preenchido.

**Cliente**

A tela de cadastros deverá conter os seguintes campos: Nome e CPF;
A tela de visualização (grid) deverá conter os mesmos campos da tela de cadastro;
Exibir um erro caso QUALQUER campo não seja preenchido.

**Conta**

A tela de cadastro deverá conter os seguintes campos: Hash e um drop-down para selecionar o cliente; (arrow_drop_down)
A tela de visualização (grid) deverá conter: Hash da Conta, Cliente e Saldo.
Exibir um erro caso QUALQUER campo não seja preenchido na tela de cadastro.

**Premissas**

Obedecer todas as formatações respectivas nos campos das telas de cadastro e visualização de dados;
Construir uma tela intuitiva e com elementos visuais condizentes com os métodos modernos de usabilidade;
Um menu deverá ser construído a fim de facilitar a navegação do usuário pelo sistema;
O trabalho e a entrega deverá ser feito em grupo e a entrega deverá ser publicada no repositório relacionado abaixo no GitHub do líder.


**Repositório:**
[GitHub]/capangular.bancocap


## Run  - Instrução

Entre na pasta via prompt de comando e os comandos digite:

```
npm install
npm start ou ng serve

Instalação do componente ngx-mask para mascara do Cliente(CPF).

Referência
https://www.npmjs.com/package/ngx-mask


```

Challenge - Legacy POC (Individual)
Banco Cap


Uma nova feature foi solicitada para ser implementada no sistema Banco Cap, e deverá seguir as seguintes regras:


Depósito

Uma tela de depósito deverá ser construída com os seguintes campos: DataHora (preencher de forma automática com a data/hora atual), Valor e Hash da Conta;
Exibir um erro caso QUALQUER campo não seja preenchido.

Saque

Uma tela de saque deverá ser construída com os seguintes campos: DataHora (preencher de forma automática com a data/hora atual), Valor e Hash da Conta;
Exibir um erro caso QUALQUER campo não seja preenchido.

Transferência

Uma tela de transferência deverá ser construída com os seguintes campos: DataHora (preencher de forma automática com a data/hora atual), Valor, Hash da Conta de Origem e Hash da Conta de Destino;
Exibir um erro caso QUALQUER campo não seja preenchido.

Extrato

Uma tela exibindo o extrato (grid) deverá ser construída, e os seguintes campos deverão ser demonstrados: Data/Hora, Valor, Tipo de Operação (Depósito, Saque ou Transferência) e, em se tratando de transferência, o Hash da Conta de Origem da transferência.

Premissas:

Obedecer os mesmo critérios e regras do sistema Banco Cap desenvolvido em grupo, incluindo padrões visuais;
Incluir os novos itens de menu na tela para garantir o funcionamento do fluxo de navegação em todo o sistema.

Repositório:
[GitHub]/capangular.bancocap.v1

Acesse a aplicação no navegador: localhost:4200
