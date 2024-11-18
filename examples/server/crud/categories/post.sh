#!/bin/bash

# curl --header "Content-Type: application/json" --request POST --data '{"username":"xyz","password":"xyz"}' http://localhost:3000/api/login

curl -X 'POST' 'http://localhost:8000/api/categories' -H 'accept: application/json' -H 'Content-Type: application/json' -d '{
    "name": "Category 1",
    "description": "Category 1 description"
    }' -d '{
    "name": "Category 3",
    "description": "Category 3 description"
    }' -d '{
    "name": "Category 4",
    "description": "Category 4 description"
    }'

# actualizar

curl -X 'PUT' 'http://localhost:8000/api/categories/32613448-0752-4157-badd-cd97f218fa0f' -H 'accept: application/json' -H 'Content-Type: application/json' -d '{
    "name": "Category 1 updated"
    }'

# eliminar

curl -X 'DELETE' 'http://localhost:8000/api/categories/32613448-0752-4157-badd-cd97f218fa0f'
