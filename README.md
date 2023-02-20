Simple web app where admin can create users & assign tasks to users also admin
would have the option to export “Users” & “Task” in an excel sheet.

1. There will be two tables Users & Tasks

2. Created a Form to add Users
   a. Structure of user table (Field of table "name","email","mobile","id")
   b. User add form fields
      i. Name
      ii. Email
      iii. Mobile
   c. NOTE: Added Email validation using Javascript & PHP
   d. NOTE: Added Mobile number validation using javascript & PHP (Regular expression)
   
3. Created a form to add Tasks for the User
   a. Form Fields
      i. Select box to select Users - All the users would fetched from database
      ii. Task Name
      iii. Task Type
          1. Pending
          2. Done
          
4. There is another button which will export all the Users & There tasks in an excel.
