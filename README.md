# Organizador_de_Tarefas
FrontEnd para gerir tarefas consumindo uma API - trabalho JS Entra21
URLBaseAPI: https://gabrielcaixeta.github.io/laravel-sanctum-auth-api

## Termo de Aberturado Projeto
- Justificativa: Devido a grande quantidade de tarefas com diferentes prasos joao acaba as veses por esquecer datas e dedicando-se a tarefas que poderiam ser feitas em outro momento e deixando focar nas que realmentre precisavam ser feitas naquele momento. Isso atrapalha o reu rendimento e resultados positivos.

- Finalidade: Implantar um software de Controle de tarefas para melhorar visualização das tarefas, com datas para assim melhorar o gerenciamento e aumentar a produtividade.

- Objetivos: Criar um software FrontEnd para consumir a API de Controle de tarefas. Este FrontEnd deve ter um Login, uma pagina index carregada com informaçoes conforme o login do usuario e este pode Listar, Adicionar, Editar e Excluir suas tarefas.

- Descrição: O Organizador_de_Tarefas sera online cada usuario tera que Cadastrar-se e Logar a sua conta para acessar a sua Home de Tarefas.

- Steakeholders:
  - Cliente: Gabriel Caixeta
  - Patrocinador: Entra21
  - Gerente: Gabriel Caixeta
  - Desenvolvedor: Ney Hiwerson Missias Ribeiro

- Entregas:
  - Tela de Cadastro
  - Tela de Login
  - Home de Tarefas

- Estimativas:
  - Entrega final: 31/01/2024
  - Custos: R$2'000,00

- Exclusões:
  - ??
  - ??

- Critérios de Aceitação:
  - ??
  - ??

---
## Requisitos
- Requisitos Funcionais:
  - [ RF01 ] - O Usuario deve chegar a tela de Login.
  - [ RF02 ] - Na tela de login ele pode logar-se através de email e senha e caso não seja cadastrado podera acessar o link cadastre-se para a acessar a tela de Cadastre-se.
  - [ RF03 ] - Na tela de cadastre-se ele fornecerá name, email, senha e Confirme sua senha. Todos campos obrigatórios e um botão para cadastre-se e um link para a tela de login.
  - [ RF04 ] - Após o formulario de cadastro submetido e recebido um response ok status 201 deve automaticamente ser redirecionado para tela de login.
  - [ RF05 ] - Na tela de login ele pode logar-se através de email e senha e caso seja cadastrado e o response seja ok ele deve ser direcionado para a tela Home_de_Atividades.
  - [ RF06 ] - Cada tarefa sera composta por:
    - "name": "tarefa 1",
    - "done": false,
    - "created_at": "20/12/2023",
    - "updated_at": "20/12/2023"

- Requisitos Não Funcionais:
  - [ RNF01 ] - ??
  - [ RNF02 ] - ??

---
## Diagrama de Entidade e Relacionamento (DER)
- Entidades:
  - Usuário:
    - Atributos:
      - ID (chave primária),
      - Name,
      - Email,
      - Senha.

  - Tarefa:
    - Atributos:
      - ID (chave primária),
      - Name,
      - Done (booleano indicando se a tarefa está concluída ou não),
      - created_at (Data de Criação),
      - updated_at (Data de Atualização).

- Relacionamentos:
  - Um Usuário pode ter várias Tarefas (Relacionamento 1:N entre Usuário e Tarefa).

- Diagrama de Entidade e Relacionamento (DER):
## Diagrama de Entidade e Relacionamento (DER):

```lua
+----------------------+          +----------------------+
|        Usuário       |          |       Tarefa         |
+----------------------+          +----------------------+
| ID (PK)              |          | ID (PK)              |
| Name                 |          | Name                 |
| Email                |          | Done                 |
| Senha                |          | Created_at           |
|                      |          | Updated_at           |
+----------------------+          +----------------------+
```
PK: Primary Key (Chave Primária)
