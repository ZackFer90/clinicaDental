'use strict';
const bcrypt = require("bcrypt");
const contra = "12345";
const contra1 = "67890";
const encryptedContra = bcrypt.hashSync(contra, 10);
const encryptedContra1 = bcrypt.hashSync(contra1, 10);
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "usuarios",
      [
        {
          nombre: "admin",
          apellidos: "admin",
          fecha_nacimiento: "1990-01-01",
          email: "admin@gmail.com",
          contrasena: encryptedContra,
          telefono: "999999999",
          direccion: "C/admin",
          id_rol: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Pablo",
          apellidos: "Perez",
          fecha_nacimiento: "1973-03-15",
          email: "pablo@gmail.com",
          contrasena: encryptedContra,
          telefono: "786543290",
          direccion: "C/Falsa 123",
          id_rol: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Manu",
          apellidos: "Gonzalez",
          fecha_nacimiento: "1998-08-20",
          email: "Manuel@gmail.com",
          contrasena: encryptedContra1,
          telefono: "981893191",
          direccion: "C/Diagonal 38",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Pedro",
          apellidos: "García",
          fecha_nacimiento: "1988-06-21",
          email: "Pedro@gmail.com",
          contrasena: encryptedContra1,
          telefono: "611234567",
          direccion: "C/Mayor 1",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Ana",
          apellidos: "Rodrígez",
          fecha_nacimiento: "1998-03-15",
          email: "Ana@gmail.com",
          contrasena: encryptedContra1,
          telefono: "622345678",
          direccion: "Avda del Sol 15",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Manuel",
          apellidos: "López",
          fecha_nacimiento: "2003-04-20",
          email: "ManuelL@gmail.com",
          contrasena: encryptedContra1,
          telefono: "633456789",
          direccion: "Plaza España 7",
          id_rol: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "María",
          apellidos: "González",
          fecha_nacimiento: "1973-11-11",
          email: "Maria@gmail.com",
          contrasena: encryptedContra1,
          telefono: "644567890",
          direccion: "C/Real 3",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Juan",
          apellidos: "Martínez",
          fecha_nacimiento: "1992-02-22",
          email: "Juan@gmail.com",
          contrasena: encryptedContra1,
          telefono: "655678901",
          direccion: "Paseo Marítimo 20",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Laura",
          apellidos: "Fernández",
          fecha_nacimiento: "2002-12-23",
          email: "Laura@gmail.com",
          contrasena: encryptedContra1,
          telefono: "666789012",
          direccion: "Avda de la Libertad 12",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Antonio",
          apellidos: "Torres",
          fecha_nacimiento: "1978-02-13",
          email: "Antonio@gmail.com",
          contrasena: encryptedContra1,
          telefono: "677890123",
          direccion: "C/Gran Vía 5",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Isabel",
          apellidos: "Ramos",
          fecha_nacimiento: "1963-08-16",
          email: "Isabel@gmail.com",
          contrasena: encryptedContra1,
          telefono: "688901234",
          direccion: "C/Rambla 8",
          id_rol: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Jorge",
          apellidos: "Sánchez",
          fecha_nacimiento: "1996-06-20",
          email: "Jorge@gmail.com",
          contrasena: encryptedContra1,
          telefono: "699012345",
          direccion: "Plaza del Pilar 10",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Carolina",
          apellidos: "Jiménez",
          fecha_nacimiento: "1999-05-29",
          email: "Carolina@gmail.com",
          contrasena: encryptedContra1,
          telefono: "610123456",
          direccion: "Avenida Reina Victoria 12",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Eduardo",
          apellidos: "Vargas",
          fecha_nacimiento: "1982-11-11",
          email: "Eduardo@gmail.com",
          contrasena: encryptedContra1,
          telefono: "621234567",
          direccion: "C/San Juan 4",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Gabriela",
          apellidos: "Castillo",
          fecha_nacimiento: "1983-03-09",
          email: "Gabriela@gmail.com",
          contrasena: encryptedContra1,
          telefono: "632345678",
          direccion: "Avda Diagonal 25",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Luis",
          apellidos: "Medina",
          fecha_nacimiento: "1975-05-05",
          email: "Luis@gmail.com",
          contrasena: encryptedContra1,
          telefono: "643456789",
          direccion: "C/Alcalá 40",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Carmen",
          apellidos: "Paredes",
          fecha_nacimiento: "1991-10-06",
          email: "Carmen@gmail.com",
          contrasena: encryptedContra1,
          telefono: "654567890",
          direccion: "Paseo de la Castellana 85",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Raúl",
          apellidos: "Franco",
          fecha_nacimiento: "1997-03-30",
          email: "Raul@gmail.com",
          contrasena: encryptedContra1,
          telefono: "665678901",
          direccion: "Plaza Mayor 1",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Verónica",
          apellidos: "Navarro",
          fecha_nacimiento: "1978-08-20",
          email: "Veronica@gmail.com",
          contrasena: encryptedContra1,
          telefono: "676789012",
          direccion: "C/San Sebastián 6",
          id_rol: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Francisco",
          apellidos: "Ruiz",
          fecha_nacimiento: "1998-08-20",
          email: "Francisco@gmail.com",
          contrasena: encryptedContra1,
          telefono: "687890123",
          direccion: "C/Valencia 18",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Adriana",
          apellidos: "Mendoza",
          fecha_nacimiento: "1984-03-11",
          email: "Adriana@gmail.com",
          contrasena: encryptedContra1,
          telefono: "698901234",
          direccion: "C/Giralda 3",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Óscar",
          apellidos: "Ortega",
          fecha_nacimiento: "1990-08-13",
          email: "Oscar@gmail.com",
          contrasena: encryptedContra1,
          telefono: "609012345",
          direccion: "Avda de la Constitución 9",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Natalia",
          apellidos: "Hernández",
          fecha_nacimiento: "1981-09-08",
          email: "Natalia@gmail.com",
          contrasena: encryptedContra1,
          telefono: "620123456",
          direccion: "Paseo de Gracia 22",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Andrés",
          apellidos: "Valencia",
          fecha_nacimiento: "1986-01-06",
          email: "Andres@gmail.com",
          contrasena: encryptedContra1,
          telefono: "631234567",
          direccion: "Plaza Catalunya 5",
          id_rol: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Alejandra",
          apellidos: "Salazar",
          fecha_nacimiento: "1989-10-21",
          email: "Alejandra@gmail.com",
          contrasena: encryptedContra1,
          telefono: "642345678",
          direccion: "C/Serrano 7",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Guillermo",
          apellidos: "Silva",
          fecha_nacimiento: "1974-11-12",
          email: "Guillermo@gmail.com",
          contrasena: encryptedContra1,
          telefono: "653456789",
          direccion: "C/Mallorca 14",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Lucía",
          apellidos: "Tapia",
          fecha_nacimiento: "1983-12-13",
          email: "Lucia@gmail.com",
          contrasena: encryptedContra1,
          telefono: "664567890",
          direccion: "C/Preciados 2",
          id_rol: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Ricardo",
          apellidos: "Ríos",
          fecha_nacimiento: "1970-01-24",
          email: "Ricardo@gmail.com",
          contrasena: encryptedContra1,
          telefono: "675678901",
          direccion: "Avda Ramón y Cajal 10",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Daniela",
          apellidos: "Flores",
          fecha_nacimiento: "1998-04-14",
          email: "Daniela@gmail.com",
          contrasena: encryptedContra1,
          telefono: "686789012",
          direccion: "C/Betis 17",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Mauricio",
          apellidos: "Castro",
          fecha_nacimiento: "1990-08-01",
          email: "Mauricio@gmail.com",
          contrasena: encryptedContra1,
          telefono: "697890123",
          direccion: "Plaza del Obradoiro 1",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Martín",
          apellidos: "Guzmán",
          fecha_nacimiento: "1963-04-26",
          email: "Martin@gmail.com",
          contrasena: encryptedContra1,
          telefono: "708901234",
          direccion: "Paseo de la Concha 4",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Valentina",
          apellidos: "Camacho",
          fecha_nacimiento: "1979-05-01",
          email: "Valentina@gmail.com",
          contrasena: encryptedContra1,
          telefono: "719012345",
          direccion: "C/Granada 6",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Camila",
          apellidos: "Vargas",
          fecha_nacimiento: "1990-04-16",
          email: "Camila@gmail.com",
          contrasena: encryptedContra1,
          telefono: "730123456",
          direccion: "C/Pelayo 20",
          id_rol: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
