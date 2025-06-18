
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
   git clone https://github.com/tu-usuario/mi-repo-autenticacion.git
   cd mi-repo-autenticacion
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

   Asegúrate de tener una base de datos creada y con las tablas necesarias. Puedes usar el archivo SQL incluido (`viajes.sql`).

5. **Ejecuta el proyecto**
   ```bash
   npm run dev
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

Puedes proteger rutas privadas usando un middleware como este:

```js
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token)
    return res.status(403).json({ message: "Token no proporcionado" });

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido" });
  }
};
```

---

## 🧠 Notas

- Asegúrate de tener tu base de datos y tablas creadas antes de probar el backend.
- No subas tu `.env` ni tokens al repositorio público.
- JWT tiene un tiempo de expiración de 1 hora (puedes configurarlo).

---

## 👨‍💻 Autor

**Sebastián Cervantes**  
Yucatán, México  
Desarrollador de Software

---

## 📜 Licencia

Este proyecto está bajo la licencia MIT.
