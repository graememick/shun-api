# solo-api

This was created during my time as a student at Code Chrysalis.

# API functionality

## Types of Requests
### GET
- Retrieves resources
### POST
- Creates new resources
### PUT
- Update existing resources
### DELETE
- Delete resources

## Retrieve all users

### Request

`GET /api/users`

### Example Response

    Status code: 200

     [
    {
        "id": 1,
        "email": "joni@example.com",
        "first_name": "Joni",
        "last_name": "Mitchell",
        "username": "Jmitch"
    },
    {
        "id": 3,
        "email": "karen@example.com",
        "first_name": "Richard",
        "last_name": "Carpenter",
        "username": "Thecarpenters"
    },
    {
        "id": 2,
        "email": "tands@example.com",
        "first_name": "Putney",
        "last_name": "Swope",
        "username": "Truthandsoul"
    }
     ]



  

## Retreive a single user by username
### Request

`GET /api/users/{username}`

### Example Response

    Status code: 200

     [
    {
        "id": 2,
        "email": "tands@example.com",
        "first_name": "Putney",
        "last_name": "Swope",
        "username": "Truthandsoul"
    }
     ]

  

## Create a new user

### Request

`POST /api/users`

### Example Response

        Status code: 200


## Update and existing resource

### Request

`PATCH /api/users/{username}`

### Example Response

        Status code: 204


## Delete a resource

### Request

`DELETE /api/users/{username}`

### Example Response

        Status code: 204

## Retreive a single single recipe by recipe name
### Request

`GET /api/recipes/{name}`

### Example Response

    Status code: 200

     {
    "id": 4,
    "user_id": 1,
    "name": "Pot-au-feu",
    "description": "Simple French soup",
    "entry_created": "2022-07-22T15:00:00.000Z",
    "entry_posted": null,
    "ingredients": [
        {
            "name": "Bacon",
            "unit": "grams",
            "amount": "170.00"
        },
        {
            "name": "Onions",
            "unit": "whole",
            "amount": "1.00"
        },
        {
            "name": "Carrots",
            "unit": "whole",
            "amount": "0.50"
        }
        ]
     }
