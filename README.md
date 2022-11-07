# API con Laravel 9. 
Para realizar un API donde se pueda realizar una funcion de artimentica, con el cual se pueda hayar la velocidad inicial de un objeto.
La formula aplicada es: VI = VF - AT

1. VI  = velocidad inicial
2. VF  = velocidad final
3. A   = aceleracion
4. T   = tiempo

### Modo de autenticacion por Laravel/Sanctum
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

### Base de Datos MySQL
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravelDB
DB_USERNAME=userLaravel
DB_PASSWORD=lkshielsj384
```

# Resultado Final del API

1. **Intento de Usar el Endpoint de la Funcion Sin Estar Autenticado**
Si el usuario no esta autenticado, por medio de Sanctum no se le permite realizar la accion.
![No Authenticated](\assets\noAuth.png)

2. **Registro Necesario del Usuario Para Usar el API**
Segun la documentacion el usuario debe de proveer los datos necesarios para registrarse.
![Register](\assets\register.png)

3. **Luego de Registrarse, Iniciar Sesion**
Una vez el usuario se ha registrado, se debe de iniciar sesion.
![Login](\assets\login.png)

4. **Ajustar Postman con Bearer Token**
Una vez iniciada la sesion, se debe de ingresar el token obtenido para consumir el endpoint.
![Bearer Token](\assets\token.png)

5. **Ingreso de los Datos para las Variables**
Se debe de ingresar los datos para las variables, para ver funcionar la funcion metematica.
![Consuming API](\assets\ejemplo.png)

6. **Datos Guardados en la Base de Datos**
Se muestran las pruebas realizadas y los datos guardados en la base de datos.
![Data Saved](\assets\storedData.png)
