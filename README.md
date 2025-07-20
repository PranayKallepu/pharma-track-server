# Pharma Track (MongoDB Backend)

Pharma Track is a backend system for managing pharmacy operations, including medicines, sales, invoices, customers, doctors, and user authentication. Built with Node.js, Express, and MongoDB, it provides RESTful APIs for efficient pharmacy management.

## Features

- User authentication (JWT-based)
- Medicine inventory management
- Sales and invoice tracking
- Customer and doctor management
- Pharmacy information management
- File upload support (e.g., for medicine images)

## Project Structure

```
pharma-track-mongodb/
├── config/            # Database configuration
├── controllers/       # Route controllers for business logic
├── middleware/        # Custom middleware (auth, uploads, etc.)
├── models/            # Mongoose models (MongoDB schemas)
├── routes/            # API route definitions
├── server.js          # Entry point
├── package.json       # Project metadata and dependencies
└── README.md          # Project documentation
```

## Setup & Installation

1. **Clone the repository:**

   ```bash
   git clone <repo-url>
   cd pharma-track-mongodb
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   - Create a `.env` file in the root directory.
   - Add your MongoDB URI and JWT secret:
     ```env
     MONGODB_URI=mongodb://localhost:27017/pharma-track
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```

4. **Start the server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000` by default.

## Usage

- Use tools like Postman or Insomnia to interact with the API endpoints.
- Register/login to obtain a JWT token for protected routes.
- Manage medicines, sales, customers, doctors, and invoices via the provided endpoints.

## API Endpoints

### Authentication

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive JWT

### Doctors

- `GET /api/doctors` — Get all doctors
- `POST /api/doctors` — Add a new doctor

### Sales

- `GET /api/sales` — Get all sales
- `POST /api/sales` — Add a new sale

### Invoices

- `GET /api/invoices` — Get all invoices
- `POST /api/invoices` — Add a new invoice

### Pharmacy Info

- `GET /api/pharmacy-info` — Get pharmacy information
- `POST /api/pharmacy-info` — Set pharmacy information (supports file upload for logo and signature)

### Customers

- `GET /api/customers` — Get all customers
- `POST /api/customers` — Add a new customer
- `PUT /api/customers/:id` — Update a customer by ID
- `DELETE /api/customers/:id` — Delete a customer by ID
- `GET /api/customers/:id` — Get a customer by ID

### Medicines

- `GET /api/medicines` — Get all medicines
- `POST /api/medicines` — Add a new medicine
- `PUT /api/medicines/:id` — Update a medicine by ID
- `DELETE /api/medicines/:id` — Delete a medicine by ID
- `GET /api/medicines/expired` — Get all expired medicines

All `/api` endpoints (except `/api/auth/*`) require a valid JWT token in the `Authorization` header.

## License

This project is licensed under the MIT License.
