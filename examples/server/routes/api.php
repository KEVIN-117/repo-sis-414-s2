<?php

use App\Http\Controllers\category\CategoryController;
use App\Http\Controllers\like\LikeController;
use App\Http\Controllers\post\PostController;
use App\Http\Controllers\post\PostTagController;
use App\Http\Controllers\view\ViewController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::apiResource('posts', PostController::class);

// http://127.0.0.1:8000/api/categories -> recupera todas las ctaegorias
// http://127.0.0.1:8000/api/categories/$id -> recupera una categoria por id
Route::apiResource('categories', CategoryController::class);
Route::apiResource('like', LikeController::class);
Route::apiResource('posts', PostController::class);
Route::apiResource('posts-tag', PostTagController::class);
Route::apiResource('view', ViewController::class);
Route::apiResource('posts', PostController::class);
Route::get('posts/slug/{slug}', [PostController::class, 'showBySlug']);
