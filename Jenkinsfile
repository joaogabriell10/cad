// CODE_CHANGES = getGitChanges()

def gv

pipeline{
    agent any
    // environment {
    //     NEW_VERSION = '1.0.0'
    //     SERVER_CREDENTIALS = credentials('server-credentials')
    // }
    // tools {
    //     maven {

    //     }
    // }
    parameters{
        // string(name: 'VERSION', defaultValue: '1.0.0', description: 'version to deploy on prod')
        choice(name: 'VERSION', choices: ['1.0.0', '1.1.0', '1.2.0'], description: '')
        booleanParam(name: 'executeTests', defaultValue: true, description: '')

    }
    stages {

        // when {
        //     expression {
        //         BRANCH_NAME == 'main' && CODE_CHANGES == true
        //     }
        // }
        stage("init"){
            steps {
                script {
                    gv = load "script.groovy"
                }
            }
        }

        stage("build"){

            steps {
                script {
                    gv.buildApp()
                }
                // echo 'building the application...'
                // echo "building version ${NEW_VERSION}"
            }
        }

        stage("test"){
            // when {
            //     expression {
            //         BRANCH_NAME == 'dev'
            //     }
            // }
            when {
                expression {
                    params.executeTests
                }
            }
            steps{
                script {
                    gv.testApp()
                }
                
            }
        }

        stage("deploy"){

            steps{
                script {
                    gv.deployApp()
                }
                // withCredentials([
                //     usernamePassword(credentials('server-credentials', usernameVariable: USER, passwordVariable: PWD))
                // ]){
                //     sh "some script ${USER} ${PWD}"
                // }
                // echo "deploying with ${SERVER_CREDENTIALS}"
                // sh "${SERVER_CREDENTIALS}"
            }
        }
    }

    // post {
    //     always {
    //         // 

    //     }
    //     success {

    //     }
    //     failure {

    //     }

    // }
}