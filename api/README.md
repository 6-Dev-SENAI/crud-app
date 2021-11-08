<center>

# ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

# | Primeiro CRUD Full-Stack em MERN (MySQL, ExpressJs, ReactJs, NodeJs) -- BACK |

## &#128421; Concluído &#128640;

</center>

---

## Sobre | Back

Back desenvolvido na stack JavaScript para Full-Stack, fazendo um CRUD num banco de dados local através da conexão com Sequelize e iniciando server em Express!

![Languages](https://img.shields.io/github/languages/count/6-Dev-SENAI/crud-app?color=%2304D361) ![Repo_Size](https://img.shields.io/github/repo-size/6-Dev-SENAI/crud-app) ![Last_Commit](https://img.shields.io/github/last-commit/6-Dev-SENAI/crud-app)

![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg) [![Maintainer](https://img.shields.io/badge/maintainer-SixDev-purple)](https://github.com/6-Dev-SENAI)

---

### Pré-requisitos | Back

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com/downloads), [NodeJs](https://nodejs.org/en/download/), [NPX](https://www.npmjs.com/package/npx), [MySQL](https://dev.mysql.com/downloads/workbench/) e o como opcional o [Yarn](https://classic.yarnpkg.com/en/docs/install/). É recomendado que se tenha um editor de código como o [VSCode](https://code.visualstudio.com/Download)!

#### Rodando a API

Antes de iniciar, é preciso que você tenha um banco de dados MySQL local com o nome *crud_db* com a tabela usuario_tb, segue script:

```mysql
-- drop database crud_db;

create database crud_db;

use crud_db;

create table usuario_tb
(
    id_usuario int not null
    auto_increment primary key,
    nm_usuario varchar(100) not null,
    nr_idade int not null,
    ds_sexo char(1) not null
);
```

Após isso, siga as instruções abaixo:

```bash
# Clone este repositório
$ git clone https://github.com/6-Dev-SENAI/crud-app.git

# Acesse a pasta do projeto no terminal/cmd
$ cd crud-app

# Caso queira editar algum código, abra o VsCode com
$ code .
```

Entre no arquivo _API/database/index.js_ e altere seu conteúdo nas linhas:

```javascript
// conteúdo padrão:
04 const sequelize = new Sequelize("crud_db", "root", "Apolonio@01", {
05  host: "localhost",
06  dialect: "mysql",
07  logging: false,
08 });

// seu conteúdo:
04 const sequelize = new Sequelize("crud_db", "<seu_usuario>", "<sua_senha>", {
05  host: "localhost",
06  dialect: "mysql",
07  logging: false,
08 });
```

Assim que alterar o arquivo, siga as intruções:

```bash
# nossa API tem um sistema para que instale as dependências direto e já inicie o projeto:
/crud-app/api/$ npm run deps

# Agora basta esperar a instalação das dependências serem feitas e aproveitar a nossa API!
```

A API rodará na porta 5000, caso queira alterar, vá no arquivo _API/package.json_ e na linha **08** mude o '5000' para a porta que desejar!

> Uma vez que as dependências já estão instaladas, não rode o 'NPM RUN DEPS' novamente, utilize diretamente o NPM START

```bash
/crud-app/api/$ npm start
```

E desfrute de nossa API, sem moderação! ;)

---

### Recursos | Back

| Tecnologia | [![Generic badge](https://img.shields.io/badge/Badges--lime.svg)](####recursos)                                                                           |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ExpressJs  | [![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/pt-br/) |
| MySQL      | [![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)                          |
| NodeJs     | [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)                         |
| Sequelize  | [![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)](https://sequelize.org/)                  |

---

### Autores

<table>
    <tbody>
        <tr>
            <td>
                <a href="https://github.com/Gustavo-Apolonio">
                    <img src="https://avatars.githubusercontent.com/u/61479398?v=4" width="100px" style="border-radius: 50%;" alt=""/>
                </a>
            </td>
            <td>
                Gustavo
            </td>
            <td>
                <a href="https://github.com/diogolimalucasdev">
                    <img src="https://avatars.githubusercontent.com/u/66488127?v=4" width="100px" style="border-radius: 50%;" alt=""/>
                </a>
            </td>
            <td>
                Diogo
            </td>
            <td>
                <a href="https://github.com/GuilhermeSeveriano">
                    <img src="https://avatars.githubusercontent.com/u/87097691?v=4" width="100px" style="border-radius: 50%;" alt=""/>
                </a>
            </td>
            <td>
                Guilherme
            </td>
        </tr>
        <tr>
            <td>
                <a href="https://github.com/Edmilson1406">
                    <img src="https://avatars.githubusercontent.com/u/87097456?v=4" width="100px" style="border-radius: 50%;" alt=""/>
                </a>
            </td>
            <td>
                Edmilson
            </td>
            <td>
                <a href="https://github.com/Gabriel-Silvano">
                    <img src="https://avatars.githubusercontent.com/u/84875270?v=4" width="100px" style="border-radius: 50%;" alt=""/>
                </a>
            </td>
            <td>
                Gabriel
            </td>
            <td>
                <a href="https://github.com/anaalves-ferr">
                    <img src="https://avatars.githubusercontent.com/u/88809084?v=4" width="100px" style="border-radius: 50%;" alt=""/>
                </a>
            </td>
            <td>
                Ana
            </td>
        </tr>
    </tbody>
</table>
