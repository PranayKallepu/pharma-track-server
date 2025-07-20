# Pharma Track API Documentation

This document provides detailed information about all available API endpoints, required headers, and sample requests/responses for the Pharma Track backend.

---

## Authentication

Most endpoints require a valid JWT token in the `Authorization` header:

```
Authorization:  <your_jwt_token>
```

Only `/api/auth/register` and `/api/auth/login` are public.

---

## Endpoints

### 1. Authentication

#### Register

- **URL:** `/api/auth/register`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "username": "johndoe",
    "password": "yourpassword"
  }
  ```
- **Sample Response:**
  ```json
  {
    "success": true,
    "message": "User registered successfully"
  }
  ```

#### Login

- **URL:** `/api/auth/login`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "username": "johndoe",
    "password": "yourpassword"
  }
  ```
- **Sample Response:**
  ```json
  {
    "success": true,
    "message": "Login successful",
    "token": "<JWT Token>"
  }
  ```

---

### 2. Doctors

#### Get All Doctors

- **URL:** `/api/doctors`
- **Method:** `GET`
- **Headers:** `Authorization: Bearer <jwt_token>`
- **Sample Response:**

```json
[
  {
    "_id": "687be7647034c702f78c29e9",
    "doctorName": "Dr. Arjun", ...
  },
  {
      "_id": "687be7647034c702f78c29e9",
    "doctorName": "Dr. Das", ...
  }
]
```

#### Add Doctor

- **URL:** `/api/doctors`
- **Method:** `POST`
- **Headers:** `Authorization: Bearer <jwt_token>`, `Content-Type: application/json`
- **Body:**
  ```json
  {
    "firstName": "Amit",
    "lastName": "Verma",
    "mobile": "9876543210",
    "email": "amitverma@example.com",
    "licenseNo": "LIC123456",
    "city": "Mumbai",
    "pinCode": "400001",
    "address": "123 Marine Drive"
  }
  ```
- **Sample Response:**
  ```json
  {
    "success": true,
    "message": "Doctor added successfully",
    "doctorId": "687be9b672ddafe69a475fdf"
  }
  ```

---

### 3. Sales

#### Get All Sales

- **URL:** `/api/sales`
- **Method:** `GET`
- **Headers:** `Authorization: Bearer <jwt_token>`
- **Sample Response:**

```json
[
  {
  "_id": "687be7647034c702f78c29e9",
  "customerId": "687be859f55c932cedea8fff",
  "doctorId": "687be9b672ddafe69a475fdf",
  "medicineId": "687be7647034c702f78c29e9",
  "quantity": 2,
  "discount": 5, ...
  }, ...
]
```

#### Add Sale

- **URL:** `/api/sales`
- **Method:** `POST`
- **Headers:** `Authorization: Bearer <jwt_token>`, `Content-Type: application/json`
- **Body:**
  ```json
  {
    "customerId": "687be859f55c932cedea8fff",
    "doctorId": "687be9b672ddafe69a475fdf",
    "medicineId": "687be7647034c702f78c29e9",
    "quantity": 2,
    "discount": 5,
    "amount": 95,
    "billingDate": "2025-07-20T06:43:22.825Z"
  }
  ```
- **Sample Response:**
  ```json
  {
    "success": true,
    "message": "Sale recorded successfully",
    "sale_id": "687c9bc110f0d77937f4400c"
  }
  ```

---

### 4. Invoices

#### Get All Invoices

- **URL:** `/api/invoices`
- **Method:** `GET`
- **Headers:** `Authorization: Bearer <jwt_token>`

#### Add Invoice

- **URL:** `/api/invoices`
- **Method:** `POST`
- **Headers:** `Authorization: Bearer <jwt_token>`, `Content-Type: application/json`
- **Body:**
  ```json
  {
    "PharmacyInfoId": "687c9745c570b4dc3754d3a7",
    "customerId": "687be859f55c932cedea8fff",
    "doctorId": "687be9b672ddafe69a475fdf",
    "itemDescription": "Paracetamol 500mg - 2 strips",
    "quantity": 2,
    "unitPrice": 50.0,
    "totalAmount": 100.0,
    "taxAmount": 5.0,
    "discount": 10,
    "payment": "cash"
  }
  ```
- **Sample Response:**
  ```json
  {
    "status": true,
    "message": "Invoice created successfully",
    "invoiceId": "687c9745c570b4dc3754d3a7"
  }
  ```

---

### 5. Pharmacy Info

#### Get Pharmacy Info

- **URL:** `/api/pharmacy-info`
- **Method:** `GET`
- **Headers:** `Authorization: Bearer <jwt_token>`

#### Set Pharmacy Info

- **URL:** `/api/pharmacy-info`
- **Method:** `POST`
- **Headers:** `Authorization: Bearer <jwt_token>`,
  `Content-Type: multipart/form-data`
- **Body:**

