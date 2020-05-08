# EHI-App
EHI App

Please refer below the folder structure of the Application

1. In src folder there is app folder in which different components and service is created.
2. There is a folder models which defines interface for the attributes which needs to be displayed,manipulated and the attributes here are firstname,lastname,email,phone no and status.The file name is user.ts which defines the data model.
3. There are three components created and those are navbar,users and user details with folder name as navbar,user-detail and users in app folder.
4. The navbar component is common for the headers which are imported in root file which is app module with the help of selector defined for the navbar component. We have used bootstrap to design the navbar component which has Patients and Patient details as a navbar option.
5. The users component has all the necessary operations to be performed on the users contact details such as create,read,update and delete which is depicted with buttons.
6. The user details component displays the list of users added,updated and deleted as per the operations performed in users component.
7. The routing for users and user details component is done in App routing module which is the bootstrap module for Angular.
8. We have created a service using command line of name user service which is inside services folder.
9. In the service folder we have defined logic for data manipulation for create,read,update and delete operations in functions.
10. Now this service has the service name which is imported in users and user detail component .ts file extension by creating the object for the service defining it in function and then calling that function at front end .html file extension which are users.component.html and user-detail.component.html.
11. Please note for designing we have used bootstrap to display the data on front end.

Steps to Run App

1. Clone the repository using git clone
2. Go to folder name by typing cd project name in command line
3. Please note if it displays the error for webkit then follow below commands to resolve the errors.
npm cache clean --force
npm update
npm install --save-dev @angular-devkit/build-angular
4. Now once done go to angular application by following below command:
cd ProjectName
5. Run the project by typing
ng serve --open
