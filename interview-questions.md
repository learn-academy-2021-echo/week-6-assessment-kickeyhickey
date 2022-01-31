# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: Since I have made this mistake, I can tell you that this is a fixable problem. The foreign key can be added by adding another column to your table and then using the name of your model and set it to the datatype 'interger'. "model_id" would be placed on the students model.

  Researched answer: Run the Rails command line in the terminal and then run 'rails generate migration model_id. The 'model' portion will be the name of the model you are adding the column to and the datatype should be set to integer. The foreign always goes on belongs_to side. 



2. Which RESTful routes must always be passed params? Why?

  Your answer: Patch and delete. Patch will allow the user to call on a certain requests to edit or replace. The Delete will allow a user to call on a request to be deleted. 

  Researched answer: Patch and delete. Each of these deals directly with data that's already been placed in the params hash. These values need saving or editing.



3. Name three rails generator commands. What is created by each?

  Your answer: db:create creates an empty database in your rails environment. The generate command creates and defines our coloumns/ datatypes in our new database table. db:migrate attaches our table to our database and creates the schema.

  Researched answer:



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    route: /students => students#index

action: "POST"   route: /students => students#create

action: "GET"    route: /students/new => students#new

action: "GET"    route: /students/2 => students#show

action: "GET"    route: /students/2/edit  =>  students#edit

action: "PATCH"  route: /students/2   =>  students#update

action: "DELETE" route: /students/2    => students#destroy  



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

User story: Once logged in, I see my home page set up
User story: The app has a header that contains a title and a hamburger menu that can be clicked on
User story: The body will contain a list of your current to-dos and a history of your finished tasks that have a limit of 10 items    for it's history
User story: I can click on a button that allows me to create a new task on another page
User story: On this new task page, I have a window I can click into to enter a new task
User story: As a user, I can input a due date just to the side of my new task
User story: There is a checkbox that allows me to add this task to a calendar app of my chosing
User story: Once finished, there is a submit button that can be pressed. This will add this task to my main list and bring me back to the home page.
User story: I can pin the most immediate tasks to the stop of my current list by clicking on the 'priority' box next to each task.
