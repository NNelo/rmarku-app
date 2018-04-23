/**
 * AlumnoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// var cont = 0;   //se ejecuta con sails lift
module.exports = {
  list: async function(req, res) {

  var alumnos = await Alumno.find({

  });

  // res.send("hola desde list AlumoController" + cont++);
  // res.view('pages/test', {cont: cont++ , ip: req.ip});
  // res.view('pages/test', {a: JSON.stringify(alumnos)});
    res.view('pages/test', {a: alumnos});

  }
};

