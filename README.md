# restful-login
```git clone``` it and thereafter run ```npm install```.

```
{
    "env": {
        "MONGO_ATLAS_PW": "YOUR_MONGO_USER_PW"
    }
}
```

## install mongo
```
yay mongodb-bin

db.student.find({})
show dbs
use local
show collections

show dbs
> use user_db
switched to db user_db
> show collections;
users
> db.users.find({})

```

## rest calls
```
curl -d '{"email":"henninb@gmail.com", "password":"pass"}' -X POST -H 'Content-Type: application/json' 'http://localhost:3000/user/signup'
curl -d '{"email":"henninb02@gmail.com", "password":"pass"}' -X POST -H 'Content-Type: application/json' 'http://localhost:3000/user/signup'

curl -d '{"email":"henninb@gmail.com", "password":"pass"}' -X POST -H 'Content-Type: application/json' 'http://localhost:3000/user/login'


curl -X DELETE -H 'Content-Type: application/json' -H "Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imhlbm5pbmJAZ21haWwuY29tIiwidXNlcklkIjoiNjIwOTU3OGU0NGI0NzE3MjA5NDkyOGU1IiwiaWF0IjoxNjQ0NzgxOTE1LCJleHAiOjE2NDQ3ODU1MTV9.rUbc2MrxQKO1RGKMR1SjqpQ5WUQm0S117dFYF43w0_8" 'http://localhost:3000/user/delete/620957d631cfc275f239f7f5'

```
