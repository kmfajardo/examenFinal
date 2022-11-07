# API - Funcion de Obtener Velocidad Inicial

La formula aplicada es: VI = VF - AT

1. VI  = velocidad inicial
2. VF  = velocidad final
3. A   = aceleracion
4. T   = tiempo

Tomar en cuenta el nombre de cada variable y la abreviacion, al igual que la formula.

#### AUTENTICACION con SANTUM
Uso de SANCTUM  para una autentificacion ligera para APIs y tambien para generar múltiples tokens API para la cuenta del usuario.
```
composer require laravel/sanctum
```

Luego se debe de publicar las migraciones que necesita para poder funcionar lo anterior.
```
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
```

### EndPoints
**(POST)** FOR .../api/register 
```
{
	"name": "Examen Final",
	"email": "web@gmail.com",
	"password": "abc12345"
}
```

De ser exitoso, se arroja el siguiente resultado:
```
{
    "data": {
        "name": "Examen Final",
        "email": "web@gmail.com",
        "updated_at": "2022-11-07T21:56:25.000000Z",
        "created_at": "2022-11-07T21:56:25.000000Z",
        "id": 1
    },
    "access_token": "1|BM3VbhQOYMdd48qA7haGzpUl9dV8nyvSLaY7acjl",
    "token_type": "Bearer"
}
```

Para realizar el inicio de sesion, se tiene el siguiente endpoint:
**(POST)** FOR .../api/login
```
{
	"email": "web@gmail.com",
	"password": "abc12345"
}
```

Para realizar la operacion aritmetica
**(POST)** FOR .../api/store
```
{
	"vFinal": "45.0",
	"vAcel": "9.85",
    "tiempo": "4.75"
}
```

