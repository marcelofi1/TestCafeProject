pipeline {
    agent {
        label 'docker'
    }

    environment {
        CI = true
        IMAGE_NAME = 'testcafe-e2e'
        SCRIPT = 'regression'
        ENVIRONMENT = 'ppd'
    }

    options {
        disableConcurrentBuilds()
        skipStagesAfterUnstable()
        timeout(time: 120, unit: 'MINUTES')
        parallelsAlwaysFailFast()
    }

    stages {
        stage('Build Testcafe Image') {
            steps {
                script {
                        sh "docker build -f ./sportsbetting-qa/Dockerfile -t ${IMAGE_NAME} ."
                }
            }
        }
        
        stage('Run E2E Tests') {
            steps {
                script {
                        try {
                            withCredentials([usernamePassword(credentialsId: '4e2e4adb-f28b-4c5f-abd5-63c2999215a9', usernameVariable: 'BROWSERSTACK_USERNAME', passwordVariable: 'BROWSERSTACK_ACCESS_KEY')]){
                                sh 'echo ENVIRONMENT: ${ENVIRONMENT}'
                                sh 'echo SCRIPT: ${SCRIPT}'
                                sh 'docker run --rm \
                                -v "`pwd`/reports:"/tests/sportsbetting-qa/reports \
                                -e env=${ENVIRONMENT} \
                                -e BROWSERSTACK_USERNAME=${BROWSERSTACK_USERNAME} \
                                -e BROWSERSTACK_ACCESS_KEY=${BROWSERSTACK_ACCESS_KEY} \
                                ${IMAGE_NAME} ${SCRIPT}'
                            } 
                        } catch (e) {
                            currentBuild.result = 'FAILURE Run E2E Tests'
                        }
                }
            }
        }

        stage('Publish report') {
            steps {
                script {
                        publishHTML (target: [
                            allowMissing: true,
                            alwaysLinkToLastBuild: false,
                            keepAll: true,
                            reportDir: 'reports',
                            reportFiles: "${dir('reports') { findFiles(glob: '**/*.html').join(',') ?: 'Not found' }}",
                            reportName: "nSB Report"
                        ])
                }
            }
        }

        stage('Notification mattermost') {
            steps {
               script {
                        if (currentBuild.result == 'FAILURE') {
                            mattermostSend(
                                color: '#e00707',
                                icon: 'https://i.postimg.cc/qR29zKyr/favicon.png',
                                channel: 'notice-jenkins-test-nsb',
                                endpoint: 'https://mattermost.itspty.com/hooks/zt7jhcxm6bdjuxnzjeapwcs5dy',
                                message: "Build sb-nightly-regression-ppd FAILED: ${env.JOB_NAME} - #${env.BUILD_NUMBER}\n\rEnvironment: ${ENVIRONMENT}\n\r(<${env.BUILD_URL}|Build> - <${env.BUILD_URL}Project_20E2E_20Tests_20Report/|Report>) :face_with_head_bandage:"
                            )
                        }
                }
            }
        }
    }
    post {
        always {
            echo 'Done...'
            cleanWs()
        }
    }
}

