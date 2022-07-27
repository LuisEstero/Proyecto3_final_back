
const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const salaReunionesSchema = new Schema(
  {
    name: String,
    direccion: String,
    image: String,

  },

  {
    timestamps: true,
  }
);


salaReunionesSchema.pre("save", function(next) {
  // console.log(this)

  const nameToUpper = this.name.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ')

  this.name = nameToUpper

    next();
});


 const SalaReuniones = model("SalaReuniones", salaReunionesSchema, "sala-reuniones");

module.exports = SalaReuniones;

