pipeline {
    agent any
    tools {nodejs "nodejs"} 
    
    stages {
        stage('Clonar repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/joycepontesf/exercicios_ebac.git'
            }
        }
        
        stage('Instalação de dependências') {
            steps {
                       sh 'cd mod11 && npm install'
                   }
               }
        
        stage('Execução do Teste') {
            steps {
                        sh 'cd mod-11 && NO_COLOR=1 npm run cy:run'
                    }
                }
        }
    }
