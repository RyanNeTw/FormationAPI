
# API Reference
## Formation
#### Get all formations

```http
  GET /formation/list
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Create a formation

```http
  POST /formations/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` |**Required**. |
| `startDate`| `String` |**Required**.|
| `endDate`      | `string` | **Required**. |
| `maxParticipants`      | `int` | **Required**. |


#### Delete a formation

```http
  DELETE /formation/delete
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` |**Required**. |


#### Update a formation

```http
  DELETE /formation/update
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` |**Required**. |
| `name`      | `string` |**Required**. |
| `startDate`| `String` |**Required**.|
| `endDate`      | `string` | **Required**. |
| `maxParticipants`      | `int` | **Required**. |


## Participant
#### Get all Participants

```http
  GET /participants/list
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Create a formation

```http
  POST /participants/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `firstName`      | `string` |**Required**. |
| `lastName`| `String` |**Required**.|
| `company`      | `string` | **Required**. |
| `idFormation`      | `int` | **Required**. |


#### Delete a formation

```http
  DELETE /participants/delete
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` |**Required**. |


#### Update a formation

```http
  DELETE /participants/update
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` |**Required**. |
| `firstName`      | `string` |**Required**. |
| `lastName`| `String` |**Required**.|
| `company`      | `string` | **Required**. |
| `idFormation`      | `int` | **Required**. |

