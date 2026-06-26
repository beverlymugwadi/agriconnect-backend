# Authentication Module for Agriconnect

## Overview
This module serves as the authentication controller for the Agriconnect application, providing essential user authentication functionalities such as registration, login, logout, and retrieving the current user's information. It ensures secure handling of user credentials and utilizes JSON Web Tokens (JWT) for session management, enhancing security through token signing and cookie management.

## How It Fits Together
The module typically starts with user registration via the `register` function, which creates a new user and sends a token response. Following registration, users can log in using the `login` function, which validates credentials and also sends a token response upon successful authentication. Once logged in, users can access their profile information through the `getMe` function and can log out using the `logout` function, which clears the session. The `sendTokenResponse` function is a helper that is called within both the registration and login processes to manage token creation and response formatting.

---

## API Reference

### `register` — POST /api/auth/register  ·  Public
**Purpose** — Register a user by creating a new account, as described in the comments and implemented in the source.

**Request**  
| Field     | Required |
|-----------|----------|
| name      | Yes      |
| email     | Yes      |
| password  | Yes      |
| phone     | Yes      |
| userType  | Yes      |

**Behavior & side effects** — Creates a new user in the database with the provided details and sends a token response upon successful registration.

**Usage**  
```javascript
router.post('/register', authController.register);
```

---

### `login` — POST /api/auth/login  ·  Public
**Purpose** — Log in a user by validating their credentials, as indicated in the comments and implemented in the source.

**Request**  
| Field    | Required |
|----------|----------|
| email    | Yes      |
| password | Yes      |

**Responses**  
| Status | Meaning                                      |
|--------|----------------------------------------------|
| 400    | Please provide an email and password         |
| 401    | Invalid credentials                           |

**Behavior & side effects** — Validates the provided email and password, checks for the existence of the user, and sends a token response if the credentials are valid.

**Usage**  
```javascript
router.post('/login', authController.login);
```

---

### `logout` — GET /api/auth/logout  ·  Private
**Purpose** — Log out a user and clear the authentication cookie, as described in the comments and implemented in the source.

**Responses**  
| Status | Meaning                |
|--------|------------------------|
| 200    | Successfully logged out |

**Behavior & side effects** — Clears the authentication cookie and responds with a success message.

**Usage**  
```javascript
router.get('/logout', authController.logout);
```

---

### `getMe` — GET /api/auth/me  ·  Private
**Purpose** — Retrieve the currently logged-in user's information, as indicated in the comments and implemented in the source.

**Responses**  
| Status | Meaning                  |
|--------|--------------------------|
| 200    | Successfully retrieved user data |

**Behavior & side effects** — Fetches the user data based on the authenticated user's ID and returns it in the response.

**Usage**  
```javascript
router.get('/me', authController.getMe);
```

---

### `sendTokenResponse`
**Purpose** — Helper function to generate a token, create a cookie, and send the response, as described in the comments and implemented in the source.

**Parameters**  
| Name         | Type     | Required | Description                                          |
|--------------|----------|----------|------------------------------------------------------|
| user         | Object   | Yes      | The user object containing user details               |
| statusCode   | Number   | Yes      | The HTTP status code to send in the response         |
| res          | Object   | Yes      | The response object to send the response to the client|

**Behavior & side effects** — Creates a JWT token for the user, constructs a user info object, and sends a JSON response containing the token and user information.

**Usage**  
```javascript
sendTokenResponse(user, 201, res);
```
