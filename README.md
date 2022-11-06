# API con NodeJS + MongoDB + JWT

# Crear usuario de base de datos MongoDB

```
db.createUser({user:"kfajardo", pwd:"user123", roles:[{role:"userAdmin", db:"tarea6"}]});
```

1. Instalar dependeicias

```
npm install
```

2. Configurar los parametros de base de datos en app/config/db.js

3. Iniciar el proyecto

```
npm start
```

4. Registrar un usuario para generar el token

```
http://127.0.0.1:9090/api/auth/signup

{
    "username": "Kimberlin",
    "password": "admin",
    "fullname": "K Fajardo",
    "email": "kf@hola.com",
    "roles": ["admin"]
}
```

5. Generar token

```
http://127.0.0.1:9090/api/auth/signin

POST
{
    "username": "Kimberlin",
    "password": "admin"
}
```

6. Consumir los otros endpoints
```
http://127.0.0.1:9090/api/math/initialV
```
