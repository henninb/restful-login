## Usage
Check out the branch you're interested in (i.e. which belongs to the video in my series you just watched), ```git clone``` it and thereafter run ```npm install```.

Make sure to also add your Mongo Atlas Admin Username to a nodemon.json file (which you have to create).

```
{
    "env": {
        "MONGO_ATLAS_PW": "YOUR_MONGO_USER_PW"
    }
}
```

yay mongodb-bin

curl -d '{"email":"henninb@gmail.com", "password":"pass"}' -X POST -H 'Content-Type: application/json' 'http://localhost:3000/user/signup'

curl -d '{"email":"henninb@gmail.com", "password":"pass"}' -X POST -H 'Content-Type: application/json' 'http://localhost:3000/user/login'
