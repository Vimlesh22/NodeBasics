const model = require('../model/notesModel');
function NotesService(){

}

NotesService.prototype.createNotesService = (title,description,callback) => {
  model.createNotesModel(title,description,(result,err) => {
    if(result){
      callback(result);
    }else {
      callback(null,err);
    }
  });
};

NotesService.prototype.getNotesService = (callback) => {
  model.getNotesModel((result,err) => {
    if(result){
       callback(result);
   }else {
     callback(null,err);
   }
 });
};

NotesService.prototype.deleteNoteService = (id,callback) => {
  model.deleteNoteModel(id,(result,err) => {
    if(result){
       callback(result);
   }else {
     callback(null,err);
   }
 });
}

NotesService.prototype.updateNoteService = (id,title,callback) => {
  model.updateNoteModel(id,title,(result,err) =>  {
    if(result){
       callback(result);
   }else {
     callback(null,err);
   }
 });
}

module.exports = new NotesService();
