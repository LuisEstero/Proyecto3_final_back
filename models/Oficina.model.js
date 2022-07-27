const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const oficinaSchema = new Schema(
  {
    Name: String,
    Direccion: String,
    image: String,

  },

  {
    timestamps: true,
  }
);


oficinaSchema.pre("save", function(next) {
  // console.log(this)

  const nameToUpper = this.name.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ')

  this.name = nameToUpper

    next();
});


 const Oficina = model("Oficina", oficinaSchema);

module.exports = Oficina;

