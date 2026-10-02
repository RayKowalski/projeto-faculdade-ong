# ONG Esperança

## Sobre o projeto

O ONG Esperança é um projeto acadêmico desenvolvido para representar o site de uma organização não governamental voltada ao resgate, cuidado e adoção responsável de animais.

O projeto foi desenvolvido como parte das atividades práticas do curso de Análise e Desenvolvimento de Sistemas, com foco na aplicação de conceitos de desenvolvimento web, organização de código, interatividade e acessibilidade.

## Funcionalidades

- Navegação entre as principais seções do site.
- Apresentação dos projetos sociais da ONG.
- Formulário de cadastro para pessoas interessadas em ajudar.
- Armazenamento dos dados do cadastro utilizando `localStorage`.
- Preferências de acessibilidade com modo automático, modo claro e modo escuro.
- Opção de utilização de tons quentes na interface.
- Menu responsivo para diferentes tamanhos de tela.
- Elementos de feedback visual, como alertas, badges, toast e modal.

## Tecnologias utilizadas

### HTML5
Utilizado para estruturar as páginas e os elementos do projeto, como cabeçalho, navegação, conteúdo, formulários e rodapé.

### CSS3
Utilizado para definir a aparência e o layout da aplicação, incluindo responsividade, cores, tipografia, estados de interação e modos de acessibilidade.

### JavaScript
Utilizado para implementar a interatividade da aplicação, a navegação dinâmica, o gerenciamento do formulário, o armazenamento de dados no `localStorage` e as preferências de acessibilidade.

### Git
Utilizado para realizar o controle de versões do projeto, permitindo registrar alterações por meio de commits e organizar o desenvolvimento utilizando branches.

### GitHub
Utilizado para hospedar o repositório, acompanhar tarefas por meio de issues e milestones e documentar alterações por meio de pull requests.

## Estrutura do projeto

```text
Projeto Faculdade/
├── css/
│   └── style.css
├── html/
│   ├── index.html
│   ├── projetos.html
│   ├── contato.html
│   └── cadastro.html
├── imagens/
│   └── ong_animais.jpg
├── js/
│   └── app.js
└── README.md

## Acessibilidade

O projeto possui opções de personalização da interface para melhorar a experiência de visualização. O usuário pode selecionar o modo automático, o modo claro ou o modo escuro, além de ativar tons quentes.

As preferências escolhidas são armazenadas no `localStorage` e reaplicadas quando o projeto é carregado novamente.