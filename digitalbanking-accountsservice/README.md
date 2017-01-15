# digitalbanking Account Microservice
Digital Banking Training

Get the maven project setup in eclipse

Run application.java from com.capg.accservices package

This is a spring boot application
It will run embedded tomcat container.

To run
java –jar accountservices-1.0.jar

To test, start postman app in chrome
http://localhost:8081/accservices/556678/accounts

You have to create db_account database in postgresql.
Use sql scripts to create the tables and insert the data.

To create docker image, run
start the Docker quickstart Terminal.
Then 
1. mvn package docker:build - This will create the docker image
2. docker-compose up - This will download all containers and run the tomcat instance.

