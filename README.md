# Trabalho CRUD com Node, Express, Knex, DotEnv e Mysql2



**Desenvolvedor**: João Victor Sousa da Conceição



## Como usar:

1. Criar e iniciar o banco de dados
   
   1. Rode as queries do script localizado na pasta **DBA/Script-DBA.sql** no banco de dados para criar o DATABASE, a tabela e os dados de exemplo.
   
   2. Com o XAMPP, inicie o servidor MySql para inciar o servidor do banco de dados

2. Configurar o .env
   
   1. Na raiz do projeto, existe o arquivo **.env_**, renomeie para ".env" para que o backend possa usar os dados do servidor
   
   2. DB_HOST= IP do banco de dados, normalmente LocalHost
      DB_USER= Nome do usuario para conectar ao banco de dados
      DB_PASS= Senha do banco de dados, se não tiver coloque ""
      DB_NAME= ListaObjetivos (Nome da tabela usada no backend)
      PORT= Porta onde o servidor está rodando

3. Iniciar o servidor Express (Backend)
   
   1. No terminal, rode o comando `npm install` para instalar as dependencias
   
   2. No terminal, rode o comando `node src/ServidorExpress.js` para inciar o servidor

4. Inicia o live server 
   
   1. Instale a extensão Live server no VScode e inicie com a **/public/Index.html** aberto


