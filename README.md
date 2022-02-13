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
```

## rest calls
```
curl -d '{"email":"henninb@gmail.com", "password":"pass"}' -X POST -H 'Content-Type: application/json' 'http://localhost:3000/user/signup'

curl -d '{"email":"henninb@gmail.com", "password":"pass"}' -X POST -H 'Content-Type: application/json' 'http://localhost:3000/user/login'
```
