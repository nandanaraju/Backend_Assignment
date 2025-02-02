# User & Group Management API

## Overview
This is a RESTful API for managing users, groups, and notifications. It enables user profile creation, group management, and automatic notifications when a new member joins a group.

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ORM
- **Authentication:** JWT (Future enhancement)
- **Testing:** Postman (for API request validation)

## Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/nandanaraju/Backend_assignment.git
   cd Backend_assignment
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Create a `.env` file** and add MongoDB connection:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/task_backend
   ```
4. **Start the server:**
   ```sh
   node app.js
   ```

## API Endpoints
### User Management
| Method | Endpoint | Description |
|--------|------------------|-------------------------|
| POST | `/api/users` | Create a new user |
| GET | `/api/users` | Retrieve all users |
| PUT | `/api/users/:id` | Update a user's details |
| DELETE | `/api/users/:id` | Delete a user |

### Group Management
| Method | Endpoint | Description |
|--------|------------------------------|----------------------------------|
| POST | `/api/groups` | Create a new group |
| POST | `/api/groups/:groupId/addMember` | Add a member to a group |

### Notification Management
| Method | Endpoint | Description |
|--------|-----------------------------|--------------------------------|
| GET | `/api/notifications/:userId` | Retrieve notifications for a user |
| PUT | `/api/notifications/:id/read` | Mark notification as read |
| DELETE | `/api/notifications/:id` | Delete a notification |

## Scalability Considerations
- **Database Indexing:** Indexed `email` in User schema for fast lookups.
- **Microservices:** Separate User, Group, and Notification into independent services.
- **Caching:** Use Redis for frequent queries like user profile fetches.



## Testing with Postman
1. **Import Postman Collection**
2. **Replace `:id`, `:userId`, and `:groupId` with actual values**
3. **Run requests and validate responses**

## License
This project is licensed under the MIT License.
