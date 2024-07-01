<div align='center'>

<h4> <a href=https://skiquiz.netlify.app/>View Demo</a> <span> · </span> <a href="https://github.com/fhatti/skiquiz/blob/master/README.md"> Documentation </a> <span> · </span> <a href="https://github.com/fhatti/skiquiz/issues"> Report Bug </a> <span> · </span> <a href="https://github.com/fhatti/skiquiz/issues"> Request Feature </a> </h4>


</div>

## :star2: About the Project
Ski-Quiz is an interactive quiz game where players answer questions about various ski resorts. The questions cover topics such as the elevation of the resort, the number of slopes, or the snow conditions. Players’ answers are tracked, and their score is displayed at the end of the quiz.
### :space_invader: Tech Stack
![React](https://img.shields.io/badge/-React-%23404d59?style=for-the-badge&logo=react)&nbsp;
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)&nbsp;
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)&nbsp;
![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)&nbsp;
![Tailwindcss](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)&nbsp;


### :key:  Environment Variables
To run this project, you will need to add the following environment variables to your .env file

`VITE_API_KEY`

`VITE_AUTH_DOMAIN`

`VITE_DATABASE_URL`

`VITE_PROJECT_ID`

`VITE_STORAGE_BUCKET`

`VITE_MESSAGE_SENDER_ID`

`VITE_APP_ID`

```
Where to Use Environment Variables
The environment variables listed above are used in the Firebase configuration within your project, specifically in the firebaseClient.js file located in the services directory.
```
For more information on how to get these environment variables, visit the <a href="https://firebase.google.com/docs/database/web/start">Firebase Documentation.
</a>.

 ### :gear: How To Run:

- Clone the repository:
```bash
git clone https://github.com/fhatti/skiQuiz.git
```

### ⚡ Non-containerised
1. Install dependencies
```bash
npm i
npm tailwindcss init
```
2. Run it locally
```bash
npm run dev
```


### 🐳  Containerised 

1. Build the image
```bash
docker build .
```
2. Run the container
```bash
docker run -d -p 8080:8080 your_image
```


## :handshake: Contact

Vlad - - purcariuvlad99@gmail.com

Project Link: [https://github.com/fhatti/skiQuiz](https://github.com/fhatti/skiQuiz)
