#YogaShare

######Author:  Eline Hermans
######Version: 1.0
######Date: January 2022

##Introduction

YogaShare is an application build for teachers and their students during the time of COVID. By using
this application they can share video's and keep connected as a community.

This project was developed in WebStorm using the React framework.

## Installation 

When starting the application the first time, run
*  ### `npm install`
in the terminal. This only has to be done once. This will install all the necessary dependencies to run this application.


After this, the application can be started any time using
* ### `npm start`
 This will start the server automatically on [http://localhost:3000](http://localhost:3000). If this is already in use, you may start it on another port. 


Please note that this project is made up of two parts. To successfully run this application, it must be run together with [YogaShare Backend](https://github.com/ayalena/yogashare-backend). Consult the installation guide there as well. 

Also note that this application still uses React Router Dom version 5.2.0. If you have the latest version installed, this might cause some problems using this application. Run

* ### `npm uninstall react-router-dom`
to de-install the version and run
* ### `npm install react-router-dom@5.2.0`
to install the version corresponding to this project.

## Usage
 
 In this application users can register and login to become a part of the YogaShare community. By doing so, they can watch video content which has been posted by certified teachers. The user details are collected in a database, in this case PostgreSQL. Their passwords and confidential data are encrypted and protected. Users can choose to add some additional details to their profile that is visible to others as well. 

Teachers have an admin role and are able to upload and delete videos. These are protected actions and can only be done by admins. Their data is encrypted and protected in the database as well. 

In a future version users will be able to comment on video's and save them to private lists in their profile. They will also be able to send each other messages, thus building the community aspect of the project further. 

Admins will be able to manage these comments and users further, and will be able to also share articles as a form of education. Besides this, audio files to facilitate meditation will be able to be uploaded. 



### Notice

YogaShare is made as a final assignment for Novi Hogeschool. Any used names or images are only for use
within this context and have no intent relation to the real world.

### Limitation notice

When starting the server for the first time, it might be necessary to refresh the page once. 

After logging in, refresh the page once to automatically go to your profile page. 





