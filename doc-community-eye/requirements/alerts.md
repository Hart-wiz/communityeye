# ✅ Early Warning System

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
