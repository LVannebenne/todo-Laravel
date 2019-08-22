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
Route::middleware('cors')->group(function () {
    Route::middleware('auth:api')->get('/user', function (Request $request) {
        return $request->user();
    });

    Route::prefix('auth')->group(function () {
        Route::post('register', 'AuthController@register');
        Route::post('login', 'AuthController@login');
        Route::get('refresh', 'AuthController@refresh');

        Route::group(['middleware' => 'auth:api'], function () {
            Route::get('user', 'AuthController@user');
            Route::post('logout', 'AuthController@logout');
        });
    });

    Route::group(['middleware' => 'auth:api'], function () {
        // Users
        Route::get('users', 'UserController@index')->middleware('isAdmin');
        Route::get('users/{id}', 'UserController@show')->middleware('isAdminOrSelf');
    });
});

Route::post('/todo/create', 'ListsController@store');
Route::get('/todo/createItem/{id}', 'ListsController@edit');
Route::get('/todos', 'ListsController@index');


Route::post('/item/create', 'ItemsController@store');
Route::get('/items', 'ItemsController@index');
Route::get('/items/fromlist/{id}', 'ItemsController@findFromList');