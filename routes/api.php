<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/userlist', 'UserListController@index');
Route::get('/username/{user}', 'UserListController@findUser');

Route::post('/todo/create', 'ListsController@store');
Route::get('/todo/createItem/{id}', 'ListsController@edit');
Route::get('/todos', 'ListsController@index');


Route::post('/item/create', 'ItemsController@store');
Route::get('/items', 'ItemsController@index');
Route::get('/items/fromlist/{id}', 'ItemsController@findFromList');

Route::post('/register', 'AuthController@register');
Route::post('/login', 'AuthController@login');
Route::post('/logout', 'AuthController@logout');