# ✅ Interactive Mapping

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
