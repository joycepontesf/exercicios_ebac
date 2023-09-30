## Sobre o Módulo 15

Após iniciar os estudos sobre DevOps, CI-CD, Docker e conhecer ferramentas que possibilitam a implementação da integração contínua no dia a dia do desenvolvimento de software, como atividade da formação em Engenheiro de Qualidade de Software da [EBAC (Escola Britânica de Artes Criativas e Tecnologia)](https://ebaconline.com.br/engenheiro-de-qualidade), fui capaz de criar esteiras de testes em pipelines do Jenkins para rodar os testes desenvolvidos nos módulos [11](https://github.com/joycepontesf/exercicios_ebac/tree/main/MOD-11), [12](https://github.com/joycepontesf/exercicios_ebac/tree/main/MOD-12) e [14](https://github.com/joycepontesf/exercicios_ebac/tree/main/mod-14).  

Como estratégia para criar e executar a esteira:

* Instalei uma imagem oficial do jenkins via Docker
* Instalei as dependências relacionadas ao Nodejs, Cypress e NPM
* Configurei o pipeline para uso com "script from scm"
* Criei o Jenkinsfile nos respectivos repositórios e executei as esteiras
  
__Para visualizar o trabalho desenvolvido acesse:__

1. [Repositório com testes do módulo 11](https://github.com/joycepontesf/cypress-ui)
2. [Repositório com testes do módulo 12](https://github.com/joycepontesf/cypress-ui-produto)
3. [Repositório com testes do módulo 14](https://github.com/joycepontesf/cypress-apirest)
