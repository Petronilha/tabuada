const list = (request, response) => {
  return response.render('tabuada/list')
}

const tabuada = (request, response) => {
  return response.render('tabuada/tabuada', {
    num: request.params.num
  })
}

module.exports = {
  list,
  tabuada
}