# digitalbanking
Digital Banking Training

Git Help
Go to this directory
D:\workspace (If it does not exist, create it)

Install git client first.
Then,
git clone https://github.com/caprepo/digitalbanking.git

To remove from remote repository only
git rm --cached <filename> 
git rm --cached -r <dir_name> 
git commit -m "Removed folder from repository" 
git push origin master

How to avoid typing username everytime
$ git config credential.helper store
$ git push https://github.com/caprepo/digitalbanking.git
<username>
<password>

How to push your changes 
From directory D:\workspace\digitalbanking
git add .
git commit -m "add your comment"
git push https://github.com/caprepo/digitalbanking.git


Maven Help
From directory D:\workspace\digitalbanking
mvn clean install

How to run this
Do Maven Update and build digitalbanking-web

You also have to setup JDK 1.8 and Tomcat server in eclipse.

Add digitalbanking-web as a web application to run in Tomcat.
Configuration Path: https://github.com/caprepo/digitalbanking.git

Set port to 8081

Now type in
http://localhost:8081/digitalbanking-web/#/

You should see a login screen.
If you enter any character in login and enter password in password field, it will be success.
Anything else in password field, it will be a failed login.
