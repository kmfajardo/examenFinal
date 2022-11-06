<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //registrar usuarios
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors());
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()
            ->json([
                'data' => $user,'access_token' => 
                $token, 'token_type' => 
                'Bearer',
            ]);
    }

    //inicio de sesion
    public function login(Request $request)
    {
        if(!Auth::attempt($request->only('email', 'password'))){
            return response()
                ->json([
                    'message' => 'No Autorizado'
                ], 401);
        }

        $user = User::where('email', $request['email'])->firstOrfail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Sesion Iniciada correctamente, Bienvenid@ '.$user->name,
            'accessToken' => $token,
            'token_type' => 'Bearer',
            'user' => $user,
        ]);
    }

    //donde borra tokens y hace un logout al user
    public function logout()
    {
        auth()->user()->tokens()->delete();

        return [
            'message' => 'Sesion cerrada exitosamente.'
        ];
    }
}