```json
{
  "pharmacyName": "MedPlus Pharmacy",
  "pharmacistName": "Dr. Anjali Rao",
  "gstn": "27ABCDE1234F1Z5",
  "pan": "ABCDE1234F",
  "storePhone": "9876543210",
  "storeEmail": "support@medplus.com",
  "address": "12-3-45, High Street Road",
  "area": "Ameerpet",
  "city": "Hyderabad",
  "pinCode": "500016",
  "logo": "logo.png", // as file
  "signature": "sign.png" // as file
}
```

- **Sample Response:**
  ```json
  {
    "status": true,
    "message": "Pharmacy info updated",
    "pharmacyInfoId": "687c9745c570b4dc3754d3a7"
  }
  ```

---

### 6. Customers

#### Get All Customers

- **URL:** `/api/customers`
- **Method:** `GET`
- **Headers:** `Authorization: Bearer <jwt_token>`

#### Add Customer

- **URL:** `/api/customers`
- **Method:** `POST`
- **Headers:** `Authorization: Bearer <jwt_token>`, `Content-Type: application/json`
- **Body:**
  ```json
    {
    "customerName": "Teja Rao",
    "discount": "10"
    "mobile": "9876543211",
    "address": "Warangal",
    "billName": "Teja R.",
    "billingType": "Cash",
    "doctorName": "Dr. Arjun"
    }
  ```
- **Sample Response:**
  ```json
  {
    "status": true,
    "message": "Customer added successfully",
    "customerId": "687be859f55c932cedea8fff"
  }
  ```

#### Update Customer

- **URL:** `/api/customers/:id`
- **Method:** `PUT`
- **Headers:** `Authorization: Bearer <jwt_token>`, `Content-Type: application/json`
- **Body:**
  ```json
  {
    "doctorName": "Dr. Arjun Das"
  }
  ```
- **Sample Response:**
  ```json
    {
    "success": true,
    "message": "Customer updated successfully",
    "updatedCustomer": {
        "_id": "687be859f55c932cedea8fff",
        "customerName": "Teja Rao",...
    }
    }
  ```

#### Delete Customer

- **URL:** `/api/customers/:id`
- **Method:** `DELETE`
- **Headers:** `Authorization: Bearer <jwt_token>`
- **Sample Response:**
  ```json
  {
    "message": "Customer deleted successfully"
  }
  ```

#### Get Customer by ID

- **URL:** `/api/customers/:id`
- **Method:** `GET`
- **Headers:** `Authorization: Bearer <jwt_token>`
- **Sample Response:**
  ```json
  {
  "_id": "687be859f55c932cedea8fff",
  "customerName": "Teja Rao",
  "address": "Warangal", ...
  }
  ```

---

### 7. Medicines

#### Get All Medicines

- **URL:** `/api/medicines`
- **Method:** `GET`
- **Headers:** `Authorization: Bearer <jwt_token>`
- **Sample Response:**
  ```json
  [
    {
      "_id": "687be7647034c702f78c29e9",
      "medicineName": "Paracetamol", ...
    }
    {
        "_id": "687be7647034c702f78c29e9",
      "medicineName": "Dolo", ...
    }
  ]
  ```

#### Add Medicine

- **URL:** `/api/medicines`
- **Method:** `POST`
- **Headers:** `Authorization: Bearer <jwt_token>`, `Content-Type: application/json`
- **Body:**
  ```json
  {
    "medicineName": "Paracetamol",
    "manufacturer": "NewCorporation",
    "batchNo": "A99",
    "expiryDate": "2023-07-18",
    "quantity": 60,
    "price": 30,
    "addedAt": "2025-07-19T18:43:48.943Z"
  }
  ```
- **Sample Response:**
  ```json
  {
    "status": true,
    "message": "Medicine added successfully",
    "medicineId": "687be7647034c702f78c29e9"
  }
  ```

#### Update Medicine

- **URL:** `/api/medicines/:id`
- **Method:** `PUT`
- **Headers:** `Authorization: Bearer <jwt_token>`, `Content-Type: application/json`
- **Body:**
  ```json
  {
    "medicineName": "Paracetamol Updated",
    "expiryDate": "2025-01-01"
  }
  ```
- **Sample Response:**
  ```json
  {
    "message": "Medicine updated successfully"
  }
  ```

#### Delete Medicine

- **URL:** `/api/medicines/:id`
- **Method:** `DELETE`
- **Headers:** `Authorization: Bearer <jwt_token>`
- **Sample Response:**
  ```json
  {
    "message": "Medicine deleted successfully"
  }
  ```

#### Get Expired Medicines

- **URL:** `/api/medicines/expired`
- **Method:** `GET`
- **Headers:** `Authorization: Bearer <jwt_token>`
- **Sample Response:**
  ```json
  [
    {
      "_id": "...",
      "medicineName": "ExpiredMed",
      "expiryDate": "2022-01-01"
    }, ...
  ]
  ```

---

## Error Responses

- All error responses are returned in JSON format:
  ```json
  {
    "error": "Error message here."
  }
  ```

---

## Notes

- All `/api` endpoints (except `/api/auth/*`) require a valid JWT token.
- Use `Content-Type: application/json` for all POST/PUT requests unless uploading files.
- For file uploads, use `multipart/form-data`.
