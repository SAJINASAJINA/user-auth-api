# User Authentication API

A backend REST API for user registration, login, and protected user profile access using JWT authentication.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Postman

## API Endpoints

### 1. Register User

**Method:** POST

**Endpoint:** `/api/auth/register`

**Request Body:**

```json
{
  "username": "sajina",
  "email": "sajina@example.com",
  "password": "Password@123"
}
```

**Success Response:**

```json
{
  "message": "User registered successfully",
  "user": {
    "id": "USER_ID",
    "username": "sajina",
    "email": "sajina@example.com"
  }
}
```

---

### 2. Login User

**Method:** POST

**Endpoint:** `/api/auth/login`

**Request Body:**

```json
{
  "email": "sajina@example.com",
  "password": "Password@123"
}
```

**Success Response:**

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

---

### 3. Get User Profile

**Method:** GET

**Endpoint:** `/api/auth/profile`

**Authorization:** Bearer Token

**Header:**

```text
Authorization: Bearer JWT_TOKEN
```

**Success Response:**

```json
{
  "message": "User information retrieved successfully",
  "user": {
    "id": "USER_ID",
    "username": "sajina",
    "email": "sajina@example.com"
  }
}
```

---

## Authentication

This API uses JWT (JSON Web Token) for authentication.

1. Register a new user.
2. Login using the registered email and password.
3. Copy the JWT token from the login response.
4. Use the token as a Bearer Token to access the User Profile API.

## Deployed API

https://user-auth-api-faub.onrender.com

## Source Code

https://github.com/SAJINASAJINA/user-auth-api

## Postman Documentation

[View Postman API Documentation](https://documenter.getpostman.com/view/40418796/2sBYB1PUP1)
