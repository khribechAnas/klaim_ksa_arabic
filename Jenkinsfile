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
          }
          if (BRANCH_NAME == 'stage') {
            DEPLOYMENT_ENV = 'stg'
            KUBERNETES_PATH = 'kubernetes/stg'
            IMAGE_VERSION = GIT_COMMIT
            BUILD_ARGS = '--build-arg APP_NAME="klaim_website" --build-arg STRAPI_ENDPOINT="https//strapi.stg.klaim.ai/api" --build-arg STRAPI_TOKEN="681cd31f3d55a7fc60e25e1b7c04d61fe20dd160fa6f617b989705deeac9a63ac2e6eca1d7ad69305f0a888a8765e645c0d112f8d92000687bc84a34c5c6aecbe9d675e5a42e1f60a52a1e5493d43e6f81afbe9c8a5ecedec5a2afc6f32216c7b6cc0d8641e54eb5ef41af135d96f7ce4dd9aace8ca9bbaf657a747a673f3210" '

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