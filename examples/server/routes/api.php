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
Route::apiResource('categories', CategoryController::class);
Route::apiResource('like', LikeController::class);
Route::apiResource('posts', PostController::class);
Route::apiResource('posts-tag', PostTagController::class);
Route::apiResource('view', ViewController::class);
Route::apiResource('posts', PostController::class);
