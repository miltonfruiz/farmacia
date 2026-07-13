# Sistema de Control de Caja Farmaceutica
## Stack
* Node.js
* Express
* MongoDB
* Docker

## Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Create a .env file with your MongoDB URI: `MONGO_URI=mongodb://localhost:27017`
4. Start the application: `npm start`

## Docker
1. Build the Docker image: `docker build -t sistema-de-control-de-caja-farmaceutica .`
2. Run the Docker container: `docker run -p 5000:5000 sistema-de-control-de-caja-farmaceutica`

## Endpoints
### API Endpoints
The following endpoints are available:
* **POST /api/auth/register**: Register a new user
* **POST /api/auth/login**: Login user
* **GET /api/auth/profile**: Get user profile (requires authentication)
* **PUT /api/auth/profile**: Update user profile (requires authentication)
* **GET /api/cash-register**: Get cash register (requires authentication)
* **POST /api/cash-register**: Create cash register (requires authentication)
* **GET /api/cash-register/:id**: Get cash register by id (requires authentication)
* **PUT /api/cash-register/:id**: Update cash register (requires authentication)
* **DELETE /api/cash-register/:id**: Delete cash register (requires authentication)
* **GET /api/medicines**: List medicines (requires authentication)
* **POST /api/medicines**: Create medicine (requires authentication)
* **GET /api/medicines/:id**: Get medicine by id (requires authentication)
* **PUT /api/medicines/:id**: Update medicine (requires authentication)
* **DELETE /api/medicines/:id**: Delete medicine (requires authentication)
* **GET /api/sales**: List sales (requires authentication)
* **POST /api/sales**: Create sale (requires authentication)
* **GET /api/sales/:id**: Get sale by id (requires authentication)
* **PUT /api/sales/:id**: Update sale (requires authentication)
* **DELETE /api/sales/:id**: Delete sale (requires authentication)

## Security
* All endpoints that require authentication use JSON Web Tokens (JWT) to verify user identity
* Passwords are hashed using bcrypt
* MongoDB URI is stored in a .env file and not committed to version control
* Docker image is built with a non-root user to reduce vulnerability to privilege escalation attacks
* Node.js and dependencies are kept up-to-date to ensure latest security patches are applied
* API uses HTTPS to encrypt data in transit

## Main Model
### Medicine
* **name**: String
* **price**: Number
* **quantity**: Number