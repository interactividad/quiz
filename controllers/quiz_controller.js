// GET /quizes/question
exports.question=function (req,res){
  res.render('quizes/question',{title: 'Mega-Quiz',pregunta: 'Capital de Italia'});
};
// GET /quizes/answer
exports.answer=function (req,res){
  if(req.query.respuesta==="Roma") {
    res.render('quizes/answer',{title:"Mega-Quiz",respuesta: 'Correcto'});
  } else {
    res.render('quizes/answer',{title:"Mega-Quiz",respuesta: 'Incorrecto'});
  }
};
// GET /author
exports.author=function (req,res){
  res.render('author',{title: 'Mega-Quiz',nombre: 'Ignacio Romero', foto:"images/foto.jpeg",video:"images/video.mp4"});
};
