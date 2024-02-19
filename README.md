# Todo App
This is a simple Todo application built using React.js, Django, Reactstrap, and Yup. It allows users to create new todos and view existing todos along with their status.

##Features
Create new todos with title, description, and status.
View existing todos with their current status.
Client-side validation using Yup.
Technologies Used
Frontend: React.js
Styling: Reactstrap
Validation: Yup
Backend: Django
API Communication: Axios

## etting Started
1. To run this application locally, follow these steps:
### git clone https://github.com/Collinsbrefo123/gwh-challenge-frontend.git

2. Navigate to the project directory:
### cd gwh-challenge-frontend

3. Install dependencies:
### npm install

4. Start the frontend development server:
### npm start

5. Ensure yotheur Django backend application is running and accessible.

### Usage
To create a new todo, enter the title, description, and status in the input fields and click the "Add Todo" button.
Existing todos will be displayed with their title, description, and status.
Status is displayed as a colored badge indicating the current status of the todo.
Styling
Styling for this application is done using Reactstrap, a library that provides Bootstrap components for React. The styling is kept simple and minimalistic for a clean user interface.

### Validation
Client-side validation is performed using Yup, a JavaScript schema validation library. It ensures that the input fields for creating a new todo are not empty and meet certain criteria before submission.

### API Communication
This application communicates with a Django backend to fetch and store todos. Axios is used for making HTTP requests to the Django API endpoints.