const notesService = require('../service/notesService');

function NotesController()
{

};

NotesController.prototype.createNote = (req,res,next) => {
  var title = req.body.title;
  var description = req.body.description;
  notesService.createNotesService(title,description,(result,err) => {
    if(result) {
      res.status(200).json({
        message : result
      })
    }else{
      res.status(500).json({
        error : err
      })
    }
  });
};

NotesController.prototype.getNote = (req,res,next) => {
  notesService.getNotesService((result,err) => {
    if(result){
      res.status(200).json({
        message : result
      })
    }else {
      res.status(500).json({
        error : err
      })
    }
  });
};

NotesController.prototype.deleteNote = (req,res,next) => {
  var id = req.body._id;
  notesService.deleteNoteService(id,(result,err) => {
    if(result){
      res.status(200).json({
        result : result
      })
    }else {
      res.status(500).json({
        error : err
      })
    };
  });
};

NotesController.prototype.updateNote = (req,res,next) => {
  var id = req.body._id;
  var title = req.body.title;
  notesService.updateNoteService(id,title,(result,err) => {
    if(result){
      res.status(200).json({
        result : result
      })
    }else {
      res.status(500).json({
        error : err
      })
    }
  });
};


module.exports = new NotesController();
