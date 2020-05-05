pipeline {
   agent any
   parameters{
     choice(name:'BRANCH_NAME',
      choices:'master\ndevelopment\nstaging',
      description:'choose the branch to build and deploy')
   }
   stages {
    stage('Dependencies') {
     steps {
        echo  'Installing dependencies ....'
        dir("${env.WORKSPACE}/RaisedApp"){
            sh 'npm install'
        }
     }
   }
    stage('Build') {
     steps {
        echo 'Building...'
        echo "Running ${env.BUILD_ID} ${env.BUILD_DISPLAY_NAME} on ${env.NODE_NAME} and JOB ${env.JOB_NAME}"
        dir("${env.WORKSPACE}/RaisedApp"){
            sh 'ng build --aot'
        }
    }
   }
   stage('Test') {
     steps {
        dir("${env.WORKSPACE}/RaisedApp"){
            sh 'npm test'
        }
     }
   }
   stage('Lint') {
     steps {
        dir("${env.WORKSPACE}/RaisedApp"){
            sh 'npm run lint'
        }
     }
   }

   stage('Deploying') {
     steps {
        dir("${env.WORKSPACE}/RaisedApp"){
          script {
              if (env.BRANCH_NAME == 'master') {
                  echo 'Deploying master'
                  sh 'sudo cp -r dist /home/systems/server/public/ariseApp'
                  sh 'sudo cp -r server.js /home/systems/server/public/ariseApp'
                  sh 'sudo cp -r node_modules /home/systems/server/public/ariseApp'
              } else if (env.BRANCH_NAME == 'development') {
                  echo 'Deploying development'
                  sh 'sudo cp -r dist /home/systems/server/public/ariseAppDev'
                  sh 'sudo cp -r server.js /home/systems/server/public/ariseAppDev'
                  sh 'sudo cp -r node_modules /home/systems/server/public/ariseAppDev'
              }else {
                  echo 'Deploying staging'
                  sh 'sudo cp -r dist /home/systems/server/public/ariseAppStg'
                  sh 'sudo cp -r server.js /home/systems/server/public/ariseAppStg'
                  sh 'sudo cp -r node_modules /home/systems/server/public/ariseAppStg'
              }
          }
        }
     }
   }
    stage('') {
     steps {
        dir("${env.WORKSPACE}/RaisedApp"){
            sh 'npm run lint'
        }
     }
   }
  }
}
