# Authentication Controller

## Overview
This module serves as an authentication controller for an agriconnect application, handling user registration, login, and logout functionalities. It is designed to manage user credentials securely by issuing JSON Web Tokens (JWT) upon successful authentication, ensuring that user sessions are maintained effectively.

## How It Fits Together
The `register` function creates a new user and sends a token response upon successful registration. The `login` function validates user credentials and, if successful, also sends a token response. The `logout` function clears the user's session by responding with a success message. The `sendTokenResponse` helper function is utilized in both the `register` and `login` functions to generate and send the JWT along with user information.

## Configuration
| Variable | Purpose |
|----------|---------|

---

## API Reference

### `sendTokenResponse`
**Purpose** — Helper function to get a token from the model, create a cookie, and send a response.

**Parameters**  
| Name       | Type   | Required | Description                                      |
|------------|--------|----------|--------------------------------------------------|
| user       | null   | Yes      | The user object from which to create the token.  |
| statusCode | null   | Yes      | The HTTP status code to send in the response.    |
| res        | null   | Yes      | The response object to send the response.        |

**Behavior** — This function creates a JWT token using the user's information and constructs a user profile object. It then sends a JSON response with the token and user information, along with the specified HTTP status code.

**Usage** — 
```javascript
// In an Express route handler for user registration
exports.register = async (req, res, next) => {
  try {
    const { name, email, password, phone, userType } = req.body;

    // Create user
    const user = await User.create({
      name,
      email,
      password,
      phone,
      userType,
    });

    // Send token response
    sendTokenResponse(user, 201, res);
  } catch (error) {
    next(error);
  }
};
```
