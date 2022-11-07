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

