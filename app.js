const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

console.clear();

/*const [, , arg3 = "base-5"] = process.argv;
const [, base = 5] = arg3.split("="); */

//console.log(process.argv);
//console.log(argv);

//console.log("base:yargs", argv.base);

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));

//const base = 5;

/*fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
  if (err) throw err;

  console.log(`tabla-${base}.txt creado`);
}); */

/*

tarea:

opcion('l')
listar
boolean
default: false




*/
