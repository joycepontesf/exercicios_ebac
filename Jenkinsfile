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
               script {
                   dir('exercicios_ebac/mod-11') {
                       sh 'npm install'
                   }
               }
            }
        }
        
        stage('Execução do Teste') {
            steps {
                script {
                    dir('exercicios_ebac/mod-11') {
                        sh 'NO_COLOR=1 npm run cy:run'
                    }
                }
            }
        }
    }
}
