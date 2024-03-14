# Invoice Generator PDF

## Description

Invoice Generator PDF is a Node.js application that generates PDF invoices. It utilizes Express.js for the server-side framework, Mongoose for MongoDB object modeling, and other libraries for various functionalities.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB

## Installation

1. Clone the repository:


2. Navigate to the project directory:


## Configuration

1. Create a `.env` file in the root directory of the project.
2. Define the following environment variables in the `.env` file:


Replace `your_jwt_secret` with your own secret key for JSON Web Token (JWT) authentication.

## Usage

To start the application, run the following command: `npm start`


git clone https://github.com/username/invoice-generator-pdf.git

cd invoice-generator-pdf

npm install

Create a .env file in the root directory and define environment variables

Start the application
npm start



The application will be accessible at `http://localhost:xyz`.

## Additional Libraries/Tools Used

- Express.js: Web framework for Node.js
- Mongoose: MongoDB object modeling for Node.js
- dotenv: Load environment variables from a `.env` file
- jsonwebtoken: JSON Web Token implementation for authentication
- http-status-codes: Library for HTTP status codes

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
