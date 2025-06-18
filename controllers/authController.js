const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Roles } = require('../models/rolesModel')
const { Usuario } = require('../models/usuarioModel');
const { Estados } = require('../models/estadoModel');
const { Viaticos } = require('../models/viaticoModel');
const { ViaticosDias } = require('../models/viaticosDiasModel');
const { Proyecto } = require('../models/proyectoModel');
const { TipoGasto } = require('../models/tipoGastoModel');
const { Solicitud } = require('../models/solicitudModel');
const { GastoViaje } = require('../models/gastoViajeModel');

require("dotenv").config();

exports.register = async (req, res) => {
    try {
        const { nombre, app, apm, email, password, id_rol } = req.body;

        if (!nombre || !app || !apm || !email || !password || !id_rol) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const existingUser = await Empleado.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "El correo ya está registrado" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await Empleado.create({
            nombre,
            app,
            apm,
            email,
            password: hashedPassword,
            id_rol
        });

        const token = jwt.sign(
            { id: newUser.id_empleado, email: newUser.email, id_rol: newUser.id_rol },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(201).json({
            message: "Empleado registrado exitosamente",
            usuario: newUser,
            token
        });
    } catch (error) {
        res.status(500).json({ message: "Error en el registro", error });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Correo y contraseña son requeridos" });
        }

        const user = await Empleado.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: "Empleado no encontrado" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }

        const token = jwt.sign(
            { id: user.id_empleado, email: user.email, id_rol: user.id_rol },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({
            message: "Inicio de sesión exitoso",
            token,
            usuario: user
        });
    } catch (error) {
        res.status(500).json({ message: "Error en el login", error });
    }
};