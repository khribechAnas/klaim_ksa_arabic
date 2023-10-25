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
            BUILD_ARGS = '--build-arg NEXT_PUBLIC_APP_NAME="klaim_website" '

          }
          if (BRANCH_NAME == 'stage') {
            DEPLOYMENT_ENV = 'stg'
            KUBERNETES_PATH = 'kubernetes/stg'
            IMAGE_VERSION = GIT_COMMIT
            BUILD_ARGS = '--build-arg NEXT_PUBLIC_APP_NAME="klaim_website" --build-arg NEXT_PUBLIC_STRAPI_TOKEN="b22d2c0e5f3c64cec025aaa7417714e8d33cb12d7448322404221f289fb30c1e64cf2401719a70fa31c4237a19f20b9c5ee85031642b267152c4041033e3c917a5ffa68375c902e9640780e16e2b8d3ac281e54a1ec3c52369f978bbf5d53ff6929e51422c3ffb31b81406bc86979af3556412be0cdffe48f51f9efc9fa62bc3" --build-arg NEXT_PUBLIC_STRAPI_ENDPOINT="https://strapi.stg.klaim.ai/api" --build-arg NEXT_PUBLIC_STRAPI_STATIC_ENDPOINT="https://strapi.stg.klaim.ai" '

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