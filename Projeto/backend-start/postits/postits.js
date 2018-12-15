// const postits = [
//   {
//     id: 1,
//     title: 'Tarefas de casa',
//     description: 'Lavar roupa\n Lavar louça \n Ir ao mercado'
//   },
//   {
//     id: 2,
//     title: 'Lista de mercado',
//     description: 'Arroz\n Feijão\n Milho'
//   },
//   {
//     id: 3,
//     title: 'Estudar para prova',
//     description: 'Ler livro "Os segredos do Ninja Javascript"'
//   }
// ];

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PostitSchema = new Schema(
  {
    _id: {type: mongoose.Schema.Types.ObjectId, auto: true},
    title: {type: String},
    description: {type: String}
  },
  {
    collection: "postits",
    versionKey: false,
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);

PostitSchema.virtual("id").get(function() {
  return this._id;
});

let postits = mongoose.model("postits", PostitSchema)

module.exports = postits;
