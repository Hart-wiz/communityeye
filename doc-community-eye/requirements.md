# **Technical and Functional Requirement Specifications**

## For:

- **i. User Authentication**
- **ii. Civic Reporting**
- **iii. Early Warning System**
- **iv. Interactive Mapping**
- **v. Government Announcements & Voting**
- **vi. Community Engagement (Comments & Reactions)**
- **vii. Agency Integration**

**Project:** Community Eye

---

## ✅ 1. **User Authentication**

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

---

## ✅ 2. **Civic Reporting**

### 🔧 Functional Requirements

- Authenticated users can report:
  - Crimes
  - Infrastructure failure
  - Missing persons
  - Fraud
- Reports contain: title, description, location, media, category
- Automatic routing to relevant agency (e.g., EFCC, NAFDAC)

### 🌐 API Endpoints

#### `POST /api/v1/reports`

```json
{
  "title": "Collapsed Footbridge",
  "description": "Footbridge by Unity Road collapsed after rainfall.",
  "location": "Umuahia North",
  "category": "Infrastructure",
  "mediaUrl": "https://res.cloudinary.com/demo/image.jpg"
}
```

#### `GET /api/v1/reports`

- Filters: category, LGA, date
- Pagination: 15 per page

---

## ✅ 3. **Early Warning System**

### 🔧 Functional Requirements

- Users report **potential dangers** (e.g., leaking gas, unstable buildings)
- Alerts tagged as high priority
- Automatically sent to designated authority for verification

### 🌐 API Endpoints

#### `POST /api/v1/alerts`

```json
{
  "title": "Cracked Wall",
  "description": "Unstable wall at St. Theresa’s School",
  "category": "Structural Hazard",
  "location": "Aba South",
  "mediaUrl": "https://cloudinary.com/alert-image.jpg"
}
```

#### `GET /api/v1/alerts`

- Admin and agency view of all active alerts

---

## ✅ 4. **Interactive Mapping**

### 🔧 Functional Requirements

- Display user's location on map
- Show:
  - Nearby landmarks
  - Traditional rulers’ names
  - Public facilities
- Allow report submissions to be mapped
- Display geo-tagged reports as pins

### 🌐 API Endpoints

#### `GET /api/v1/map/info?lga=Arochukwu`

```json
{
  "lga": "Arochukwu",
  "wards": [...],
  "facilities": [...],
  "traditionalRuler": "Eze Kanu Oji"
}
```

### ⚙️ Performance Criteria

- Map loads < 1s
- Pin clustering enabled for high-density areas

---

## ✅ 5. **Government Announcements & Voting**

### 🔧 Functional Requirements

- Admin can send announcements to users
- Voting system to collect citizen feedback on:
  - New laws
  - Policies
  - Community issues

### 🌐 API Endpoints

#### `POST /api/v1/announcements`

```json
{
  "title": "New Waste Disposal Law",
  "content": "Waste must be disposed only on Tuesdays and Fridays.",
  "audience": "public"
}
```

#### `POST /api/v1/votes`

```json
{
  "question": "Should street lighting be prioritized in your area?",
  "options": ["Yes", "No", "Not Sure"]
}
```

#### `POST /api/v1/votes/:id/respond`

```json
{
  "option": "Yes"
}
```

---

## ✅ 6. **Community Engagement (Comments & Reactions)**

### 🔧 Functional Requirements

- Users can comment under any report
- Users can react with:
  - 👍 Like
  - 😠 Angry
  - 😢 Sad

### 🌐 API Endpoints

#### `POST /api/v1/reports/:id/comments`

```json
{
  "comment": "This needs urgent attention!"
}
```

#### `POST /api/v1/reports/:id/reactions`

```json
{
  "type": "angry"
}
```

---

## ✅ 7. **Agency Integration**

### 🔧 Functional Requirements

- Each agency has access to reports relevant to its role:
  - EFCC: Fraud
  - Police: Crimes
  - NAFDAC: Drug & food violations
- Admin can assign, escalate, or resolve reports

### 🌐 API Endpoints

#### `GET /api/v1/agency/reports?agency=police`

- Fetch reports tagged as “crime”

#### `PATCH /api/v1/reports/:id/status`

```json
{
  "status": "verified"
}
```

---

## 🏁 Final Notes

- All responses must be standardized using a global response handler
- Errors must be returned with appropriate HTTP codes and messages
- All endpoints must be protected with middleware for authentication and role validation where necessary

---

## 🔐 Security Standards

- HTTPS required for all environments
- Input validation on all endpoints (XSS, SQLi prevention)
- Rate limiting and logging on sensitive routes
- File uploads only via Cloudinary with size/type restrictions

---
