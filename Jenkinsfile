pipeline {
  agent any

  environment {
    GIT_COMMIT                               = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
    SLACK_CHANNEL                            = "#jenkins-alpha"
    SLACK_COLOR_DANGER                       = "#E01563"
    SLACK_COLOR_INFO                         = "#6ECADC"
    SLACK_COLOR_WARNING                      = "#FFC300"
    SLACK_COLOR_GOOD                         = "#3EB991"
    JOB_NAME                                 = "klaim-website"
  }
  options {
    buildDiscarder logRotator(
      daysToKeepStr: '16',
      numToKeepStr: '10'
    )
  }
  stages  {
    stage("Set environment") {
      steps {
        script {
          BRANCH_NAME = "${env.GIT_BRANCH.split('/').size() > 1 ? env.GIT_BRANCH.split('/')[1..-1].join('/') : env.GIT_BRANCH}"

          echo "Setting environment for branch ${BRANCH_NAME}"
          if (BRANCH_NAME == 'master') {
            DEPLOYMENT_ENV = 'prod'
            KUBERNETES_PATH = 'kubernetes/prod'
            IMAGE_VERSION = GIT_COMMIT
            BUILD_ARGS = '--build-arg NEXT_PUBLIC_APP_NAME="klaim_website" --build-arg NEXT_PUBLIC_STRAPI_ENDPOINT="https://strapi.klaim.ai" --build-arg NEXT_PUBLIC_STRAPI_API_ENDPOINT="https://strapi.klaim.ai/api" --build-arg  NEXT_PUBLIC_STRAPI_TOKEN="3bcb1f76988ca0415a93c4093d0365e5ee11e67c4675d282f34e7d46d4f1fb220e110dce258e618ee030b333f95bc696395bc395856eda80a47f374491e46a381e05bc82dfa570f9c586b92e23682bda75c7ce8f05414f789df8a30faa4b6132efed7723ddeae8203224d7af255a2f37e6a2f780cd7d5cd07b4fa56b13961b13" '

          }
          if (BRANCH_NAME == 'stage') {
            DEPLOYMENT_ENV = 'stg'
            KUBERNETES_PATH = 'kubernetes/stg'
            IMAGE_VERSION = GIT_COMMIT
            BUILD_ARGS = '--build-arg NEXT_PUBLIC_APP_NAME="klaim_website" --build-arg NEXT_PUBLIC_STRAPI_ENDPOINT="https://strapi.stg.klaim.ai" --build-arg NEXT_PUBLIC_STRAPI_API_ENDPOINT="https://strapi.stg.klaim.ai/api" --build-arg  NEXT_PUBLIC_STRAPI_TOKEN="4703b6805273a76fadad65749fe22254b9cf8a0187a37037a5d62270297610a9c1536006722fa7365e39698d715708bbd6196a4fd4d525d8ee321144a1089b182af7b86c2db009def0340e763c7fd1e58db3f072d8341e66ef238b0d178a7d2469b7199b08f1db40ae51575a449fe7ed7ddb5e2adb81c20619159681d453c808" '

          }
          echo "Environment set as ${DEPLOYMENT_ENV}. Image version: ${IMAGE_VERSION}"
        }
      }
    }

    stage("Build Docker Image and push to acr") {
      steps {
        script {
          withCredentials([string(credentialsId: 'acr_password', variable: 'acr_password')]) {
            sh """
              docker build  ${BUILD_ARGS} -t klaimregistry.azurecr.io/klaimregistry/${DEPLOYMENT_ENV}-klaim-website:"${IMAGE_VERSION}" .
              docker login klaimregistry.azurecr.io -u klaimregistry -p \'''$acr_password''\'
              docker push klaimregistry.azurecr.io/klaimregistry/${DEPLOYMENT_ENV}-klaim-website:${IMAGE_VERSION}
            """
          }
        }
      }
      }
      stage("Deploying to kubernetes") {      
            steps  {
                dir (KUBERNETES_PATH) {
                 sh """
                    kubectl apply -f ingress.yaml
                    kubectl apply -f deployment.yaml
                    kubectl -n  ${DEPLOYMENT_ENV} set image deployment ${DEPLOYMENT_ENV}-klaim-website ${DEPLOYMENT_ENV}-klaim-website=klaimregistry.azurecr.io/klaimregistry/${DEPLOYMENT_ENV}-klaim-website:${GIT_COMMIT}
                    """
                }
            }
        }         
    

   
  }
  post {
    always { 
      echo "One way or another, I have finished" 
      //deleteDir() /* clean up our workspace */ 
    } 
// trigger when successful 
    success { 
        echo "I succeeeded!" 
        slackSend (channel: "${env.SLACK_CHANNEL}", color: "${env.SLACK_COLOR_GOOD}", message: "*SUCCESS:* Job '${env.JOB_NAME} (${env.BUILD_URL})") 
    } 

    // trigger when failed 
    failure { 
        echo "I failed :(" 
        //currentBuild.rawBuild.getLog(10) 
        slackSend (channel: "${env.SLACK_CHANNEL}", color: "${env.SLACK_COLOR_DANGER}", message: "*FAILED:* Job '${env.JOB_NAME} (${env.BUILD_URL})") 
    } 

    // trigger when aborted 
    aborted { 
        echo "Build aborted!" 
        slackSend (channel: "${env.SLACK_CHANNEL}", color: "${env.SLACK_COLOR_WARNING}", message: "*ABORTED:* Job '${env.JOB_NAME} (${env.BUILD_URL})") 
    } 

  } 
}  