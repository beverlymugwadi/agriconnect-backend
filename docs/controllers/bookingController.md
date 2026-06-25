# Booking Management

## Overview
This module serves as a booking controller for managing agriconnect bookings. Its primary purpose is to facilitate the creation and retrieval of bookings while ensuring that only authorized vendors and farmers can access certain functionalities. The design is centered around asynchronous operations that interact with various models, including Booking, Product, Vendor, and Notification, to handle the booking lifecycle and notify relevant parties.

## How It Fits Together
The `createBooking` function is the main entry point for creating a booking, which validates the product and vendor before calculating the total price and saving the booking. Upon successful creation, it generates a notification for the farmer associated with the product and emits this notification via a Socket.io instance to ensure real-time updates. The `getBookings` function allows authorized users to retrieve their bookings, with an option for admins to view all bookings in debug mode.

## Configuration
| Variable | Purpose |
|----------|---------|

---

## API Reference

### `getIO`
**Purpose** — Retrieves the io instance from the socket module, allowing for socket communication.

**Parameters** — Takes no parameters.

**Returns** — Returns the io instance from the socket module or `null` if the instance is not available.

**Behavior** — The function attempts to call `getIO` from the `socketModule`. If an error occurs during this process, it logs the error message and returns `null`.

**Usage** — This function can be used in scenarios where socket notifications need to be sent. For example, in the `createBooking` function, `getIO` is called to obtain the socket instance for emitting notifications to farmers when a new booking is created:

```javascript
const io = getIO();
if (io) {
  io.to(`farmer_${farmerUser._id}`).emit('newNotification', farmerNotification);
  io.to(`user_${farmerUser._id}`).emit('newNotification', farmerNotification);
} else {
  console.error('Socket.io instance not available for sending notification');
}
```
