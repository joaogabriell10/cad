node("master") {

	try {	         


		stage('SCM') {

			git branch: 'main', 
			credentialsId: 'sonarqube', 
			url: 'https://github.com/programadormovel/cadastro-produto-react'
		}

		stage('Mvn Package'){

			sh 'mvn clean package'
		}

		stage('SonarQube analysis') {

			withSonarQubeEnv('sonarqube') {

				sh 'mvn sonar:sonar -Dsonar.projectKey=My-Pipeline -Dsonar.host.url=http://127.0.0.1:9000 -Dsonar.login=sqp_4a899e5c5fb0e85f9475555eccfdc54ca5b7f665'

			}

		}

		// stage('Email Sucess')
		// {

		// 	//emailext (
		// 	//	to: 'kaio.felix.oliveira.mail@gmail.com',
		// 	//	subject: "Sucess Pipeline: ${currentBuild.fullDisplayName}",
		// 	//	body: "Sucess with ${env.BUILD_URL}"
		// 	//	)	 
		// }



	}catch (e) {

		// stage('Email Failed')
		// {

		// 	emailext (
		// 		to: 'kaio.felix.oliveira.mail@gmail.com, thekingoftech1@gmail.com',
		// 		subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
		// 		body: "Something is wrong with ${env.BUILD_URL}"
		// 		)	 
		// }


		throw e
	}

	
}


// // CODE_CHANGES = getGitChanges()

// def gv

// pipeline{
//     agent any
//     // environment {
//     //     NEW_VERSION = '1.0.0'
//     //     SERVER_CREDENTIALS = credentials('server-credentials')
//     // }
//     // tools {
//     //     maven {

//     //     }
//     // }
//     parameters{
//         // string(name: 'VERSION', defaultValue: '1.0.0', description: 'version to deploy on prod')
//         choice(name: 'VERSION', choices: ['1.0.0', '1.1.0', '1.2.0'], description: '')
//         booleanParam(name: 'executeTests', defaultValue: true, description: '')

//     }
//     stages {

//         // when {
//         //     expression {
//         //         BRANCH_NAME == 'main' && CODE_CHANGES == true
//         //     }
//         // }
//         stage("init"){
//             steps {
//                 script {
//                     gv = load "script.groovy"
//                 }
//             }
//         }

//         stage("build"){

//             steps {
//                 script {
//                     gv.buildApp()
//                 }
//                 // echo 'building the application...'
//                 // echo "building version ${NEW_VERSION}"
//             }
//         }

//         stage("test"){
//             // when {
//             //     expression {
//             //         BRANCH_NAME == 'dev'
//             //     }
//             // }
//             when {
//                 expression {
//                     params.executeTests
//                 }
//             }
//             steps{
//                 script {
//                     gv.testApp()
//                 }
                
//             }
//         }

//         stage("deploy"){

//             steps{
//                 script {
//                     gv.deployApp()
//                 }
//                 // withCredentials([
//                 //     usernamePassword(credentials('server-credentials', usernameVariable: USER, passwordVariable: PWD))
//                 // ]){
//                 //     sh "some script ${USER} ${PWD}"
//                 // }
//                 // echo "deploying with ${SERVER_CREDENTIALS}"
//                 // sh "${SERVER_CREDENTIALS}"
//             }
//         }
//     }

//     // post {
//     //     always {
//     //         // 

//     //     }
//     //     success {

//     //     }
//     //     failure {

//     //     }

//     // }
// }