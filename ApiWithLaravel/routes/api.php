<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\MathFunctionController;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//INICIO CON LAS RUTAS PARA INGRESAR Y CERRAR SESIONES
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);


//todas las rutas que se encuentren dentro, estaran protegidas
//necesitaran autenticacion y token por sanctun
Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('store', [MathFunctionController::class, 'store']);
});
