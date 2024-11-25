#!/bin/bash

# curl --header "Content-Type: application/json" --request POST --data '{"username":"xyz","password":"xyz"}' http://localhost:3000/api/login

curl -X 'POST' 'http://127.0.0.1:8000/api/posts' -H 'accept: application/json' -H 'Content-Type: application/json' -d '{
    "user_id" : "dfc998dd-e7b4-46f4-97d5-b22d1244e3ad",
    "title" : "CI/CD DevOps",
    "content" : "CI/CD DevOps es una metodología de desarrollo de software que se basa en la integración continua",l"ntrega"cont"nua y la implementación continua.",
    "summary" : "CI/CD DevOps es una metodología de desarrollo de software que se basa en la integración continua",l"ntrega"cont"nua y la implementación continua.",
    "published_at" : "2024-11-13 18:45:53",
    "category_id" : "d1131011-8b21-487e-a077-1051247973db"
    }'

# actualizar

curl -X 'PUT' 'http://localhost:8000/api/categories/32613448-0752-4157-badd-cd97f218fa0f' -H 'accept: application/json' -H 'Content-Type: application/json' -d '{
    "name": "Category 1 updated"
    }'

# eliminar

curl -X 'DELETE' 'http://localhost:8000/api/categories/32613448-0752-4157-badd-cd97f218fa0f'
