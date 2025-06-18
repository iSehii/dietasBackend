
# 🧑‍💼 Sistema de Autenticación con Sequelize, JWT y Bcrypt

Este repositorio implementa un sistema básico de **registro e inicio de sesión** para empleados, utilizando:

- Sequelize como ORM
- JWT para autenticación
- Bcrypt para encriptar contraseñas
- Express.js como framework backend

---

## 🚀 Tecnologías

- Node.js
- Express.js
- Sequelize
- MySQL
- JWT (jsonwebtoken)
- Bcrypt.js
- Dotenv

---

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/iSehii/dietasBackend.git
   cd dietasBackend
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Crea un archivo `.env`**
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=tu_password
   DB_NAME=nombre_base_datos
   DB_PORT=3306
   JWT_SECRET=una_clave_secreta_segura
   ```

4. **Configura tu base de datos MySQL**

   Sequelize gestiona las tablas y las consultas

5. **Ejecuta el proyecto**
   ```bash
   npm start
   ```

   Esto iniciará tu servidor en modo desarrollo con nodemon.

---

## 📋 Rutas disponibles

### POST `/auth/register`

Registra a un nuevo empleado.

**Body requerido:**
```json
{
  "nombre": "Juan",
  "app": "Pérez",
  "apm": "Ramírez",
  "email": "juan@example.com",
  "password": "123456",
  "id_rol": 1
}
```

**Respuesta:**
```json
{
  "message": "Empleado registrado exitosamente",
  "usuario": { ... },
  "token": "jwt-token-aqui"
}
```

---

### POST `/auth/login`

Inicia sesión con correo y contraseña.

**Body requerido:**
```json
{
  "email": "juan@example.com",
  "password": "123456"
}
```

**Respuesta:**
```json
{
  "message": "Inicio de sesión exitoso",
  "token": "jwt-token-aqui",
  "usuario": { ... }
}
```

---

## 🔐 Protección con JWT

- Cuenta con proteccipon con Json Web Token

---

## 🧠 Notas

- Asegúrate de tener tu base de datos y tablas creadas antes de probar el backend.
- No subas tu `.env` ni tokens al repositorio público.
- JWT tiene un tiempo de expiración de 1 hora (puedes configurarlo).

---

## 📜 Licencia

Este proyecto está bajo la licencia MIT.
