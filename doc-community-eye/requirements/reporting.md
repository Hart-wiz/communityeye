# ✅ Civic Reporting

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
