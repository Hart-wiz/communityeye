# ✅ Government Announcements & Voting

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
