# ✅ Community Engagement (Comments & Reactions)

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
