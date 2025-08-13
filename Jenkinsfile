pipeline {
    agent any

    environment {
        FRONTEND_IMAGE = 'frontend-app'
        BACKEND_IMAGE  = 'backend-app'
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/edwinsam10/my-fullstack-project.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                echo "Building frontend image..."
                sh 'docker build -t $FRONTEND_IMAGE ./frontend'

                echo "Building backend image..."
                sh 'docker build -t $BACKEND_IMAGE ./backend'
            }
        }

        stage('Run Containers') {
            steps {
                echo "Stopping old containers if exist..."
                sh 'docker rm -f frontend-container || true'
                sh 'docker rm -f backend-container || true'

                echo "Running frontend container on port 3000..."
                sh 'docker run -d --name frontend-container -p 3000:80 $FRONTEND_IMAGE'

                echo "Running backend container on port 5000..."
                sh 'docker run -d --name backend-container -p 5000:5000 $BACKEND_IMAGE'
            }
        }

        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }
    }
}
