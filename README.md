## For start write

In the project directory, you can run:

### `docker-compose buuild`
### `docker-compose up`

### Add db.json file

In server directory add db.json file and use this structure

### `Sctucture:`
    users: [
    {
      "email": "user1@gmail.com",
      "password": "pass",
      "username": "userFirst",
      "id": 1
    }], "films": [
    {
      "id": 1,
      "img": "joker.jpg",
      "text": "joker",
      "description": "asdasdad",
      "alt": "joker"
    }], "halls": [
    {
      "name": "Test",
      "row": 4,
      "column": 4,
      "id": 1
    }], "advertise": [
    {
      "img": "advertise.png",
      "alt": "advertise",
      "id": 1
    }], "seances": [
    {
      "id": 1,
      "date": "07/03/2022",
      "hall": "Test",
      "time": "10.30",
      "film"
    }]

### If you need photo to project add him in /src/image directory