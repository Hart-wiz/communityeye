# 🛰️ Community Eye

Community Eye is a civic-tech platform that connects citizens directly to government agencies. It allows users to report crimes, policy issues, infrastructure concerns, and more. The platform includes a robust geo-mapping system for community navigation, real-time alerts for early warnings, and public feedback features such as voting and commenting. Government agencies receive verified reports and can engage directly with the community through announcements and polls.

---

## 🎯 Objective

The backend for Community Eye supports a citizen reporting system, integrates real-time geolocation, and connects submissions to the appropriate government channels. It facilitates secure user interaction and enables real-time updates, feedback, and emergency alerts.

---

## 🚩 Project Goals

- **User Management:** Secure login, role-based access for users, moderators, and agency staff.
- **Issue Reporting:** Allow users to report crimes, public risks, infrastructure issues, or missing persons.
- **Geo-Mapping:** Provide an in-app map with area details, landmarks, and local rulers.
- **Early Warning System:** Enable urgent community alerts for weak structures or threats.
- **Community Engagement:** Voting, commenting, and reacting to public issues.
- **Government Interface:** Route sensitive reports to the correct agency and broadcast official messages.

---

## 👥 Team Roles

- **Frontend Developer:** Builds web and mobile interfaces using React and React Native.
- **Backend Developer:** Designs APIs, handles logic and data processing with Node.js.
- **Database Engineer:** Structures and optimizes the PostgreSQL database.
- **DevOps Engineer:** Manages deployments, environment setup, and monitoring.
- **QA Engineer:** Ensures features are working correctly across all roles and devices.

---

## 🧑‍💻 Technology Stack

- **Frontend (Web):** React
- **Frontend (Mobile):** React Native
- **Backend:** Node.js with Express.js
- **Database:** PostgreSQL
- **Media Storage:** Cloudinary
- **Maps:** Leaflet / Mapbox
- **Auth:** JWT

---

## 🗃️ Database Design

### Key Entities

#### 1. Users

- `id` (Primary Key)
- `name`, `email`, `password`
- `role`: 'user', 'admin', 'agency'

#### 2. Reports

- `id` (Primary Key)
- `title`, `description`, `category`
- `user_id` (Foreign Key)
- `location`, `media_url`
- `status`: pending, verified, resolved

#### 3. Comments

- `id` (Primary Key)
- `report_id` (Foreign Key)
- `user_id` (Foreign Key)
- `comment`, `timestamp`

#### 4. Reactions

- `id` (Primary Key)
- `report_id` (Foreign Key)
- `user_id` (Foreign Key)
- `type`: like, angry, sad

#### 5. Agencies

- `id` (Primary Key)
- `name`, `category`, `contact_email`

#### 6. Alerts

- `id` (Primary Key)
- `title`, `description`
- `location`, `category`
- `created_by`, `status`

#### 7. Votes

- `id` (Primary Key)
- `question`, `options[]`, `responses[]`

---

## 🔍 Feature Breakdown

### 1. User Authentication

- Secure JWT-based login and registration
- Role-based access: public users, admins, agency staff

### 2. Report Management

- Create, view, and filter public reports
- Upload images/videos via Cloudinary
- Geo-tag reports with location

### 3. Comments and Reactions

- Threaded comments under each post
- Reaction types: 👍, 😡, 😢

### 4. Early Warning System

- Specialized form for urgent, high-risk reports
- Routes to relevant agency dashboard for action

### 5. Map Integration

- Embedded map shows:
  - Current location
  - Wards, LGAs, landmarks
  - Traditional rulers' names (where applicable)

### 6. Admin & Agency Tools

- View reports by category
- Approve/flag/resolve reports
- Broadcast announcements to all users
- Create voting polls and collect results

---

## 🔐 API Security

- **Authentication:** JWT for protected routes
- **Authorization:** Role-based control for moderation and sensitive data
- **Rate Limiting:** Prevent abuse of public endpoints
- **Validation:** All inputs are sanitized before processing
- **HTTPS:** Enforced in production for secure data transmission

---

## ⚙️ CI/CD Pipeline

### What’s Used

- **GitHub Actions:** Test, lint, and deploy backend and frontend automatically
- **Docker:** Containers for Node.js backend and PostgreSQL
- **Docker Compose:** For running local dev environment
- **Cloudinary Testing:** Stub/mock uploads in CI environment

### Benefits

- Reliable deployments
- Consistent builds
- Faster iteration cycles
- Automated tests and lint checks

---

## 📎 Sample Endpoints

```http
POST /api/auth/register
POST /api/report
GET /api/report/:id
POST /api/report/:id/comment
POST /api/report/:id/reaction
POST /api/alert
GET /api/map/info/:location
POST /api/vote
```
