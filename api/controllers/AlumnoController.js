/**
 * AlumnoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// var cont = 0;   //se ejecuta con sails lift
module.exports = {
  list: async function (req, res) {

    var alumnos = await Alumno.find({});

    // res.send("hola desde list AlumoController" + cont++);
    // res.view('pages/test', {cont: cont++ , ip: req.ip});
    // res.view('pages/test', {a: JSON.stringify(alumnos)});
    res.view('pages/test', {a: alumnos});

  },

  add: async function (req, res) {
    var parm = req.allParams();

    var alumno = {
      nombre: parm.nombre,
      apellido: parm.apellido,
      dni: parm.dni,
      edad: parm.edad
    };

    var datos = await Alumno.create(alumno);

    var alumnos = await Alumno.find({dni: alumno.dni});

    res.view('pages/test', {a: alumnos});
  },

  buscar: async function (req, res) {

    var alumnos = await Alumno.find({nombre: req.allParams().nombre});

    res.view('pages/test', {a: alumnos});
  },
};

