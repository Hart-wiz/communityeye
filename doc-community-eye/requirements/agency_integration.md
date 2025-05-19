# ✅ Agency Integration

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
