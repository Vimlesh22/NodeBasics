const mongoose = require('mongoose');


var noteSchema = mongoose.Schema({
  title : String,
  description : String
});

var Note = mongoose.model('Notes',noteSchema);

function NoteModel() {

}

NoteModel.prototype.createNotesModel = function (title,description,callback) {
  var note = new Note({
    title : title,
    description : description
  });
  note.save()
  .then((result,err) => {
    if(result){
        callback(result);
    }else {
      callback(null,err);
    }
  });
};


NoteModel.prototype.getNotesModel = function (callback) {
  Note.find()
  .then((result,err) => {
    if(result){
      callback(result);
    }else {
      callback(null,err);
    }
  });
};


NoteModel.prototype.deleteNoteModel = (id,callback) => {
  Note.remove({_id:id}).then((result,err) => {
    if(result){
      callback(result);
    }else {
      callback(null,err);
    }
  });
};

NoteModel.prototype.updateNoteModel = (id,title,callback) => {
  Note.update({id : id},{ $set : { title : title }})
  .then((result,err) => {
    if(result){
      callback(result)
    }else {
      callback(null,err)
    }
  })
}



module.exports = new NoteModel() ;
