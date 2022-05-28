
# Face Recognition based user registration system for increasing security of websites


## Table of Contents 
 
1. [ Description](#desc)
2. [ Usage ](#usage)
3. [ How to use? ](#HowToUse)
4. [ Dependencies ](#Dependencies)
5. [ Parts of the project ](#PartsOfTheProject)
6. [ How to run? ](#HowToRun)
7. [ API ](#API)
8. [ Packages Used ](#Packages)
9. [ Acknoledgements ](#Ack)
10. [ Screen Shots ](#SreenShots)
## Description

Everyday we visit websites which use email ID, password or OTP based systems for verification. There are people who still fall into traps and thefts hence making the websites and devices insecure than ever. Including a face recognition feature during the registration process and sign in process along with password hence adds an additional security to every website the user opens. 


## Usage

This project can be used to layer every important website with an additional security. Once an ID is created only the sign in page would appear on the layer of the website. Through this process the user can use their email, password and their face for verification process. 

The current face clicked is compared to the one in database which was used while registering the user. Currently there isn't an option to reset password or the image captured. It can only be accessed by the administrator handling the database. 


## How to use?

1. Register with a valid email ID, password and your face which can be used later for recognition. 
2. Sign In using the email ID and password used. 
3. Reach the website you want to use. 
-----------------------------------------------
**Register**

1. Input full name
2. Input email ID
3. Input password
4. Click on ```click my photo``` to send photo 
5. Click on Register
------------------------------------------------
**Sign In**

1. Input email ID
2. Input password
3. Click on ```click my photo``` to send photo to API
4. Click on Sign
/
_Make sure you don't click on sign in/register before clicking photo_ /


## Dependencies

The project needs the following installations 

- npm 
- pip
- node js 
- react js 
## Parts of the project

There are three parts in the project

- Frontend : The front end of the project has been developed in react js. This is client side of the project which is visible to the user
- Severside/backend: The backend of the project has been developed using node js. The database that has been used is mongoDB. This part of the project is for handling the database i.e. putting data in the database or extracting data from the database
- API : The API has been developed using flask. The API takes in json file as input and returns 1 or 0 depending on the face if the face has been recognized or not. This uses deepface face recognition.   


## How to run?

1. Clone the first repository: Engage-Frontend 
```git clone "" ```

2. Clone the second repository: Engage-Server
```git clone "" ```

3. Clone the third repository: Engage-API
```git clone "" ```

4. Run ```npm install``` in Engage-Frontend

5. Run ```npm install``` in Engage-Server

6. Run ```pip install``` in Engage API 

7. Once all the installations are done: 
- In Engage-Server, run ```node index.js```
- In Engage-API, run ```flask run```
- In Engage-Frontend run ```npm start```

8. Once, all the three repositories are up and running: 
- The front end will run on ```PORT 3000```
- The server side or back end will run on ```PORT 5001```
- The API will run on ```http://127.0.0.1:5000```


## API

The API has been developed in Python using the flask framework. It uses deepface model. 
The data is passed using JSON file, ```first``` is image1 from the sign in page and ```second``` is the image extracted from the database through the email associated. The response sent through the API is binary number i.e. 0 and 1. 
If response is ```1``` then the page is redirected to the main home page and shows recognition failed otherwsise. 


## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

## Running the project

- Flask API

![image](https://user-images.githubusercontent.com/25116462/170831669-224ff07b-adbe-486e-b96e-447f230b703b.png)

- Backend Server 

![image](https://user-images.githubusercontent.com/25116462/170831726-5ce77d75-901e-4f88-9bca-f7ba62ec793b.png)



##Screenshots

- Sign In

![image](https://user-images.githubusercontent.com/25116462/170831745-0e6b3246-81e6-44c3-a65c-bcb55527f607.png)

- Register 

![image](https://user-images.githubusercontent.com/25116462/170831762-df3718f9-dd21-403e-a748-d9509eb69f15.png)

- Homepage 

![image](https://user-images.githubusercontent.com/25116462/170831810-9e2d7652-5396-4ca6-aef0-9b85a55ebf46.png)




 

