Projeto CRUD  - Gerenciamento de Hóspedes

Contexto do Projeto

O sistema desenvolvido tem como objetivo o **gerenciamento de hóspedes**, simulando o funcionamento básico de uma pousada ou hotel.

A aplicação permite realizar operações de cadastro, listagem, atualização e remoção de hóspedes, facilitando o controle de registros de clientes.



Arquitetura do Sistema

O projeto segue uma arquitetura fullstack com separação de responsabilidades, dividida em duas camadas principais:

🔹 Backend

* Responsável pelas regras de negócio e persistência dos dados;
* Desenvolvido com **Node.js + Express**;
* Utiliza arquivos JSON como banco de dados local;
* Estrutura organizada em:

  * `routes/`: definição das rotas da API;
  * `utils/`: manipulação de arquivos (FileSync);
  * `data/`: armazenamento dos dados.

🔹 Frontend

* Responsável pela interface do usuário;
* Desenvolvido com **React**;
* Consome a API do backend via **Axios**;
* Organizado em:

  * `pages/`: telas da aplicação;
  * `components/`: componentes reutilizáveis;
  * `services/`: funções de requisição HTTP.

---

⚙️ Principais Decisões Técnicas

* Utilização de **FileSync (`fs.readFileSync` e `fs.writeFileSync`)** para persistência simples dos dados;
* Separação de responsabilidades entre frontend e backend;
* Uso do **Axios** para comunicação entre frontend e backend;
* Implementação de **React Router DOM** para navegação entre páginas;
* Organização do código em camadas (services, pages, components);
* Uso de **JSON como banco de dados local**, facilitando testes e desenvolvimento.

---

Instalação das Dependências

🔹 Backend

cd backend
npm install


🔹 Frontend

cd frontend
npm install


---

Como Executar o Projeto

🔹 Iniciar Backend

cd backend
node server.js

Servidor disponível em:

http://localhost:3000

---

🔹 Iniciar Frontend

cd frontend
npm start


Aplicação disponível em:


http://localhost:3001

---

Portas Utilizadas

| Serviço  | Porta |
| -------- | ----- |
| Backend  | 3000  |
| Frontend | 3001  |

---

 Rotas do Frontend (React Router DOM)

| Rota          | Página      | Finalidade                              |
| ------------- | ----------- | --------------------------------------- |
| `/`           | Home        | Tela inicial com consumo de API externa |
| `/hospedes`   | Listagem    | Exibir todos os hóspedes cadastrados    |
| `/create`     | Cadastro    | Formulário para cadastrar novo hóspede  |
| `/update/:id` | Atualização | Editar dados de um hóspede existente    |

---

Rotas da API (Backend)

Base URL:

http://localhost:3000/hospedes

| Método | Rota                      | Descrição                     |
| ------ | ------------------------- | ----------------------------- |
| GET    | `/listar_hospedes`        | Retorna todos os hóspedes     |
| GET    | `/listar_hospedes/:id`    | Retorna um hóspede específico |
| POST   | `/cadastrar_hospedes`     | Cadastra um novo hóspede      |
| PUT    | `/atualizar_hospedes/:id` | Atualiza um hóspede existente |
| DELETE | `/deletar_hospedes/:id`   | Remove um hóspede             |

---

Gerenciamento de Estado no Frontend

O gerenciamento de estado foi feito utilizando os hooks do React:

🔹 useState

Utilizado para armazenar:

* listas de hóspedes;
* dados de formulários;
* respostas da API;
* estados de carregamento.

🔹 useEffect

Utilizado para:

* carregar dados da API ao iniciar a página;
* atualizar a interface automaticamente após mudanças.

🔹 Fluxo de Dados

1. O usuário interage com a interface (ex: cadastrar hóspede);
2. A página chama uma função do `services` (Axios);
3. A requisição é enviada ao backend;
4. O backend processa e retorna a resposta;
5. O estado (`useState`) é atualizado;
6. A interface é re-renderizada automaticamente.

---

API Externa 

O projeto consome a API:

https://economia.awesomeapi.com.br


Exibindo:

* Cotação USD-BRL;
* Cotação EUR-BRL;
* Cotação BTC-BRL;
* Variação percentual de moedas.

---

Checklist de Funcionalidades

* [x] Listar registros
* [x] Cadastrar registros
* [x] Atualizar registros
* [x] Deletar registros
* [x] Consumo de API externa
* [x] Integração frontend-backend com Axios
* [x] Persistência em JSON

---

 Autor

Projeto desenvolvido para a disciplina de Desenvolvimento Web.

Feito por: Letícia Barcellos Fossa e Mateus Vargas
