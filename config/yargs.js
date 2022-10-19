const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      describe: "Es la base de la tabla de multiplicar",
    },

    l: {
      alias: "listar",
      type: "boolean",
      default: false,
      describe: "Muesta la tabla en consola",
    },

    h: {
      alias: "hasta",
      type: "number",
      default: 10,
      describe: "En el limite hasta donde se va a mostrar la tabla",
    },
  })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw "La base y el limite tiene que ser un numero";
    }

    return true;
  }).argv;

module.exports = argv;
