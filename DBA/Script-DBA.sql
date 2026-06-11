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
('Aprender Flask', 'Estudar o framework Flask para criar APIs com Python', 'Em progresso', '2025-06-01', '2025-07-01'),
('Finalizar projeto CRUD', 'Concluir o projeto de Web II com todas as operações funcionando', 'Em progresso', '2025-05-15', '2025-06-30'),
('Estudar para AWS', 'Revisar os serviços da AWS para a prova do 2º bimestre', 'Finalizado', '2025-04-01', '2025-05-20'),
('Criar portfólio no GitHub', 'Subir todos os projetos da faculdade no GitHub organizadamente', 'Não iniciado', '2025-07-01', '2025-08-01'),
('Aprender NumPy', 'Praticar manipulação de arrays e cálculos numéricos com NumPy', 'Não iniciado', '2025-07-15', '2025-08-15');
