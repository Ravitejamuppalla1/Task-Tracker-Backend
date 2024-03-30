1. Clone the repository:
   ```bash
   git clone https://github.com/Ravitejamuppalla1/Task-Tracker-Backend.git
2. Navigate to the backend folder:
   ```bash
      cd Task-Tracker-Backend
      cd Backend
3. Install dependencies:
     
          npm install
4. Run the application using nodemon:
       
            
             nodemon index.js

Technologies Used

     - Node.js
     - Express.js
     - MongoDB with Mongoose
     
     
Packages Used

     - bcryptjs: Used for hashing passwords.
     - dotenv: For loading environment variables.
     - jsonwebtoken: Used for creating and verifying JSON Web Tokens.
     - validator: Library for data validation.
     - cors: Middleware for enabling Cross-Origin Resource Sharing.

Project Structure

         /Backend
           /App
             /controllers
               - tasks_controller.js
               - users_controller.js
             /middlewares
               - authenticate.js
             /models
               - task.js
               - user.js
            /config
               - Database.js
               - Route.js
            /.env
            /.gitignore
            /index.js
  
     
   
  
   
