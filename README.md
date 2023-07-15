# Techpolaris Full Stack Website

Welcome to the Techpolaris Full Stack Website repository! This project is a full stack web application built using React, React Router, Bootstrap for the frontend, and Django for the backend.

## Project Structure

The project is divided into two main directories: `frontend` and `backend`.

### Frontend

The `frontend` directory contains the client-side code, which is built using React and React Router. It utilizes Bootstrap for styling and responsive design. This directory consists of the following key files and directories:

- `public/`: Contains the static assets and HTML template for the application.
- `src/`: Contains the main source code of the React application.
  - `components/`: Holds reusable React components used throughout the application.
  - `pages/`: Contains the main pages of the application, each implemented as a React component.
  - `App.js`: The main entry point for the React application, where the routing and component structure are defined.
  - `index.js`: The entry point of the React application, where the application is rendered to the DOM.

### Backend

The `backend` directory contains the server-side code, implemented using Django. It handles the API endpoints and interacts with the database. The key files and directories within the `backend` directory include:

- `core/`: Contains the core Django settings and configurations.
- `api/`: Contains the Django app responsible for handling API endpoints.
  - `models.py`: Defines the database models used by the application.
  - `views.py`: Implements the API views and their corresponding logic.
- `manage.py`: The Django management script for running the server and managing database migrations.

## Getting Started

To get started with the Techpolaris Full Stack Website, follow the steps below:

1. Clone this repository to your local machine.

   ```shell
   git clone https://github.com/your-username/techpolaris-fullstack.git
   ```

2. Install the dependencies for the frontend. Navigate to the `frontend` directory and run the following command:

   ```shell
   cd frontend/
   npm install
   ```

3. Install the dependencies for the backend. Navigate to the `backend` directory and run the following command:

   ```shell
   cd ../backend/
   pip install -r requirements.txt
   ```

4. Start the frontend development server. In the `frontend` directory, run the following command:

   ```shell
   npm start
   ```

5. Start the Django development server. In the `backend` directory, run the following command:

   ```shell
   python manage.py runserver
   ```

6. Access the Techpolaris Full Stack Website by opening your browser and navigating to `http://localhost:3000`.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name for your feature or bug fix.
3. Implement your changes and ensure that they are working correctly.
4. Commit your changes and push them to your forked repository.
5. Open a pull request to the `main` branch of the original repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or feedback regarding the Techpolaris Full Stack Website, please contact our team at realfareslharbi@gmail.com.
