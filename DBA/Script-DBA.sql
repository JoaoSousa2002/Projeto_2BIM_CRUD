CREATE DATABASE ListaObjetivos;
USE ListaObjetivos;


CREATE TABLE `objetivos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `descricao` text DEFAULT NULL,
  `status` enum('Não iniciado','Em progresso','Finalizado') NOT NULL DEFAULT 'Não iniciado',
  `data_inicio` date DEFAULT NULL,
  `data_fim` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `objetivos` (`nome`, `descricao`, `status`, `data_inicio`, `data_fim`) VALUES
('Aprender TypeScript', 'Estudar tipagem estática e migrar projetos JS para TS', 'Não iniciado', NULL, NULL),
('Publicar vídeo no YouTube', 'Gravar vídeo sobre tecnologia e impacto social', 'Não iniciado', NULL, NULL),
('Criar portfólio no GitHub', 'Organizar repositórios e documentar projetos com README detalhado', 'Não iniciado', NULL, NULL),
('Concluir curso de AWS', 'Finalizar módulos restantes e obter certificação Cloud Practitioner', 'Em progresso', '2026-05-10', NULL),
('Desenvolver API REST completa', 'Construir API com autenticação JWT e documentação Swagger', 'Em progresso', '2026-05-28', NULL),
('Implementar testes no ToDoTask', 'Adicionar testes unitários e de integração no projeto', 'Em progresso', '2026-06-03', NULL),
('Configurar CI/CD no GitHub Actions', 'Automatizar deploy da aplicação com pipeline de integração contínua', 'Finalizado', '2026-05-05', '2026-05-22'),
('Modelar banco de dados do projeto', 'Criar e revisar a estrutura das tabelas no MySQL', 'Finalizado', '2026-05-01', '2026-05-12');

