function notFound(req,res,next){
  res.status(404).send({mesagem:"Página não encontrada"})
}

export default notFound;