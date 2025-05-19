# ✅ User Authentication

### 🔧 Functional Requirements

- Users register with name, email, and password
- Secure login with JWT token issuance
- Role-based access: public user, admin moderator, agency officer
- Passwords stored using hashing algorithm (e.g., bcrypt)

### 🌐 API Endpoints

#### `POST /api/v1/auth/register`

```json
{
  "name": "Uchenna Obi",
  "email": "uchenna@mail.com",
  "password": "StrongPass123"
}
```

#### `POST /api/v1/auth/login`

```json
{
  "email": "uchenna@mail.com",
  "password": "StrongPass123"
}
```

### ⚙️ Performance Criteria

- Max login response time: 500ms
- Token expires after 1 hour
- Max 5 login attempts per minute
